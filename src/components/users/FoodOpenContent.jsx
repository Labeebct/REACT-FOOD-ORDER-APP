import React, { useEffect, useState } from "react";
import Quantity from "../../components/users/Quantity";
import DoneIcon from "@mui/icons-material/Done";
import axiosInstance from '../../instance/axiosInstance'
import loadingVideo from "../../assets/Foods/loading.mp4";
import { useNavigate, useParams } from "react-router-dom";

function FoodOpenContent() {

  let [quantity , setQuantity] = useState(1)
  const [loading, setLoading] = useState(true);

  const Navigate = useNavigate()

  //Destructuring foodid from params
  const { foodId } = useParams()

  //Setting state to store data
  const [food , setFood] = useState({})

  useEffect(() => {
  const foodOpen = async() => {
    try {

      const response = await axiosInstance.get(`/view-food/${foodId}`)
      const {data , status} = response

      //Setting the food to the state if response ok
      if(status == 200){
        setFood(data.food)
        setLoading(false)      }
    } catch (error) {
      if(error.response){

        const {status} = error.response

        if(status == 404) console.log('Noo food found');

      } else {
        console.log('Error in food open no response from the server',error);
      }
    }
  }

  foodOpen()

  },[])


  const handleCheckout = (foodId) => {
    
     Navigate(`/checkout?food=${foodId}&quantity=${quantity}`)
  }

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
    <main className="w-full h-auto flex items-center justify-center py-8">
      <div className="flex h-auto w-[70%] border border-gray-100 border-opacity-20 shadow-md rounded-xl flex-wrap">
        <div className="flex items-center min-w-[350px] justify-center w-1/2  flex-1 border-r border-gray-100 border-opacity-20  h-[35rem]">
          <img
            src={'https://labio.shop/' + food.foodImg}
            className="h-[13rem] w-[15rem] sm:h-[22rem] sm:w-[22rem]"
            alt="view food image"
          />
        </div>
        <div className="flex flex-1 flex-col min-w-[450px] p-10 gap-8  w-1/2  h-[35rem]">
          <h4 className="text-[1.4rem] font-poppins font-[500]">
           {food.foodname}
          </h4>
          <div className="w-ful h-[10%]  font-poppins text-[#E00000] text-[1.7rem]">
           ${quantity * food.foodprice}
          </div>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <div className="flex items-center gap-2">
            <h4 className="text-[.9rem] font-poppins">CASH ON DELIVERY</h4>
            <DoneIcon className="text-[green]" />
          </div>
          <h4 className="text-[.7rem] font-poiretOne">Delivery Charge ${food.foodcharge}</h4>
          <h4 className="text-[.9rem] font-inter">Arrive within {food.fooddelivery} Hour</h4>
          <div className="flex justify-center mt-5 w-full h-[15%]">
            <button onClick={() => handleCheckout(food._id)} className="h-[80%] duration-75 ease-linear active:scale-[.95] text-[.85rem] tracking-wide w-[14rem] rounded-[4rem] bg-[#0F130E] text-[#00B929] font-poppins font-[600]">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FoodOpenContent;
