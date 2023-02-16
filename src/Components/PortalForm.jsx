import {React, useState} from 'react';
import ApplicationType from '../pages/App Portal/ApplicationType';
import EmbassyDetails from '../pages/App Portal/EmbassyDetails';
import PersonalInfo from '../pages/App Portal/PersonalInfo';
import ProgramType from '../pages/App Portal/ProgramType';
import Review from '../pages/App Portal/Review';
import '../pages/App Portal/css/appPortal.css'
import { useDispatch } from 'react-redux';
import { createApplication } from '../redux/reducers/applications_reducer';

const PortalForm = (props) => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [appData, setAppData] = useState(
        {
        appID: '',
        title: '',
        surname: '',
        otherNames: '',
        dob: '',
        primaryContact: '',
        secondaryContact: '',
        appType: '',
        program: '',
        level: '',
        admissionYear: '',
        completionYear: '',
        programDuration: '',
        travelPeriod: '',
        embassyName: '',
        otherDetails: '',
          })

    const FormTitles = ['', 'Application Type', 'Program Details', 'Embassy Details', 'Review']

    const pageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo appData={appData} setAppData={setAppData}/>
        } else if (page === 1){
            return <ApplicationType appData={appData} setAppData={setAppData}/>
        }
         else if (page === 2){
            return <ProgramType appData={appData} setAppData={setAppData}/>
        }
         else if (page === 3){
            return <EmbassyDetails appData={appData} setAppData={setAppData}/>
        } else {
            return <Review />
        }
    }

    const display = {
       display: 'none'
    }

    const handleSubmit = () => {
        alert('Form Submitted')
        dispatch(createApplication(appData))
        console.log(appData);
    }
    
    
    return (
        <>
            <div className='progressbar'>

            </div>

            <div className='form-Container'>
                <div className='form-Head'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className='form-Body'>{pageDisplay()}</div>
                <div className='form-Footer'>
                    <button disabled={page === 0} onClick={() => {setPage(page - 1)}} style={page=== 0 ? display:null}>Prev</button>
                    <button  onClick={() => {(page === FormTitles.length -1 ) ? handleSubmit() : setPage(page + 1)}}>{page === FormTitles.length - 1 ? 'Submit':'Next'}</button>
                </div>
            </div>
        </>
    );
}

export default PortalForm;
