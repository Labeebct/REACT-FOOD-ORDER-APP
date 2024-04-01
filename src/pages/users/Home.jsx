import React, { useContext, useEffect, useState } from "react";
import HomeEntry from "../../components/users/HomeEntry";
import FoodsArea from "../../components/users/FoodsArea";
import axiosInstance from "../../instance/axiosInstance";
import HomeAllNeed from "../../components/users/HomeAllNeed";
import HomeCheff from "../../components/users/HomeCheff";
import HomeBurger from "../../components/users/HomeBurger";
import loadingVideo from "../../assets/Foods/loading.mp4";

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        //Sending api to collect foods to show in home page
        const response = await axiosInstance.get("/home");
        const { data, status } = response;

        if (status == 200) {
          setFoods(data.foods);
          setLoading(false)        }
      } catch (error) {
        console.log("Error in fetch foods", error);
      }
    };

    fetchFoods();
  }, []);


  if (loading) {
    return (
      <div className="w-full h-[calc(100vh-4.5rem)]  inset-0 flex z-30 justify-center items-center">
        <video
          src={loadingVideo}
          autoPlay
          loop
          muted
          className="w-[15rem] h-[15rem] mb-28"
        ></video>
      </div>
    );
  }


  return (
    <>
      <HomeEntry />
      <FoodsArea foods={foods} />
      <HomeAllNeed />
      <HomeCheff />
      <HomeBurger />
    </>
  );
}

export default Home;
