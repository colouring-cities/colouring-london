import json
import datetime
import psycopg2
import os

def get_connection():
    return psycopg2.connect(
        host=os.environ['PGHOST'],
        dbname=os.environ['PGDATABASE'],
        user=os.environ['PGUSER'],
        password=os.environ['PGPASSWORD']
    )

def filepath():
    return os.path.dirname(os.path.realpath(__file__)) + os.sep + "data.json"

def insert_entry(connection, e):
    elements = []
    application_url = "NULL"
    if e["application_url"] != None:
        application_url = "'" + e["application_url"] + "'"
    with connection.cursor() as cur:
        cur.execute('''INSERT INTO
                planning_data (planning_application_id, planning_application_link, description, registered_with_local_authority_date, decision_date, last_synced_date, status, data_source, data_source_link, uprn)
            VALUES
                (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ''', (e["application_id"], application_url, e["description"], e["registered_with_local_authority_date"], e["decision_date"], e["last_synced_date"], e["status"], e["data_source"], e["data_source_link"], e["uprn"]))
        connection.commit()

def parse_date_string_into_datestring(incoming):
    date = None
    try:
        date = datetime.datetime.strptime(incoming, "%d/%m/%Y") # '21/07/2022'
    except ValueError:
        date = datetime.datetime.strptime(incoming, "%Y-%m-%dT%H:%M:%S.%fZ") # '2022-08-08T20:07:22.238Z'
    return datetime.datetime.strftime(date, "%Y-%m-%d")

def process_status(status):
    """return None if status is invalid"""
    if status == "Refused":
        status = "Rejected"
    if status == "Appeal Received":
        status = "Appeal In Progress"
    if status == None:
        status = "Unknown"
    if (status in ["Approved", "Rejected", "Appeal In Progress", "Withdrawn", "Unknown"]):
        return status
    print("Unexpected status " + status)
    if status not in ["No Objection to Proposal (OBS only)", "Objection Raised to Proposal (OBS only)", "Not Required", "Unknown", "Lapsed", "SECS", "Comment Issued", "ALL DECISIONS ISSUED", "Closed", "Declined to Determine"]:
        print("New unexpected status " + status)
    status_length_limit = 50 # see migrations/033.planning_livestream_data.up.sql
    if len(status) > 50:
        print("Status was too long and was skipped:", status)
        return None
    return status

def main():
    connection = get_connection()
    with connection.cursor() as cur:
        cur.execute("TRUNCATE planning_data")
    with open(filepath(), 'r') as content_file:
        data = json.load(content_file)
        if data['rawResponse']['timed_out']:
            raise Exception("query getting livestream data has failed")
        if data['is_partial']:
            raise Exception("query getting livestream data has failed")
        if data['is_running']:
            raise Exception("query getting livestream data has failed")
        for entry in data['rawResponse']['hits']['hits']:
            description = entry['_source']['description'].strip()
            application_id = entry['_source']['id']
            decision_date = parse_date_string_into_datestring(entry['_source']['decision_date'])
            last_synced_date = parse_date_string_into_datestring(entry['_source']['last_synced'])
            uprn = entry['_source']['uprn']
            status = process_status(entry['_source']['status'])
            if uprn == None:
                continue
            entry = {
                "description": description,
                "decision_date": decision_date,
                "last_synced_date": last_synced_date,
                "application_id": application_id,
                "application_url": entry['_source']['url_planning_app'],
                "registered_with_local_authority_date": parse_date_string_into_datestring(entry['_source']['valid_date']),
                "uprn": uprn,
                "status": status,
                "data_source": "Greater London Authority's Planning London DataHub",
                "data_source_link": "https://data.london.gov.uk/dataset/planning-london-datahub?_gl=1%2aprwpc%2a_ga%2aMzQyOTg0MjcxLjE2NTk0NDA4NTM", # TODO test
                }
            insert_entry(connection, entry)

if __name__ == '__main__':
    main()
