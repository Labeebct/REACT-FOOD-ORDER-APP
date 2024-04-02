import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axiosInstance from "../../instance/axiosInstance";
import loadingVideo from "../../assets/Foods/loading.mp4";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title
);

function ChartComponent() {
  const [datas, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchDailySale = async () => {
      try {
        const resppnse = await axiosInstance.get("/admin/daily-sales");
        const { data, status } = resppnse;

        if (status == 200) {
          setData(data.weeklyOrderCount);
          setLoading(false);
        }
      } catch (error) {
        console.log("Error in fetch daily sale", error);
      }
    };

    fetchDailySale();
  }, []);

  const data = {
    labels: ["MON-TUE", "TUE-WEND", "WEND-THUR", "THURS-FRID", "FRID-SAT"], // These are the labels for the x-axis categories
    datasets: [
      {
        label: "Weekly Sale Count",
        data: [datas],
        backgroundColor: ["red", "blue", "yellow"],
        borderColor: "green", // Set a contrasting border color
        borderWidth: 2, // Increase border width for better visibility,
        tension: 0.1,
      },
    ],
  };

  if (loading) {
    return (
      <div className="w-full h-[calc(100vh-4.5rem)]  inset-0 flex z-30 justify-center items-center">
        <video
          src={loadingVideo}
          autoPlay
          loop
          muted
          className="w-[15rem] h-[15rem]"
        ></video>
      </div>
    );
  }

  return (
    <div className="bg-black" style={{ width: "100%", height: "80%" }}>
      <Line data={data} />
    </div>
  );
}

export default ChartComponent;
