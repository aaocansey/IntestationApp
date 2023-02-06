import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PortalForm from '../Components/PortalForm.jsx';
import AppPortal from '../pages/App Portal/AppPortal.jsx';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/Login/Login.jsx';
import Register from '../pages/Register.jsx';


class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/AppPortal" element={<AppPortal />} />
                    <Route path="/portalForm" element={<PortalForm />} />
                </Routes>
            </Router>
        );
    }
}

export default AppRouter;
