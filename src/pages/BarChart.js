



import React from 'react'
import "./BarChart.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,

  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { PolarArea } from 'react-chartjs-2';
import { Radar } from 'react-chartjs-2';





ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,

  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Filler,

  Title,
  Tooltip,
  Legend
);


//BAR CHART
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [15, 59, 25, 45, 56, 10, 30],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [15, 59, 25, 45, 56, 10, 30],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};





//LINE CHART
export const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};



const labels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];




export const data1 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [15, 59, 25, 45, 56, 10, 30],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [32, 43, 21, 43, 18, 32, 41],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


//Bubble chart

export const data2 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};


//Radar chart

export const data3 = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};



const BarChart = () => {
  return (
<>
      <div className="row" style={{justifyContent: 'space-around'}}>
        <div className="col-lg-5">
          <Bar data={data} options={options} />

        </div>


        <div className="col-lg-5">
          <Line data={data1} options={options1} />
        </div>


      </div>


      <div className="row" style={{justifyContent: 'space-around'}}>

        <div className="col-lg-5 ">
        <div className="Pol_Ch">

          <PolarArea data={data2}
              options={{ maintainAspectRatio: false }}

          />
        </div>
        </div>

        <div className="col-lg-5">
        <div className="Rad_ch">
          <Radar data={data3}
          options={{ maintainAspectRatio: false }}
          
          />
        </div>
        
        
        
        </div>
      
      </div>

</>

  )
}

export default BarChart
