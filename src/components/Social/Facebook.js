import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';

function Facebook() {

    const [chart] = useState('');

    useEffect(() => {
        var ctx = document.getElementById('chartFacebook').getContext('2d');

        new Chart(ctx, {
            type: 'line',

            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [65, 81, 80, 45, 34, 12, 40],
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
        <div className="brand-card">
            <div className="brand-card-header bg-facebook">
                <i className="fa fa-facebook"></i>
                <div className="chart-wrapper">
                    <canvas id="chartFacebook" className="chart"></canvas>
                </div>
            </div>
            <div className="brand-card-body"><div>
                <div className="text-value">89k</div>
                <div className="text-uppercase text-muted small">friends</div>
            </div>
                <div>
                    <div className="text-value">459</div>
                    <div className="text-uppercase text-muted small">feeds</div>
                </div>
            </div>
        </div>
    )
}

export default Facebook;
