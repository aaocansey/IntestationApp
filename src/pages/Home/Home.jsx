import React from 'react';
import Cards from '../../Components/Cards';
import Footer from '../../Components/Footer';
import Headliner from '../../Components/Headliner';
import Navbar from '../../Components/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div className={'homePage'}>
            <Navbar/>
            <Headliner />
            <Cards />
            <Footer />
        </div>
    );
}

export default Home;
