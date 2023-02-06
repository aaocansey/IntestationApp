import React from "react";
import '../App Portal/css/personalInfo.css'
const PersonalInfo = (props) => {
  
  return (
    <div className="personalInfo Form">
      <form action="">
        <div className="inputField nameTitle">
          <label htmlFor="">Title</label>
          <select  name='title' value={props.appData.title} onChange={(e) => {props.setAppData({...props.appData, title: e.target.value})}}>
            <option selected>
              Mr
            </option>
            <option>Miss</option>
          </select>
        </div>
        <div className="inputField surname">
          <label htmlFor="">Surname</label>
          <input type="text" value={props.appData.surname} name='surname' onChange={(e) => {props.setAppData({...props.appData, surname: e.target.value})}} />
        </div>
        <div className="inputField othernames">
          <label htmlFor="">Other Names</label>
          <input type="text" value={props.appData.otherNames} name='otherNames' onChange={(e) => {props.setAppData({...props.appData, otherNames: e.target.value})}} />
        </div>
        <div className="inputField DoB">
          <label htmlFor="">Date of Birth</label>
          <input type="date" value={props.appData.dob} name='dob' onChange={(e) => {props.setAppData({...props.appData, dob: e.target.value})}}/>
        </div>
        <div className="inputField prime-contact">
          <label htmlFor="">Primary Contact</label>
          <input type="number" value={props.appData.primaryContact} name='primaryContact' onChange={(e) => {props.setAppData({...props.appData, primaryContact: e.target.value})}}/>
        </div>
        <div className="inputField second-contact">
          <label htmlFor="">Secondary Contact</label>
          <input type="number" value={props.appData.secondaryContact} name='secondaryContact' onChange={(e) => {props.setAppData({...props.appData, secondaryContact: e.target.value})}}/>
        </div>
      </form>
      
    </div>
  );
};

export default PersonalInfo;
