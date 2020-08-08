import React, { Fragment } from 'react'
import avatar from '../../../assets/img/avatar.jpeg';

function NavItemRight() {
    return (
        <Fragment>
            <li className="nav-item dropdown d-md-down-none">
                <a className="nav-link" href="/#" id="simple-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="icon-bell"></i>
                    <span className="badge badge-pill badge-danger">5</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg" aria-labelledby="simple-dropdown">
                    <div className="dropdown-header text-center">
                        <strong>You have 5 notifications</strong>
                    </div>
                    <a className="dropdown-item" href="/#">
                        <i className="icon-user-follow text-success"></i>
                             New user registered
                             </a>
                    <a className="dropdown-item" href="/#">
                        <i className="icon-user-unfollow text-danger"></i>
                            User deleted
                            </a>
                    <a className="dropdown-item" href="/#">
                        <i className="icon-chart text-info"></i>
                            Sales report is ready
                            </a>
                    <a className="dropdown-item" href="/#">
                        <i className="icon-basket-loaded text-primary"></i>
                            New client </a>
                    <a className="dropdown-item" href="/#">
                        <i className="icon-speedometer text-warning"></i>
                            Server overloaded
                            </a>
                </div>
            </li>
            <li className="nav-item dropdown d-md-down-none">
                <a className="nav-link" href="/#">
                    <i className="icon-list"></i>
                    <span className="badge badge-pill badge-warning">15</span>
                </a>
            </li>
            <li className="nav-item dropdown d-md-down-none">
                <a className="nav-link" href="/#">
                    <i className="icon-envelope-letter"></i>
                    <span className="badge badge-pill badge-info">7</span>
                </a>
            </li>
            <li className="nav-item dropdown d-md-down-none">
                <a className="nav-link" href="/#">
                    <i className="icon-location-pin"></i>
                </a>
            </li>
            <li className="nav-item dropdown">
                <a aria-haspopup="true" id="user-dropdown" className="nav-link" data-toggle="dropdown" href="/#" role="button" aria-expanded="false">
                    <img alt="test@example.com" className="img-avatar" src={avatar} />
                </a>
                {/* <div aria-labelledby="simple-dropdown" className="dropdown-menu dropdown-menu-right" style="left: auto; right: 0px;"><div className="dropdown-header text-center"><strong>Account</strong></div><a className="dropdown-item" href="#"><i className="fa fa-bell-o"></i> Updates<span className="badge badge-info">42</span></a><a className="dropdown-item" href="#"><i className="fa fa-envelope-o"></i> Messages<span className="badge badge-success">42</span></a><a className="dropdown-item" href="#"><i className="fa fa-tasks"></i> Tasks<span className="badge badge-danger">42</span></a><a className="dropdown-item" href="#"><i className="fa fa-comments"></i> Comment<span className="badge badge-warning">42</span></a><div className="dropdown-header text-center"><strong>Settings</strong></div><a className="dropdown-item" href="#"><i className="fa fa-user"></i> Profile</a><a className="dropdown-item" href="#"><i className="fa fa-wrench"></i> Setting</a><a className="dropdown-item" href="#"><i className="fa fa-usd"></i> Payments<span className="badge badge-dark">42</span></a><a className="dropdown-item" href="#"><i className="fa fa-file"></i> Projects<span className="badge badge-primary">42</span></a><div className="divider"></div><a className="dropdown-item" href="#"><i className="fa fa-shield"></i> Lock account</a><a className="dropdown-item" href="#"><i className="fa fa-lock"></i> Logout</a></div></li> */}
                <div aria-labelledby="user-dropdown" className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-header text-center">
                        <strong>Account</strong>
                    </div>
                    <a className="dropdown-item" href="/#">
                        <i className="fa fa-bell-o"></i>
                        Updates
                        <span className="badge badge-info">42</span>
                    </a>
                    <a className="dropdown-item" href="/#">
                        <i className="fa fa-envelope-o"></i>
                        Messages<span className="badge badge-success">42</span>
                    </a><a className="dropdown-item" href="/#">
                        <i className="fa fa-tasks"></i>
                        Tasks
                        <span className="badge badge-danger">42</span>
                    </a>
                    <a className="dropdown-item" href="/#">
                        <i className="fa fa-comments"></i>
                        Comment
                        <span className="badge badge-warning">42</span>
                    </a>
                    <div className="dropdown-header text-center">
                        <strong>Settings</strong>
                    </div>
                    <a className="dropdown-item" href="/#">
                        <i className="fa fa-user"></i>
                        Profile
                        </a>
                    <a className="dropdown-item" href="/#">
                        <i className="fa fa-wrench"></i>
                        Setting</a>
                    <a className="dropdown-item" href="/#">
                        <i className="fa fa-usd"></i>
                        Payments
                        <span className="badge badge-dark">42</span>
                    </a>
                    <a className="dropdown-item" href="/#">
                        <i className="fa fa-file"></i>
                        Projects
                        <span className="badge badge-primary">42</span>
                    </a>
                    <div className="divider"></div>
                    <a className="dropdown-item" href="/#">
                        <i className="fa fa-shield"></i>
                        Lock account
                        </a>
                    <a className="dropdown-item" href="/#">
                        <i className="fa fa-lock"></i>
                        Logout</a>
                </div>
            </li>
        </Fragment >
    )
}

export default NavItemRight;
