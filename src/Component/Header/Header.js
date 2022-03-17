import React from 'react';
import {   Nav} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectUser } from '../../feature/userSlice'
import { NavLink } from 'react-router-dom';
import './Header.css'
import Logout from '../Logout/Logout'

const Header = () => {
  const user=useSelector(selectUser)
    return (
    
        <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <NavLink className="navl" to='/home'> <Nav.Link href="#home">Home</Nav.Link></NavLink>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="navl" to='/blog'> <Nav.Link href="#about">Blog</Nav.Link></NavLink>
        </li>
        {
          user?  <li className="nav-item">
          <NavLink className="navl" to='/login'> <Nav.Link href="#services">Login</Nav.Link></NavLink>
          </li> : <Logout></Logout>
        }
       
      

     
      </ul>
     
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;