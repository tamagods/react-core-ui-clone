import React from 'react';
import avatar1 from '../../assets/avatars/1.jpeg';

function TrafficAndSale() {
    return (
        <div className="card">
            <div className="card-header">Traffic & Sales</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="callout callout-info">
                                    <small className="text-muted">New Clients</small>
                                    <br />
                                    <strong className="h4">9,123</strong>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="callout callout-danger">
                                    <small className="text-muted">Recuring Clients</small>
                                    <br />
                                    <strong className="h4">22,643</strong>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-0" />
                        <div className="progress-group mb-4">
                            <div className="progress-group-prepend">
                                <span className="progress-group-text"> Monday </span>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="34" className="progress-bar bg-info" role="progressbar" style={{ width: '34%' }}>
                                    </div>
                                </div>
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="78" className="progress-bar bg-danger" role="progressbar" style={{ width: '78%' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-group mb-4">
                            <div className="progress-group-prepend">
                                <span className="progress-group-text"> Tuesday </span>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="56" className="progress-bar bg-info" role="progressbar" style={{ width: '56%' }}></div>
                                </div>
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="94" className="progress-bar bg-danger" role="progressbar" style={{ width: '94%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-group mb-4">
                            <div className="progress-group-prepend">
                                <span className="progress-group-text"> Wednesday </span>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="12" className="progress-bar bg-info" role="progressbar" style={{ width: '12%' }}></div>
                                </div>
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="67" className="progress-bar bg-danger" role="progressbar" style={{ width: '67%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-group mb-4">
                            <div className="progress-group-prepend">
                                <span className="progress-group-text"> Thursday </span>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" className="progress-bar bg-info" role="progressbar" style={{ width: '43%' }}></div>
                                </div>
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="91" className="progress-bar bg-danger" role="progressbar" style={{ width: '91%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-group mb-4">
                            <div className="progress-group-prepend">
                                <span className="progress-group-text"> Friday </span>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="22" className="progress-bar bg-info" role="progressbar" style={{ width: '22%' }}></div>
                                </div>
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="73" className="progress-bar bg-danger" role="progressbar" style={{ width: '73%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-group mb-4">
                            <div className="progress-group-prepend">
                                <span className="progress-group-text"> Saturday </span>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="53" className="progress-bar bg-info" role="progressbar" style={{ width: '53%' }}></div>
                                </div>
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="82" className="progress-bar bg-danger" role="progressbar" style={{ width: '82%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-group mb-4">
                            <div className="progress-group-prepend">
                                <span className="progress-group-text"> Sunday </span>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="9" className="progress-bar bg-info" role="progressbar" style={{ width: '9%' }}></div>
                                </div>
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="69" className="progress-bar bg-danger" role="progressbar" style={{ width: '69%' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="callout callout-warning">
                                    <small className="text-muted">Pageviews</small>
                                    <br />
                                    <strong className="h4">78,623</strong>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="callout callout-success">
                                    <small className="text-muted">Organic</small>
                                    <br />
                                    <strong className="h4">49,123</strong>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-0" />
                        <div className="progress-group">
                            <div className="progress-group-header">
                                <i className="icon-user progress-group-icon"></i>
                                <div>Male</div>
                                <div className="ml-auto font-weight-bold">43%</div>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" className="progress-bar bg-warning" role="progressbar" style={{ width: '43%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-group mb-5">
                            <div className="progress-group-header">
                                <i className="icon-user-female progress-group-icon"></i>
                                <div>Female</div>
                                <div className="ml-auto font-weight-bold">37%</div>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" className="progress-bar bg-warning" role="progressbar" style={{ width: '43%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-group">
                            <div className="progress-group-header align-items-end">
                                <i className="icon-globe progress-group-icon"></i>
                                <div>Organic Search</div>
                                <div className="ml-auto font-weight-bold mr-2">191.235</div>
                                <div className="text-muted small">(56%)</div>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="56" className="progress-bar bg-success" role="progressbar" style={{ width: '56%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-group">
                            <div className="progress-group-header align-items-end">
                                <i className="icon-social-facebook progress-group-icon"></i>
                                <div>Facebook</div>
                                <div className="ml-auto font-weight-bold mr-2">51.223</div>
                                <div className="text-muted small">(15%)</div>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="15" className="progress-bar bg-success" role="progressbar" style={{ width: '15%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-group">
                            <div className="progress-group-header align-items-end">
                                <i className="icon-social-twitter progress-group-icon"></i>
                                <div>Twitter</div>
                                <div className="ml-auto font-weight-bold mr-2">37.564</div>
                                <div className="text-muted small">(11%)</div>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="11" className="progress-bar bg-success" role="progressbar" style={{ width: '11%' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-group">
                            <div className="progress-group-header align-items-end">
                                <i className="icon-social-linkedin progress-group-icon"></i>
                                <div>LinkedIn</div>
                                <div className="ml-auto font-weight-bold mr-2">27.319</div>
                                <div className="text-muted small">(8%)</div>
                            </div>
                            <div className="progress-group-bars">
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="8" className="progress-bar bg-success" role="progressbar" style={{ width: '8%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <table className="table table-responsive-sm table-hover table-outline mb-0">
                    <thead className="thead-light">
                        <tr>
                            <th className="text-center">
                                <i className="icon-people"></i>
                            </th>
                            <th>User</th>
                            <th className="text-center">Country</th>
                            <th>Usage</th>
                            <th className="text-center">Payment Method</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <div className="avatar">
                                    <img alt="admin@bootstrapmaster.com" className="img-avatar" src={avatar1} />
                                    <span className="avatar-status badge-success"></span>
                                </div>
                            </td>
                            <td>
                                <div>Yiorgos Avraamu</div>
                                <div className="small text-muted"><span>New</span> | Registered: Jan 1, 2015 </div>
                            </td>
                            <td className="text-center">USA</td>
                            <td>
                                <div className="clearfix">
                                    <div className="float-left"><strong>50%</strong></div>
                                    <div className="float-right"><small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small></div>
                                </div>
                                <div className="progress progress-xs">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }}></div>
                                </div>
                            </td>
                            <td className="text-center"><i className="fa fa-cc-mastercard" style={{ fontSize: '24px' }}></i></td>
                            <td><div className="small text-muted">Last login</div><strong>10 sec ago</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TrafficAndSale;
