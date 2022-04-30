import React from "react";

const MonitoredDatumCard = (props) => {
  const {event, date, crop, _id} = props.datum;
  return (
    <div className="item">
        <div className="content">
          <div className="header">{ event }</div>
          <div>{ date }</div>
          <div>{ crop }</div>
        </div>
        <div>
          <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }} onClick={() => props.removeHandle(_id)}></i>
        </div>
      </div>
  );

}

export default MonitoredDatumCard;