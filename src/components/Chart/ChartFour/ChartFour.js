import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';

function ChartFour() {
    const [chart,] = useState('');

    useEffect(() => {
        var ctx = document.getElementById('chartFour').getContext('2d');

        new Chart(ctx, {
            type: 'bar',

            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
                datasets: [{
                    backgroundColor: 'rgba(255,255,255,.3)',
                    borderWidth: 0,
                    data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                    label: 'Series A'
                }]
            },

            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                    yAxes: [{
                        display: false
                    }]
                },
                legend: {
                    display: false
                }
            }
        });


    }, [chart])

    return (
        <div className="card text-white bg-danger">
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
                <canvas id="chartFour" className="chart"></canvas>
            </div>
        </div>
    )
}

export default ChartFour;
