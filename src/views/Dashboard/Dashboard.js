import React, { Fragment } from 'react';
import ChartFour from '../../components/Chart/ChartFour/ChartFour';
import ChartOne from '../../components/Chart/ChartOne/ChartOne';
import ChartThree from '../../components/Chart/ChartThree/ChartThree';
import ChartTraffic from '../../components/Chart/ChartTraffic/ChartTraffic';
import ChartTwo from '../../components/Chart/ChartTwo/ChartTwo';
import Facebook from '../../components/Social/Facebook';
import Google from '../../components/Social/Google';
import Linkedin from '../../components/Social/Linkedin';
import Twitter from '../../components/Social/Twitter';
import TrafficAndSale from '../../components/TrafficAndSale/TrafficAndSale';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import './Dashboard.scss';

function Dashboard() {

    const breadCrumbItems = () => {
        return [{ name: 'Dashboard', path: '/dashboard' }]
    };

    return (
        <Fragment>
            <Breadcrumb items={breadCrumbItems} />
            <div className="container-fluid">
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
                        <div className="col-sm-6 col-lg-3">
                            <Twitter />
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <Linkedin />
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <Google />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <TrafficAndSale />
                        </div>
                    </div>
                </div >
            </div>
        </Fragment>
    )
}

export default Dashboard;
