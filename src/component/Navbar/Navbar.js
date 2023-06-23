import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menucl, setMenucl] = useState(true);
    
    const addMenu = () => {
        if (menucl == true) {
            setMenucl(false);
        }
        else {
            setMenucl(true);
        }
    }

    return (
        <>
            <div className="navbars navigation">
                <div className="my-logo">
                    <p><NavLink to="/" exact>Raj</NavLink></p>
                </div>
                <div className="menu-bar" onClick={addMenu}>
                    {
                        menucl ? <i className="fas fa-bars" title="menu"></i> :
                            <i className="fas fa-times" title="close"></i>
                    }
                </div>
            </div>

            <nav className="navbars navbars-expand-lg navbars-mainbg" style={(!menucl) ? {width : 100+'%'} : {width : 0+'%'}}>
            <div className="collapse navbars-collapse" id="navbarsSupportedContent">
                <ul className="navbars-nav ml-auto">
                    <li className="nav-item active">
                        <span></span>
                        <span></span>
                        <NavLink className="nav-link" to="/" exact onClick={addMenu}>
                            <i className="fas fa-tachometer-alt"></i>Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <span></span>
                        <span></span>
                        <NavLink className="nav-link" to="/about" exact onClick={addMenu}>
                            <i className="far fa-address-book"></i>About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <span></span>
                        <span></span>
                        <NavLink className="nav-link" to="/project" exact onClick={addMenu}>
                            <i className="far fa-clone"></i>Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <span></span>
                        <span></span>
                        <NavLink className="nav-link" to="/skill" exact onClick={addMenu}>
                            <i className="far fa-chart-bar"></i>Skill
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <span></span>
                        <span></span>
                        <NavLink className="nav-link" to="/" exact onClick={addMenu}>
                            <i class="fas fa-university"></i>Education
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <span></span>
                        <span></span>
                        <NavLink className="nav-link" to="/contact" exact onClick={addMenu}>
                            <i className="far fa-copy"></i>Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Navbar;