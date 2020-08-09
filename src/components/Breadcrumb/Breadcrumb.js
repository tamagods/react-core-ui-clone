import React, { Fragment } from 'react';
import './Breadcrumb.scss';

function Breadcrumb() {
    return (
        <Fragment>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#/">Home</a>
                </li>
                <li className="breadcrumb-item active">
                    <span>Dashboard</span>
                </li>
                <li className="breadcrumb-menu d-md-down-none">
                    <div aria-label="Button group with nested dropdown" className="btn-group" role="group">
                        <a className="btn" href="/#">
                            <i className="icon-speech"></i>
                        </a>
                        <a className="btn" href="#/dashboard">
                            <i className="icon-graph"></i> &nbsp;Dashboard
                            </a>
                        <a className="btn" href="/#">
                            <i className="icon-settings"></i> &nbsp;Settings
                            </a>
                    </div>
                </li>
            </ol>
        </Fragment>
    )
}

export default Breadcrumb;
