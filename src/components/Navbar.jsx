/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from '../assets/logo.png';
import {NavLink, useNavigate} from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import './comp.css';

const Navbar = () => {


  

  return (
    <nav className="nav">
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="links">
           <a href="">Home</a>
           <a href="">Products</a>
           <a href="" >Contact</a>
        </div>
        <div className="menu">
        <DensityMediumIcon/>
        </div>
    </nav>
  )
}

export default Navbar;
