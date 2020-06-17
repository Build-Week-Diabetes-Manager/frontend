import React, {Component} from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import colors from '../colors'



/**********DONUT CHART  *******************/


const data = {
  labels: [],
  datasets: [
    {
      label: 'Predicted Glucose Levels',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#555',
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
      data: [380]
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
        data: [60]
      }
  ]
};

const conditionalColor = () =>{

console.log(data)

}

export default class  extends Component {
  render() {
    return (
      <div>
        <h2>Expected Mean Blood Glucose Level (mg/dl)</h2>
        <Bar ref="chart" data={data} options={{
        legend: {
            position:'bottom',
        }
    }} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    // console.log(datasets[0].data);
  }
}