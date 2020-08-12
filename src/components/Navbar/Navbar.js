import React from 'react';
import logo from '../../assets/img/core-ui.svg';
import NavItemLeft from './NavItem/NavItemLeft';
import NavItemRight from './NavItem/NavItemRight';
import './Navbar.scss';

function Navbar() {

    const handleClicked = (event) => {
        event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };

    const handleClickedMobile = (event) => {
        event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };

    const handleClickedAsidebar = (event) => {
        event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };

    return (
        <header className="app-header navbar">
            <button className="navbar-toggler d-lg-none" type="button" onClick={handleClickedMobile}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/dashboard">
                <img className="navbar-brand-full" src={logo} width="89" height="25" alt="CoreUI Logo" />
            </a>
            <button className="navbar-toggler d-md-down-none" type="button" onClick={handleClicked}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="nav navbar-nav d-md-down-none">
                <NavItemLeft />
            </ul>
            <ul className="nav navbar-nav ml-auto">
                <NavItemRight />
            </ul>
            <button type="button" className="navbar-toggler d-none d-lg-block" onClick={handleClickedAsidebar}>
                <span className="navbar-toggler-icon"></span>
            </button>
        </header >
    )
}

export default Navbar;
