import React from 'react';
import { Line } from 'react-chartjs-2';

const ProgressChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [{
            label: 'Прогресс выполнения',
            data: data.values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    };

    return (
        <div>
            <Line data={chartData} />
        </div>
    );
}

export default ProgressChart;