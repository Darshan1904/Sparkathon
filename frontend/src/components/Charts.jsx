import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Make sure to install 'chart.js' library

const Charts = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null); // Reference to the chart instance

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            // Destroy the previous chart instance before creating a new one
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
                    datasets: [{
                        label: 'Data',
                        data: [10, 20, 15, 30, 25],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 206, 86, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1,
                    }],
                },
                options: {
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false,
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                },
            });
        }
    }, []);

    return (
        <div className="flex justify-center items-center my-4 bg-gray-100">
            <div className="w-1/2 bg-white p-6 shadow-lg rounded-sm mx-auto">
                <h2 className="text-gray-600 text-xl font-semibold mb-4">Last 5 Scores</h2>
                <div className="chart-container" style={{ height: '300px', width: '100%' }}>
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
        </div>
    );
};

export default Charts;