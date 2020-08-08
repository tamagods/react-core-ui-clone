import React, { Fragment } from 'react';

function NavItemLeft() {
    return (
        <Fragment>
            <li className="nav-item px-3">
                <a className="nav-link" href="/#">Dashboard</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" href="/#">Users</a>
            </li>
            <li className="nav-item px-3">
                <a className="nav-link" href="/#">Settings</a>
            </li>
        </Fragment>
    )
}

export default NavItemLeft;
