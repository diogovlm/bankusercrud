import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar (){
    return (
        <div className='navbar-container'>
            <Link to="/">View</Link>
            <Link to="/newuser">Create</Link>
        </div>
    )
}