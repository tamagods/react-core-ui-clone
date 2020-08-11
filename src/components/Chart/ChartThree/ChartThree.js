import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';

function ChartThree() {

    const [chart,] = useState('');

    useEffect(() => {
        var ctx = document.getElementById('chartThree').getContext('2d');

        new Chart(ctx, {
            type: 'line',

            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 45, 34, 12, 40],
                    label: 'Series A'
                }]
            },

            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
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
                    },
                },
                legend: {
                    display: false
                }
            }
        });


    }, [chart])

    return (
        <div className="card text-white bg-warning">
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
            <div className="chart-wrapper mt-3" style={{ height: '70px' }}>
                <canvas id="chartThree" className="chart"></canvas>
            </div>
        </div>
    )
}

export default ChartThree;
