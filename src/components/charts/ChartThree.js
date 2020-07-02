import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import colors from '../colors';



/**********DONUT CHART  *******************/





export const TestDoughnut =  (props) => {
  const[data,setData]= useState({});
  const number =  Math.floor(props.userData.reduce((acc, c) => acc + c, 0)/props.userData.length)
  const number2 =Math.floor(props.predData.reduce((acc, c) => acc + c, 0)/props.predData.length)
  console.log(number, number2)


  useEffect(() => {
    setData({
      labels: [],
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
          data: [number]
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
            data: [number2]
          }
      ]
    })

  }, [number])
 

    return (
      <div>
        <h2>Expected Mean Blood Glucose Level (mg/dl)</h2>
        {data && <Bar data={data} options={{
        legend: {
            position:'bottom',
        }
    }} />}
      </div>
    );


  // componentDidMount() {
  //   const { datasets } = this.refs.chart.chartInstance.data
  //   // console.log(datasets[0].data);
  // }
}
export default TestDoughnut