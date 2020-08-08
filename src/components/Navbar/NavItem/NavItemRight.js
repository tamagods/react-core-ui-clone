import React, { Fragment } from 'react'

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
            <li className="nav-item dropdown" placement="bottom right">
                <a className="nav-link" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">
                </a>
            </li>
        </Fragment>
    )
}

export default NavItemRight;
