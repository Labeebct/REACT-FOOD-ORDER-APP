import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import axiosInstance from '../../instance/axiosInstance'
import { Chart as ChartJS, CategoryScale,BarElement, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, PointElement, BarElement,CategoryScale, LinearScale, Title);

function ChartComponent() {

    const [datas , setData] = useState('')

    useEffect(() => {

        const fetchDailySale = async() => {
            try {

                const resppnse = await axiosInstance.get('/daily-sales')
                const {data , status} = resppnse

                if(status == 200) {
                    setData(data.orderDatas)
                }
                
            } catch (error) {
                console.log('Error in fetch daily sale',error);
            }
        }

        fetchDailySale()

    },[])
    

    const data = {
        labels: ["Red", "Blue", "Yellow",'white'], // These are the labels for the x-axis categories
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3],
            backgroundColor: ["red", "blue", "yellow"],
            borderColor: "green", // Set a contrasting border color
            borderWidth: 2, // Increase border width for better visibility
                  
          },
        ],
      };

  return (
    <div className="bg-black" style={{ width: "100%", height: "80%" }}>
       <Line data={data}  />
    </div>
  );
}

export default ChartComponent;
