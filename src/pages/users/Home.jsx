import React, { useEffect, useState } from "react";
import HomeEntry from "../../components/users/HomeEntry";
import FoodsArea from "../../components/users/FoodsArea";
import axiosInstance from '../../instance/axiosInstance'
import HomeAllNeed from "../../components/users/HomeAllNeed";
import HomeCheff from "../../components/users/HomeCheff";
import HomeBurger from "../../components/users/HomeBurger";

function Home() {

  const [foods,setFoods] = useState([])

  useEffect(() => {

    const fetchFoods = async() => {
      try {

        //Sending api to collect foods to show in home page
        const response = await axiosInstance.get('/home')
        const {data , status} = response

        if(status == 200){
          setFoods(data.foods)
        }
      } catch (error) {
        console.log('Error in fetch foods',error);
      }
    }
    
    fetchFoods()
    
    
  },[])
  
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
