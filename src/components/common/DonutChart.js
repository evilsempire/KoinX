import React from "react";
import Chart from "chart.js/auto";
import { Doughnut, Pie } from "react-chartjs-2";
const labels = ["CrowdSale investors", "Foundation",];
const data = {
  labels: labels,
  datasets: [
    {
        label: '',
        data: [800, 400],
        backgroundColor: [
          'rgba(0, 130, 255, 1)',
          'rgba(250, 160, 2, 1)'
        ],
        hoverOffset: 4,
        cutout: "60%"
    },
    
  ]
  };

  const options = {
    aspectRatio: 1.4, 
    plugins: {
      legend : {
        position: "right",
        labels: {
            usePointStyle: "circle",
            font: {
                size: 12        
              },
        }
     }
    }
  }
const DonutChart = () => {
  return (
    <div className="w-[300px]" >
      <Doughnut data={data}  options={options}/>
    </div>
  );
};
export default DonutChart;