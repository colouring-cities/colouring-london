import React, { Fragment } from 'react';

import InfoBox from '../../components/info-box';
import CheckboxDataEntry from '../data-components/checkbox-data-entry';

interface PlanningDataOfficialDataEntryProps {
    shownData: {
      uprn: string;
      building_id: number;
      description?: string;
      planning_application_link?: string;
      registered_with_local_authority_date?: string;
      decision_date?: string;
      last_synced_date?: string;
      data_source: string;
      data_source_link?: string;
  }[];
    allEntryCount: number,
}

const {useState} = React;

const LongText = ({ content,limit}) => {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (content == null) {
    return <div>{MissingData}</div>
  }

  if (content.length <= limit) {
    return <div>{content}</div>
  }
  if (showAll) {
    return <div> 
      {content} 
      <br/>
      <b onClick={showLess}>Shorten description</b>
    </div>
  }
  const toShow = content.substring(0, limit).trim() + "... ";
  return <div> 
    {toShow} 
    <br/>
    <b onClick={showMore}>Show full description</b>
  </div>
}

const Disclaimer = () => { return <Fragment><div><i><u>Disclaimer</u>: these data are currently incomplete and also often do not provide information on minor alterations. For comprehensive information on all applications please visit the local authorities' planning websites.</i></div></Fragment> }

const MissingData = "not provided by data source"

function ShowIfAvailable(data) {
  return <>{data ? data.toString() : MissingData }</>
}

const LinkIfAvailable = (link) => {
  return <>{link ? <a href={link.toString()}>{link.toString()}</a> : MissingData }</>
}

const PlanningDataOfficialDataEntry: React.FC<PlanningDataOfficialDataEntryProps> = (props) => {
    const data = props.shownData || [];
    if(data.length == 0) {
      if (props.allEntryCount == 0) {
        return (<Fragment>
                  <InfoBox type='success'>
                  <i>No live planning data available currently for this building polygon via the Planning London DataHub.</i>
                  <br/>
                  <Disclaimer />
                  </InfoBox>
                </Fragment>);
    } else {
      return (<Fragment>
                <InfoBox type='success'>
                <i>No live planning data for this date range, but this building has associated planning data now shown here.</i>
                <br/>
                <Disclaimer />
                </InfoBox>
              </Fragment>);
    }
  }
  return <>{data.map((item) => (
        <Fragment>
        <InfoBox type='success'>
            <Fragment>
                <div><i>Planning application status is streamed using live data uploaded by local authorities to the {item["data_source_link"] ? <a href={item["data_source_link"]}>{item["data_source"]}</a> : item["data_source"] }.</i></div>
                <br/>
                <div><b>Current planning application status for this site:</b> {ShowIfAvailable(item["status"])}</div>
                <div><b>Planning application ID:</b> {ShowIfAvailable(item["planning_application_id"])}</div>
                <div><b>Date registered by the planning authority (validation date)</b>: {ShowIfAvailable(item["registered_with_local_authority_date"])}</div>
                <div><b>Decision date</b>: {ShowIfAvailable(item["decision_date"])}</div>
                <div><b>Planning application link</b>: {LinkIfAvailable(item["planning_application_link"])}</div>
                <div><b>Description of proposed work</b>: {item["description"] ? <LongText content = {item["description"]} limit = {400}/> : MissingData}</div>
                <div><b>Most recent update by data provider:</b> {ShowIfAvailable(item["decision_date"])}</div>
                <br/>
                <Disclaimer />
            </Fragment>
        </InfoBox>
        </Fragment>
        )
      )
  }</>
};

export default PlanningDataOfficialDataEntry;
