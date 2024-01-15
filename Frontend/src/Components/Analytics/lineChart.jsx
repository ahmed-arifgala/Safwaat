import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

 

const BarChart = ({data}) => {
    const options = {
        responsive: true,
        scales: {
            x: {
              ticks: {
                color: "white", // Change the color of x-axis labels
              },
            },
            y: {
              ticks: {
                color: "white", // Change the color of y-axis labels
              },
            },
          },
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "white",
            },
          },
        },
      };
  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart