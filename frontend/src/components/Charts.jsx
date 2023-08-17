import React, { useContext, useEffect, useRef } from 'react';
import { Doughnut, Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; 
import factorContext from '../context/factorContext';

const Charts = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null); // Reference to the chart instance
    const {factors, result} = useContext(factorContext);

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
                    labels: ['Quality', 'Price', 'Distance', 'Orders', 'Sales', 'Profit'],
                    datasets: [{
                        label: 'Data',
                        data: [factors.Quality, factors.Price/500, factors.Distance/5, factors.Orders/1000, factors.Sales/100, factors.Benefit/2],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 206, 86, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(153, 102, 255, 0.8)',
                            'rgba(255, 100, 80, 0.8)'
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 100, 80, 1)'
                        ],
                        borderWidth: 1,
                    }],
                },
                options: {
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid: {
                                display: true,
                            },
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: true,
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
    }, [factors.Benefit, factors.Distance, factors.Orders, factors.Price, factors.Quality, factors.Sales]);

    const data = {
        labels: ['Score'],
        datasets: [
          {
            data: [result*10, 10-result],
            backgroundColor: ['#6af08c', '#FFFFFF'], 
          },
        ],
      };
      
      const options = {
        maintainAspectRatio: true,
        cutout: 110,
        rotation: -90,
        circumference: 180,
        Animation: true
      };

      const data2 = {
        labels: ['Score', 'Quality', 'Price', 'Distance', 'Orders', 'Sales', 'Profit'],
        datasets: [
          {
            label: 'Graph',
            data: [result, factors.Quality, factors.Price/50, factors.Distance, factors.Orders/100, factors.Sales/10, factors.Benefit],
            backgroundColor: 'rgba(106, 117, 240, 0.4)',
            borderColor: '#6A75F0',
            pointBackgroundColor: '#6A75F0',
          },
        ],
      };
      
      const options2 = {
        scale: {
          ticks: { beginAtZero: true },
        },
      };
      

    return (
        <div className="flex justify-center items-center my-4 w-11/12 mx-auto gap-4">
            <div className=" relative flex-row items-center justify-center h-[390px] py-6 px-3 w-1/4 bg-white shadow-lg rounded-sm mx-auto">
                <Doughnut data={data} options={options} className='pt-5'/>
                <p className='absolute auto text-center text-4xl rounded-full text-gray-400 mx-28 p-3 top-1/2'>{result}</p>
            </div>
            <div className="w-2/4 bg-white py-6 px-5 shadow-lg rounded-sm mx-auto">
                <h2 className="text-gray-600 text-xl font-semibold mb-4">Factors</h2>
                <div className="chart-container" style={{ height: '300px', width: '100%' }}>
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
            <div className="flex items-center justify-center h-[390px] py-2 px-3 w-1/4 bg-white shadow-lg rounded-sm mx-auto">
                <Radar data={data2} options={options2} />
            </div>
        </div>
    );
};

export default Charts;