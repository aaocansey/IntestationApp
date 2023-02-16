import {configureStore} from '@reduxjs/toolkit'
import applications_reducer from './reducers/applications_reducer'


export const store = configureStore({
    reducer: {
        applications: applications_reducer
    },
})
