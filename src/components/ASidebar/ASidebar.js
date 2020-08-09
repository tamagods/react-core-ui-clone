import React from 'react';
import './ASidebar.scss';

function ASidebar() {

    const realError = console.error;
    console.error = (...x) => {
        if (x[0] === 'Warning: The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.%s') {
            return;
        }
        realError(...x);
    };

    return (
        <div className="aside-menu">
            <tabset className="tab-container">
                <ul className="nav nav-tabs" role="tablist" aria-label="Tabs">
                    <li className="nav-item active">
                        <a className="nav-link active" href="/#" role="tab" aria-controls="" aria-selected="true" id="simple-dropdown">
                            <span ></span>
                            <i className="icon-list"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#" role="tab" aria-controls="" aria-selected="false" id="">
                            <span ></span>
                            <i className="icon-speech"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#" role="tab" aria-controls="" aria-selected="false" id="">
                            <span ></span>
                            <i className="icon-settings"></i>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <tab className="tab-pane active" role="tabpanel">
                        <div className="list-group list-group-accent">
                            <div className="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Today</div>
                        </div>
                    </tab>
                </div>
            </tabset>
        </div>
    )
}

export default ASidebar;
