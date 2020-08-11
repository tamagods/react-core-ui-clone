import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';

function ChartTwo() {

    const [chart,] = useState('');

    useEffect(() => {
        var ctx = document.getElementById('chartTwo').getContext('2d');

        new Chart(ctx, {
            type: 'line',

            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    backgroundColor: '#20a8d8',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [65, 59, 84, 84, 51, 55, 40],
                    label: 'Series A'
                }]
            },

            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }

                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
                },
                elements: {
                    line: {
                        borderWidth: 1
                    },
                    point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                    },
                },
                legend: {
                    display: false
                }
            }
        });


    }, [chart])

    return (
        <div className="card text-white bg-primary">
            <div className="card-body pb-0">
                <div className="btn-group float-right">
                    <button type="button" className="btn btn-transparent dropdown-toggle p-0">
                        <i className="icon-settings"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="/#">Action</a>
                        <a className="dropdown-item" href="/#">Another action</a>
                        <a className="dropdown-item" href="/#">Something else here</a>
                    </div>
                </div>
                <div className="text-value">9.823</div>
                <div>Members online</div>
            </div>
            <div className="chart-wrapper mt-3 mx-3" style={{ height: '70px' }}>
                <canvas id="chartTwo" className="chart"></canvas>
            </div>
        </div>
    )
}

export default ChartTwo;
