import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applications: [
        {
          appID: "567780",
          title: "Mr",
          surname: "Ocansey",
          otherNames: "Albert Ahuma",
          dob: "",
          primaryContact: "",
          secondaryContact: "",
          appType: "Attestation",
          program: "",
          level: "",
          admissionYear: "",
          completionYear: "",
          programDuration: "",
          startDate:'01-02-2023', 
          endDate:'02-03-2024',
          embassyName: "Canada",
          otherDetails: "",
        },
        {
          appID: "458891",
          title: "Mr",
          surname: "Tachie",
          otherNames: "Joseph Amartey",
          dob: "",
          primaryContact: "",
          secondaryContact: "",
          appType: "Introductory",
          program: "",
          level: "",
          admissionYear: "",
          completionYear: "",
          programDuration: "",
          startDate:'01-02-2034', 
          endDate:'05-08-2045',
          embassyName: "USA",
          otherDetails: "",
        },
        {
          appID: "234560",
          title: "Mr",
          surname: "Kwao",
          otherNames: "Allan",
          dob: "",
          primaryContact: "",
          secondaryContact: "",
          appType: "Attestation",
          program: "",
          level: "",
          admissionYear: "",
          completionYear: "",
          programDuration: "",
          startDate: "05-06-2056",
          endDate: "08-09-2067",
          embassyName: "China",
          otherDetails: "",
        },
      ],
}

export const applicationsSlice = createSlice({
    name: 'applications',
    initialState,
    reducers: {
        createApplication: (state, action) => {
            action.payload.appID = Math.floor(Math.random() * 1000000).toString();
            state.applications = [...state.applications,action.payload]
        },
        
    }
})

export const {createApplication} = applicationsSlice.actions

export default applicationsSlice.reducer