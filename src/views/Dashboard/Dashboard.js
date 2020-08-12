import React from 'react';
import './Dashboard.scss';
import ChartOne from '../../components/Chart/ChartOne/ChartOne';
import ChartTwo from '../../components/Chart/ChartTwo/ChartTwo';
import ChartThree from '../../components/Chart/ChartThree/ChartThree';
import ChartFour from '../../components/Chart/ChartFour/ChartFour';
import ChartTraffic from '../../components/Chart/ChartTraffic/ChartTraffic';
import Facebook from '../../components/Social/Facebook';

function Dashboard() {
    return (
        <div className="animated fadeIn">
            <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <ChartOne />
                </div>
                <div className="col-sm-6 col-lg-3">
                    <ChartTwo />
                </div>
                <div className="col-sm-6 col-lg-3">
                    <ChartThree />
                </div>
                <div className="col-sm-6 col-lg-3">
                    <ChartFour />
                </div>
            </div>
            <div className="card">
                <ChartTraffic />
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <Facebook />
                </div>
            </div>
        </div >
    )
}

export default Dashboard;
