import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';

function ChartOne() {

    const [chart,] = useState('');

    useEffect(() => {
        var ctx = document.getElementById('chartOne').getContext('2d');

        new Chart(ctx, {
            type: 'line',

            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    backgroundColor: '#63c2de',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [1, 18, 9, 17, 34, 22, 11],
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
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
                },
                elements: {
                    line: {
                        tension: 0.00001,
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
            <div className="chart-wrapper mt-3 mx-3" style={{ height: '70px' }}>
                <canvas id="chartOne" className="chart"></canvas>
            </div>
        </div>
    )
}

export default ChartOne;
