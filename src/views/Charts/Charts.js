import React, { Fragment } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

function Charts() {

    const breadCrumbItems = () => {
        return [{ name: 'Home', path: '/' }, { name: 'Components', path: '' }, { name: 'Charts', path: '/charts' }]
    };

    return (
        <Fragment>
            <Breadcrumb items={breadCrumbItems} />
            <div className="container-fluid">
                <div className="animated fadeIn">
                    <div className="card-columns cols-2">
                        <div className="card">
                            <div className="card-header">
                                Line Chart
                                <div className="card-header-actions">
                                    <a href="http://www.chartjs.org"><small className="text-muted">docs</small></a>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="chart-wrapper">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Charts;
