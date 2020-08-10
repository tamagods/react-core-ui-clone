import React, { Fragment } from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <Fragment>
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/dashboard">
                                <i className="nav-icon icon-speedometer"></i>
                                Dashboard
                                <span className="badge badge-info">NEW</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}

export default Sidebar;
