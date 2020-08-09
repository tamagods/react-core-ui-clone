import React from 'react';
import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <nav className="sidebar-nav">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="/dashboard">
                            <i className="nav-icon icon-speedometer"></i>
                            Dashboard
                            <span className="badge badge-info">NEW</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;
