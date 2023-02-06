import React from "react";

const ProgramType = (props) => {
  return (
    <>
      <form action="" className="Form">
        <div className="inputField nameTitle">
          <label htmlFor="">Programme</label>
          <select name="dropdown" value={props.appData.program} onChange={(e) => {props.setAppData({...props.appData, program: e.target.value})}}>
            <option value="Mr" selected>
              BSc. Acturial Science
            </option>
            <option value="Miss">BSc. Chemistry</option>
          </select>
        </div>
        <div className="inputField nameTitle">
          <label htmlFor="">Current Level/Year</label>
          <select name="dropdown" value={props.appData.level} onChange={(e) => {props.setAppData({...props.appData, level: e.target.value})}}>
            <option value="1" selected>
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="inputField othernames">
          <label htmlFor="">Year of Admission</label>
          <input type="month" value={props.appData.admissionYear} name='admissionYear' onChange={(e) => {props.setAppData({...props.appData, admissionYear: e.target.value})}}/>
        </div>
        <div className="inputField othernames">
          <label htmlFor="">Year of Completion</label>
          <input type="month" value={props.appData.completionYear} name='completionYear' onChange={(e) => {props.setAppData({...props.appData, completionYear: e.target.value})}}/>
        </div>
      </form>
    </>
  );
};

export default ProgramType;
