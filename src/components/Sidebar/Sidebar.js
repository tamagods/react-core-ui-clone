import React, { Fragment } from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <Fragment>
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to="/">
                                <i className="nav-icon icon-speedometer"></i>
                                Dashboard
                                <span className="badge badge-info">NEW</span>
                            </NavLink>
                        </li>
                        <li className="nav-title">
                            Theme
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to="/theme/colors">
                                <i className="nav-icon icon-drop"></i>
                                Colors
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}

export default Sidebar;
