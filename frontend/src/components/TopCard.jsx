import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const App = () => {
  

  useEffect(() => {
    // Create the doughnut charts
    const createDoughnutChart = (chartId, labels, data, colors) => {
      const ctx = document.getElementById(chartId);

      // Destroy existing chart if it exists
      if (window.myCharts[chartId]) {
        window.myCharts[chartId].destroy();
      }

      window.myCharts[chartId] = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: colors,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    };

    // Initial data for doughnut charts
    const usersChartLabels = ['Nuevos', 'Registrados'];
    const usersChartData = [30, 65];
    const usersChartColors = ['#00F0FF', '#8B8B8D'];

    const commercesChartLabels = ['Nuevos', 'Registrados'];
    const commercesChartData = [60, 40];
    const commercesChartColors = ['#FEC500', '#8B8B8D'];

    if (!window.myCharts) {
      window.myCharts = {}; // Initialize an object to store chart instances
    }

    createDoughnutChart('usersChart', usersChartLabels, usersChartData, usersChartColors);
    createDoughnutChart('commercesChart', commercesChartLabels, commercesChartData, commercesChartColors);
  }, []);

  return (
          <div className="mt-8 bg-white p-4 shadow rounded-lg">
            <div className="bg-white p-4 rounded-md mt-4">
              <h2 className="text-gray-500 text-lg font-semibold pb-4">Transacciones</h2>
              <div className="my-1"></div>
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-sm leading-normal">
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha</th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Monto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                    <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                    <td className="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                  </tr>
                  {/* Add more rows */}
                </tbody>
              </table>
              <div className="text-right mt-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                  Ver más
                </button>
              </div>
            </div>
          </div>
  );
};

export default App;