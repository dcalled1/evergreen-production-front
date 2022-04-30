import React from "react";
import MonitoredDatumCard from "./MonitoredDatumCard";

const ListMonitoredData = (props) => {
  const renderMonitoredData = props.data.map((e) => {
    return (
      <MonitoredDatumCard datum={e} removeHandle={props.removeHandle}></MonitoredDatumCard>
    );
  });
  return <div className="ui celled list"> { renderMonitoredData }</div>

}

export default ListMonitoredData;