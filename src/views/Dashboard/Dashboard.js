import React from 'react';
import './Dashboard.scss';

function Dashboard() {
    return (
        <div className="animated fadeIn">
            <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <div className="card text-white bg-info">
                        <div className="card-body pb-0">
                            <button className="btn btn-transparent p-0 float-right" type="button">
                                <i className="icon-location-pin"></i>
                            </button>
                            <div className="text-value">
                                9.823
                                </div>
                            <div>Members online</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
