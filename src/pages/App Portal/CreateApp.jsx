import React from "react";
import '../App Portal/css/createApp.css'
const CreateApp = (props) => {
  return (
    <div>
      <table className="table">
        <thead className="thead">
          <tr>
            <td>Date</td>
            <td>Application ID</td>
            <td>Application Type</td>
            <td>Embassy</td>
            <td>Expected Period of travel</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody className="tbody">
          {props.formData.applications.map((item) => {
            return (
              <tr>
                <td></td>
                <td>{item.appID}</td>
                <td>{item.appType}</td>
                <td>{item.embassyName}</td>
                <td>{`${item.startDate} - ${item.endDate}`}</td>
                <td><button>Details</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CreateApp;
