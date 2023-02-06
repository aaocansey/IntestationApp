import React from 'react';
import initlogo from '../images/intestationLogo.PNG'
import { Link } from 'react-router-dom';
import '../pages/Home/Home.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link to='/' className={'NavBrand'}>
                <img src={initlogo} alt="Brand Logo"  />
            </Link>
            <nav>
                <Link className={'navLink'} to='/login'>Login</Link>
                <Link className={'navLink'} to='/register'>Register</Link>
            </nav>
        </div>
    );
}

export default Navbar;
