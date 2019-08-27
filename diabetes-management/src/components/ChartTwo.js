import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import colors from './colors'



const data = {
  labels: ['Breakfast', ' Elevensies', 'Lunch', 'PostLunch', 'Dinner', 'Post', 'midnight snack'],
  datasets: [
    {
      label: 'Predicted Glucose Levels',
      fill: false,
      lineTension: 0.1,
      backgroundColor: colors.skyblue,
      borderColor: colors.skyblue,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
        label: 'Actual Glucose Level',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#666',
        borderColor: '#666',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#666',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#666',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [59, 66, 83, 75, 50, 60, 55]
      }
  ]
};

export default class TestLine extends Component {
  render() {
    return (
      <div>
        <h2>Congrats! It's Diabetes</h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}