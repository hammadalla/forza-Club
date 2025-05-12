// import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import AppointmentIcon from '../appointmentIcon/AppoinmentIcon';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from "react";
export default function Navbar() {



    const [scrolled, setscrolled] = useState(false)

    const closeMenu = () => {
        const menu = document.getElementById('navbarSupportedContent');
        if (menu && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            setscrolled(offset > 0)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>

            <div>
                <nav className={`navbar navbar-expand-lg ${scrolled ? 'position-absolute': 'fixed-top' }`}>
                    <div className="container">
                        <NavLink to="/" className="navbar-brand">
                            <img
                                src={logo}
                                alt="Logo"
                                className={"logo"}
                            />
                        </NavLink>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <FaBars size={25} color="white" />
                        </button>

                        <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav navbar-border m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/programes">Programs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/ourstaff">Our trainers</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/gallery">Gallery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                            <AppointmentIcon />
                    </div>
                </nav>

            </div>

        </>
    )
}
