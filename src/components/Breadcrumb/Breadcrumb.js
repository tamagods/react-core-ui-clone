import React, { Fragment, useEffect, useState } from 'react';
import './Breadcrumb.scss';
import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {

    const [breadCrumbItem, setBreadCrumbItem] = useState([]);

    useEffect(() => {
        setBreadCrumbItem(items);
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <ol className="breadcrumb">
                {breadCrumbItem.map((item, index) => (
                    <li className={breadCrumbItem[breadCrumbItem.length - 1] === item ? 'breadcrumb-item active' : 'breadcrumb-item'} key={index}>
                        {breadCrumbItem[breadCrumbItem.length - 1] === item ? <span>{item.name}</span> : <Link to={item.path}>{item.name}</Link>}
                    </li>
                ))}

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
