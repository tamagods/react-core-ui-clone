import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';

function Google() {
    const [chart] = useState('');

    useEffect(() => {
        var ctx = document.getElementById('chartGoogle').getContext('2d');

        new Chart(ctx, {
            type: 'line',

            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [81, 80, 65, 12, 45, 34, 40],
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
            <div className="brand-card-header bg-google-plus">
                <i className="fa fa-google-plus"></i>
                <div className="chart-wrapper">
                    <canvas id="chartGoogle" className="chart"></canvas>
                </div>
            </div>
            <div className="brand-card-body"><div>
                <div className="text-value">894</div>
                <div className="text-uppercase text-muted small">followers</div>
            </div>
                <div>
                    <div className="text-value">92</div>
                    <div className="text-uppercase text-muted small">circles</div>
                </div>
            </div>
        </div>
    )
}

export default Google;
