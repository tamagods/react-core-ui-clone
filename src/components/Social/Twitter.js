import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';

function Twitter() {
    const [chart] = useState('');

    useEffect(() => {
        var ctx = document.getElementById('chartTwitter').getContext('2d');

        new Chart(ctx, {
            type: 'line',

            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [81, 45, 34, 40, 80, 65, 12],
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
            <div className="brand-card-header bg-twitter">
                <i className="fa fa-twitter"></i>
                <div className="chart-wrapper">
                    <canvas id="chartTwitter" className="chart"></canvas>
                </div>
            </div>
            <div className="brand-card-body"><div>
                <div className="text-value">973k</div>
                <div className="text-uppercase text-muted small">followers</div>
            </div>
                <div>
                    <div className="text-value">1.792</div>
                    <div className="text-uppercase text-muted small">tweets</div>
                </div>
            </div>
        </div>
    )
}

export default Twitter;
