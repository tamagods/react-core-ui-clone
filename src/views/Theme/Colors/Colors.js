import React, { Fragment } from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

function Colors() {

    const breadCrumbItems = () => {
        return [{ name: 'Home', path: '/' }, { name: 'Theme', path: '/theme' }, { name: 'Colors', path: '/theme/colors' }]
    };

    return (
        <Fragment>
            <Breadcrumb items={breadCrumbItems} />
            <div className="container-fluid">
                <div className="animated fadeIn">
                    <div className="card">
                        <div className="card-header">
                            <i className="icon-drop"></i>
                            Theme colors
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-2 col-md-3 col-sm-4 col-6 mb-4">
                                    <div className="bg-primary theme-color w-75 rounded mb-2" style={{ paddingTop: '75%' }}></div>
                                    <h6>Brand Primary Color</h6>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="text-muted">HEX:</td>
                                                <td className="font-weight-bold">#20a8d8</td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">RGB:</td>
                                                <td className="font-weight-bold">rgb(32, 168, 216)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-xl-2 col-md-3 col-sm-4 col-6 mb-4">
                                    <div className="bg-secondary theme-color w-75 rounded mb-2" style={{ paddingTop: '75%' }}></div>
                                    <h6>Brand Secondary Color</h6>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="text-muted">HEX:</td>
                                                <td className="font-weight-bold">#c8ced3</td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">RGB:</td>
                                                <td className="font-weight-bold">rgb(200, 206, 211)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-xl-2 col-md-3 col-sm-4 col-6 mb-4">
                                    <div className="bg-success theme-color w-75 rounded mb-2" style={{ paddingTop: '75%' }}></div>
                                    <h6>Brand Success Color</h6>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="text-muted">HEX:</td>
                                                <td className="font-weight-bold">#4dbd74</td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">RGB:</td>
                                                <td className="font-weight-bold">rgb(77, 189, 116)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-xl-2 col-md-3 col-sm-4 col-6 mb-4">
                                    <div className="bg-danger theme-color w-75 rounded mb-2" style={{ paddingTop: '75%' }}></div>
                                    <h6>Brand Danger Color</h6>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="text-muted">HEX:</td>
                                                <td className="font-weight-bold">#f86c6b</td>
                                            </tr>
                                            <tr>
                                                <td className="text-muted">RGB:</td>
                                                <td className="font-weight-bold">rgb(248, 108, 107)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Colors;
