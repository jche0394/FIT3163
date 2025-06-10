import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function EloHistoryChart({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  const defaultData = {
    labels: ['Race 1', 'Race 2', 'Race 3', 'Race 4', 'Race 5'],
    datasets: [
      {
        label: 'Elo Rating',
        data: [1500, 1520, 1535, 1510, 1540],
        borderColor: '#e10600',
        backgroundColor: 'rgba(225, 6, 0, 0.3)',
      },
    ],
  };

  return <Line options={options} data={data || defaultData} />;
}
