import React from 'react';
import { Link } from 'react-scroll';
import './Navigation.css';

export default function Navigation() {
    return (
        <>
        <nav className="navbar">
            <div className="logo"><a href="https://www.codechef.com/users/thakurups" target="_blank">Umesh Pratap Singh</a></div>
            <ul className="menu">
                <li ><a href="https://drive.google.com/file/d/1GIlpOt2Df804GNDK1iUnyftz-5baa5wH/view?usp=sharing" className="nav-item" target="_blank">Resume</a></li>
                <li ><Link to="edu" className="nav-item" smooth={true} >Education</Link></li>
                <li ><Link to="skills" className="nav-item" smooth={true}>Skills</Link></li>
                <li ><Link to="proj" className="nav-item" smooth={true}>Projects</Link></li>
                <li ><Link to="contact" className="nav-item" smooth={true}>Contact</Link></li>
            </ul>

    </nav>
    </>
    )
}
