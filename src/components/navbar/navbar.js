import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai";
import Sidebar from "../sidebar";
import {IconContext} from "react-icons";


import './navbar.css';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Fragment>
            <IconContext.Provider value={{color:'#fff'}}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiOutlineClose/>
                            </Link>
                        </li>
                        <Sidebar/>
                    </ul>
                </nav>
            </IconContext.Provider>
        </Fragment>
    );
};

export default Navbar;