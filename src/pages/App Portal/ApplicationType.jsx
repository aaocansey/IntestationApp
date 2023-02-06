import React from "react";

const ApplicationType = (props) => {
  return (
    <>
      <form action="" className="appType Form">
        <div className="inputField appType">
          <label htmlFor="">Select Application Type</label>
          <select name="appType" value={props.appData.appType} onChange={(e) => {props.setAppData({...props.appData, appType: e.target.value})}}>
            <option
              className="option"
            >
              Select Application Type
            </option>
            <option
              className="option"
            >
              Introductory Letter
            </option>
            <option
              className="option"
            >
              Attestation
            </option>
          </select>
        </div>
      </form>
    </>
  );
};

export default ApplicationType;
