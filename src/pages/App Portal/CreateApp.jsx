import React from "react";
import '../App Portal/css/createApp.css'
import { useSelector } from "react-redux";


const CreateApp = () => {

  const appData = useSelector((state) => state.applications);
  console.log(appData)  

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
          {appData.applications.map((item) => {
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
