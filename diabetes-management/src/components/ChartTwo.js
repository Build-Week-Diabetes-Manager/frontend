import React, {useState, useEffect,Component} from 'react';
import { Line } from 'react-chartjs-2';
import colors from './colors'
import axiosWithAuth from '../utils/axiosWithAuth';

const data = {
  labels: ['Breakfast', ' Elevensies', 'Lunch', 'Post Lunch', 'Dinner', 'Post Dinner'],
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
      data: [1,2,3,4,5,6],
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
        data: [],
      }
  ]
};

export const TestLine = (props) => {

  const [newData, setNewData] = useState(data)
  const id = localStorage.getItem('user_id')

  useEffect(() => {
    axiosWithAuth().get(`https://diabetesmanager.herokuapp.com/api/manager/manage/ds/${id}`)
    .then(res =>{
        setNewData(newData,newData.datasets[0].data = Object.values(res.data))
    })
    .catch(err => console.log("axios err: ", err))
}, [])
// /api/manage/manager/:id
useEffect(() => {
  axiosWithAuth().get(`https://diabetesmanager.herokuapp.com/api/manager/manage/${id}`)
  .then(res =>{
      setNewData(newData,newData.datasets[1].data = res.data.map(el => el.value))
  })
  .catch(err => console.log("axios err: ", err))
}, [])


  // componentWillReceiveProps(props) {
  //   console.log("props.dglevels: ", props.dglevels)
  //   console.log(this.state.datasets[0].data)
  //   this.setState((state,props) => ({

  //     [state.datasets[0].data]: [1,2,3,4,5,6]
  //   }))
  // }

 
    // console.log("this.props.dglevels: ", this.props.dglevels)
    return (
      <div>
        <h2>Daily Glucose Levels</h2>
          <Line data={newData} options={{
          legend: {
              responsive: true,
              position:'bottom',
            }
          }}/>
      </div>
    );
  



}
 export default TestLine;



// updateConfigByMutating(data)
// updateConfigByMutating(data, dglevels) {
//   data.datasets[0].label = 'new title';
//   // data.datasets[0].data = {dglevels};
//   console.log("dglevels: ", dglevels)
//   // chart.update();
// }