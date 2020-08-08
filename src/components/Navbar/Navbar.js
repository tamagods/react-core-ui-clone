import React from 'react';
import NavItemLeft from './NavItem/NavItemLeft';
import NavItemRight from './NavItem/NavItemRight';

function Navbar() {

    const handleClicked = (event) => {
        event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };

    const handleClickedMobile = (event) => {
        event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };

    return (
        <header className="app-header navbar">
            <button className="navbar-toggler d-lg-none" type="button" onClick={handleClickedMobile}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/#">{null}</a>
            <button className="navbar-toggler d-md-down-none" type="button" onClick={handleClicked}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="nav navbar-nav d-md-down-none">
                <NavItemLeft />
            </ul>
            <ul className="nav navbar-nav ml-auto">
                <NavItemRight />
            </ul>
            <button type="button" className="navbar-toggler d-none d-lg-block">
                <span className="navbar-toggler-icon"></span>
            </button>
        </header >
    )
}

export default Navbar;
