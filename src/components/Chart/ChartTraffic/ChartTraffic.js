import React, { useState, useEffect, Fragment } from 'react';
import Chart from 'chart.js';
import './ChartTraffic.scss';

function ChartTraffic() {

    const [mainChartElements] = useState(27);
    const [mainChartData1] = useState([]);
    const [mainChartData2] = useState([]);
    const [mainChartData3] = useState([]);

    const convertHex = (hex, opacity) => {
        hex = hex.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        const rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
        return rgba;
    }

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    for (let i = 0; i <= mainChartElements; i++) {
        mainChartData1.push(random(50, 200));
        mainChartData2.push(random(80, 100));
        mainChartData3.push(65);
    }

    useEffect(() => {
        var ctx = document.getElementById('chartTraffic').getContext('2d');

        new Chart(ctx, {
            type: 'line',

            data: {
                labels: [
                    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday',
                    'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                    'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
                ],
                datasets: [
                    {
                        data: mainChartData1,
                        label: 'Current',
                        backgroundColor: convertHex('#63c2de', 10),
                        borderColor: '#63c2de',
                        pointHoverBackgroundColor: '#fff'
                    },
                    {
                        data: mainChartData2,
                        label: 'Previous',
                        backgroundColor: 'transparent',
                        borderColor: '#4dbd74',
                        pointHoverBackgroundColor: '#fff'
                    },
                    {
                        data: mainChartData3,
                        label: 'BEP',
                        backgroundColor: 'transparent',
                        borderColor: '#f86c6b',
                        pointHoverBackgroundColor: '#fff',
                        borderWidth: 1,
                        borderDash: [8, 5]
                    }
                ]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value.charAt(0);
                            }
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: 250
                        }
                    }]
                },
                elements: {
                    line: {
                        borderWidth: 2
                    },
                    point: {
                        radius: 0,
                        hitRadius: 10,
                        hoverRadius: 4,
                        hoverBorderWidth: 3,
                    }
                },
                legend: {
                    display: false
                }
            }
        });
    })

    return (
        <Fragment>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-5">
                        <h4 className="card-title mb-0">Traffic</h4>
                        <div className="small text-muted">November 2020</div>
                    </div>
                    <div className="col-sm-7 d-none d-md-block">
                        <button className="btn btn-primary float-right" type="button">
                            <i className="icon-cloud-download"></i>
                        </button>
                        <div className="btn-group btn-group-toggle float-right mr-3">
                            <label btnradio="Day" className="btn btn-outline-secondary" id="option1" aria-pressed="false">Day</label>
                            <label btnradio="Month" className="btn btn-outline-secondary active" id="option2" aria-pressed="true">Month</label>
                            <label btnradio="Year" className="btn btn-outline-secondary" id="option3" aria-pressed="false">Year</label>
                        </div>
                    </div>
                </div>
                <div className="chart-wrapper" style={{ height: '300px', marginTop: '40px' }}>
                    <canvas id="chartTraffic" className="chart"></canvas>
                </div>
            </div>
            <div className="card-footer">
                <div className="row text-center">
                    <div className="col-sm-12 col-md mb-sm-2 mb-0">
                        <div className="text-muted">Visits</div>
                        <strong>29.703 Users (40%)</strong>
                        <div className="progress progress-xs mt-2">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" className="progress-bar bg-success" role="progressbar" style={{ width: '40%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md mb-sm-2 mb-0">
                        <div className="text-muted">Unique</div>
                        <strong>24.093 Users (20%)</strong>
                        <div className="progress progress-xs mt-2">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="20" className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md mb-sm-2 mb-0">
                        <div className="text-muted">Pageviews</div>
                        <strong>78.706 Views (60%)</strong>
                        <div className="progress progress-xs mt-2">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md mb-sm-2 mb-0">
                        <div className="text-muted">New Users</div>
                        <strong>22.123 Users (80%)</strong>
                        <div className="progress progress-xs mt-2">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md mb-sm-2 mb-0">
                        <div className="text-muted">Bounce Rate</div>
                        <strong>40.15%</strong>
                        <div className="progress progress-xs mt-2">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" className="progress-bar" role="progressbar" style={{ width: '40%' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ChartTraffic;
