import React, {Fragment} from 'react';
import {FaBars, FaCartPlus, FaEnvelopeOpen, FaEnvelopeOpenText} from "react-icons/fa"
import {AiFillHome} from "react-icons/ai";
import {IoIosPaper, IoMdHelpCircle, IoMdPeople} from "react-icons/io";
import {Link} from "react-router-dom";

const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        className: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIosPaper/>,
        className: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartPlus/>,
        className: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoMdPeople/>,
        className: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoMdHelpCircle/>,
        className: 'nav-text'
    },
];

const Sidebar = () => {
    return (
        <Fragment>{
            sidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.className}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </Fragment>
    );
};

export default Sidebar;