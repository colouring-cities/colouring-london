import React, { Fragment } from 'react';

import { commonSourceTypes, dataFields } from '../../config/data-fields-config';
import DataEntry from '../data-components/data-entry';
import NumericDataEntry from '../data-components/numeric-data-entry';
import SelectDataEntry from '../data-components/select-data-entry';
import Verification from '../data-components/verification';
import withCopyEdit from '../data-container';

import { CategoryViewProps } from './category-view-props';
import InfoBox from '../../components/info-box';
import { DataEntryGroup } from '../data-components/data-entry-group';
import { MultiDataEntry } from '../data-components/multi-data-entry/multi-data-entry';

const AttachmentFormOptions = [
    "Detached",
    "Semi-Detached",
    "End-Terrace",
    "Mid-Terrace"
];

/**
* Type view/edit section
*/
const TypeView: React.FunctionComponent<CategoryViewProps> = (props) => {
    return (
        <Fragment>
            <DataEntryGroup name="Basic typology classification">
                <SelectDataEntry
                    title={dataFields.typology_classification.title}
                    slug="typology_classification"
                    value={props.building.typology_classification}
                    tooltip={dataFields.typology_classification.tooltip}
                    options={dataFields.typology_classification.items}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                />
                <Verification
                    slug="typology_classification"
                    allow_verify={props.user !== undefined && props.building.typology_classification !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("typology_classification")}
                    user_verified_as={props.user_verified.typology_classification}
                    verified_count={props.building.verified.typology_classification}
                />
                <SelectDataEntry
                    title={dataFields.typology_classification_source_type.title}
                    slug="typology_classification_source_type"
                    value={props.building.typology_classification_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.typology_classification_source_type.tooltip}
                    placeholder={dataFields.typology_classification_source_type.example}
                    options={dataFields.typology_classification_source_type.items}
                    />
                {(props.building.typology_classification_source_type == commonSourceTypes[0] ||
                    props.building.typology_classification_source_type == commonSourceTypes[1] ||
                    props.building.typology_classification_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.typology_classification_source_links.title}
                            slug="typology_classification_source_links"
                            value={props.building.typology_classification_source_links}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.typology_classification_source_links.tooltip}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup>
            <DataEntryGroup name="Architectural style/Historical period">
                <SelectDataEntry
                    title={dataFields.typology_style_period.title}
                    slug="typology_style_period"
                    value={props.building.typology_style_period}
                    tooltip={dataFields.typology_style_period.tooltip}
                    options={dataFields.typology_style_period.items}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                />
                <Verification
                    slug="typology_style_period"
                    allow_verify={props.user !== undefined && props.building.typology_style_period !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("typology_style_period")}
                    user_verified_as={props.user_verified.typology_style_period}
                    verified_count={props.building.verified.typology_style_period}
                />
                <SelectDataEntry
                    title={dataFields.typology_style_period_source_type.title}
                    slug="typology_style_period_source_type"
                    value={props.building.typology_style_period_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.typology_style_period_source_type.tooltip}
                    placeholder={dataFields.typology_style_period_source_type.example}
                    options={dataFields.typology_style_period_source_type.items}
                    />
                {(props.building.typology_style_period_source_type == commonSourceTypes[0] ||
                    props.building.typology_style_period_source_type == commonSourceTypes[1] ||
                    props.building.typology_style_period_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.typology_style_period_source_links.title}
                            slug="typology_style_period_source_links"
                            value={props.building.typology_style_period_source_links}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.typology_style_period_source_links.tooltip}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup>
            <DataEntryGroup name="Dynamic classification">
                <SelectDataEntry
                    title={dataFields.typology_dynamic_classification.title}
                    slug="typology_dynamic_classification"
                    value={props.building.typology_dynamic_classification}
                    tooltip={dataFields.typology_dynamic_classification.tooltip}
                    options={dataFields.typology_dynamic_classification.items}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                />
                <Verification
                    slug="typology_dynamic_classification"
                    allow_verify={props.user !== undefined && props.building.typology_dynamic_classification !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("typology_dynamic_classification")}
                    user_verified_as={props.user_verified.typology_dynamic_classification}
                    verified_count={props.building.verified.typology_dynamic_classification}
                />
                <SelectDataEntry
                    title={dataFields.typology_dynamic_classification_source_type.title}
                    slug="typology_dynamic_classification_source_type"
                    value={props.building.typology_dynamic_classification_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.typology_dynamic_classification_source_type.tooltip}
                    placeholder={dataFields.typology_dynamic_classification_source_type.example}
                    options={dataFields.typology_dynamic_classification_source_type.items}
                    />
                {(props.building.typology_dynamic_classification_source_type == commonSourceTypes[0] ||
                    props.building.typology_dynamic_classification_source_type == commonSourceTypes[1] ||
                    props.building.typology_dynamic_classification_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.typology_dynamic_classification_source_links.title}
                            slug="typology_dynamic_classification_source_links"
                            value={props.building.typology_dynamic_classification_source_links}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.typology_dynamic_classification_source_links.tooltip}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup>
            <DataEntryGroup name="Original Use">
                <MultiDataEntry
                    title={dataFields.typology_original_use.title}
                    slug="typology_original_use"
                    value={props.building.typology_original_use}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    confirmOnEnter={true}
                    tooltip={dataFields.typology_original_use.tooltip}
                    placeholder="Type new land use group here"
                    copyable={true}
                    autofill={true}
                    showAllOptionsOnEmpty={true}
                />
                <Verification
                    slug="typology_original_use"
                    allow_verify={props.user !== undefined && props.building.typology_original_use !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("typology_original_use")}
                    user_verified_as={props.user_verified.typology_original_use}
                    verified_count={props.building.verified.typology_original_use}
                />
                <SelectDataEntry
                    title={dataFields.typology_original_use_source_type.title}
                    slug="typology_original_use_source_type"
                    value={props.building.typology_original_use_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.typology_original_use_source_type.tooltip}
                    placeholder={dataFields.typology_original_use_source_type.example}
                    options={dataFields.typology_original_use_source_type.items}
                    />
                {(props.building.typology_original_use_source_type == commonSourceTypes[0] ||
                    props.building.typology_original_use_source_type == commonSourceTypes[1] ||
                    props.building.typology_original_use_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.typology_original_use_source_links.title}
                            slug="typology_original_use_source_links"
                            value={props.building.typology_original_use_source_links}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.typology_original_use_source_links.tooltip}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup>
            <DataEntryGroup name="Attachment/Adjacency">
                <SelectDataEntry
                    title={dataFields.building_attachment_form.title}
                    slug="building_attachment_form"
                    value={props.building.building_attachment_form}
                    tooltip={dataFields.building_attachment_form.tooltip}
                    options={AttachmentFormOptions}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                />
                <Verification
                    slug="building_attachment_form"
                    allow_verify={props.user !== undefined && props.building.building_attachment_form !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("building_attachment_form")}
                    user_verified_as={props.user_verified.building_attachment_form}
                    verified_count={props.building.verified.building_attachment_form}
                    />
                <SelectDataEntry
                    title={dataFields.building_attachment_source_type.title}
                    slug="building_attachment_source_type"
                    value={props.building.building_attachment_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.building_attachment_source_type.tooltip}
                    placeholder={dataFields.building_attachment_source_type.example}
                    options={dataFields.building_attachment_source_type.items}
                    />
                {(props.building.building_attachment_source_type == commonSourceTypes[0] ||
                    props.building.building_attachment_source_type == commonSourceTypes[1] ||
                    props.building.building_attachment_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.building_attachment_source_links.title}
                            slug="building_attachment_source_links"
                            value={props.building.building_attachment_source_links}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.building_attachment_source_links.tooltip}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup>
            {/*}
            <DataEntryGroup name="Other fields (in development)">
                <SelectDataEntry
                    title={dataFields.size_roof_shape.title}
                    slug="size_roof_shape"
                    value={props.building.size_roof_shape}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    disabled={true}
                    options={[
                        "Flat",
                        "Pitched",
                        "Other"
                    ]}
                />
                <DataEntry
                    title="Local typology mutations"
                    slug=""
                    value=""
                    mode='view'
                />
                <DataEntry
                    title="3D procedural model classifications"
                    slug=""
                    value=""
                    mode='view'
                />
                <DataEntry
                    title="Dynamic tissue type classification"
                    slug=""
                    value=""
                    mode='view'
                />
        
                {/* <NumericDataEntry
                    title={dataFields.date_change_building_use.title}
                    slug="date_change_building_use"
                    value={props.building.date_change_building_use}
                    tooltip={dataFields.date_change_building_use.tooltip}
                    min={1086}
                    max={new Date().getFullYear()}
                    step={1}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                />//*}
            </DataEntryGroup>*/}
        </Fragment>
    );
    };
const TypeContainer = withCopyEdit(TypeView);

export default TypeContainer;
