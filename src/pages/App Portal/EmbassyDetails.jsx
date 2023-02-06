import React from "react";

const EmbassyDetails = (props) => {
  return (
    <>
      <form action="" className="Form">
        <div className="inputField">
          <label htmlFor="">Travel Period</label>
          <input type="date" value={props.appData.startDate} onChange={(e) => {props.setAppData({...props.appData, startDate: e.target.value})}}/>
          <input type="date" value={props.appData.endDate} onChange={(e) => {props.setAppData({...props.appData, endDate: e.target.value})}}/>
        </div>
        <div className="inputField">
          <label htmlFor="">Name of Embassy</label>
          <input type="text" name="embassyName" value={props.appData.embassyName} onChange={(e) => {props.setAppData({...props.appData, embassyName: e.target.value})}}/>
        </div>
        <div className="inputField textarea ">
          <label htmlFor="">Reason for Travelling</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="inputField">
          <label htmlFor="">Other Details</label>
          <input type="text"  id=""  name="otherDetails" value={props.appData.otherDetails} onChange={(e) => {props.setAppData({...props.appData, otherDetails: e.target.value})}}/>
        </div>
      </form>
    </>
  );
};

export default EmbassyDetails;
