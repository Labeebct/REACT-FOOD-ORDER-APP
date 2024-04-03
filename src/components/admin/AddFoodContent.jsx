import React, { useEffect, useState } from 'react'
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import axionInstance from "../../instance/axiosInstance";
import loadingVideo from "../../assets/Foods/loading.mp4";

function AddFoodContent() {

  const { foodId } = useParams()
  
  const Navigate = useNavigate()
  const [message, setMessage] = useState("");
  const [food , setFood] = useState('')
  const [success , setSuccess] = useState(false)
  const [loading, setLoading] = useState(false);

  if(foodId){
    
    useEffect(() => {

      setLoading(true)
      //if it is edit food fetching edited food to add into input value
      const fetchEditfood = async() => {
        try {

          const response = await axionInstance.get(`/admin/edit-food/${foodId}`)
          const {data , status} = response

          if(status == 200) {
            setLoading(false)
            setFood(data.food)
          }
          
        } catch (error) {
           if(error.response) {

            const {status} = error.response
            if(status == 404) {
              console.log('Food not found');
            }

           } else {
             console.log('Errorn in fetch edit foods , no response from the server',error);
           }
        }
      }

      fetchEditfood()
      
    },[])


  }

  const axiosUrl = foodId ? `/admin/edit-food/${foodId}` : `/admin/add-food`

  const handleSubmit = async (values, { resetForm }) => {
    try {

      
      const { foodname, foodprice, foodcharge, fooddelivery , foodImg } = values;

      if ((!foodname || !foodprice || !foodcharge || !fooddelivery || !foodImg)) {
        setMessage("Please Fill all Fields");
      } else {
        console.log('elseeee');

        try {

          const formData = new FormData()
 
          formData.append('foodname',foodname)
          formData.append('foodprice',foodprice)
          formData.append('foodcharge',foodcharge)
          formData.append('fooddelivery',fooddelivery)
          formData.append('foodImg',foodImg)
          
        //Sending the api request to api
        const response = await axionInstance.post(axiosUrl,formData,{
          headers:{
            'Content-Type':'multipart/form-data'
          }
        })
        const {data , status} = response

        //Navigating to admin foods section after successfull food saving
        if(status == 200){
          setMessage(data.msg)
          setSuccess(true)
          setTimeout(() =>{
           Navigate('/admin/foods')
           resetForm() 
          }, 800);
        }
        } catch (error) {
          if (error.response) {
            //Destructuring data and status from error reponse
            const { data, status } = error.response;

            if(status == 422){
              setMessage(data.msg)
            } else {
              console.log('Internal server error',error);
            }
        } else {
          console.log('No response from server',error);
        }
      }
    }
    } catch (error) {
      console.log("Error in handle submit", error);
    }
  };

  if(message) setTimeout(() => setMessage('') , 2000);

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
    <div className="h-full w-full p-4 flex flex-col items-center overflow-y-scroll">
      <div className="w-full h-auto bg-[#ffffff23] flex justify-between px-3 items-center rounded-md py-4 mb-4 sticky top-0 left-0 right-0">
        <h3 className="font-roboto text-[1.2rem] font-medium">Add Food</h3>
      </div>
      <div className="flex  items-center justify-center w-full h-[40rem] ">
        <Formik
          enableReinitialize={true}
          initialValues={{
            foodname: food.foodname || "",
            foodprice: food.foodprice ||  "",
            foodcharge: food.foodcharge ||  "",
            fooddelivery:  food.fooddelivery || "",
            foodImg: food.foodImg || ""
          }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit,setFieldValue, handleChange, values }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col rounded-md px-14 p-3 items-center w-[40%] h-[100%] min-w-[400px] border border-slate-200 border-opacity-20"
            >
              <div className="flex overflow-hidden rounded-lg items-center justify-center w-[9rem] h-[10rem] border border-slate-200 border-opacity-20 ">
                <img src={ values.imageUrl ? values.imageUrl : food ? 'https://labio.shop/' + food.foodImg : ''} className="h-24 w-29" alt="" />
              </div>
              <div className="relative w-auto flex items-center overflow-hidden">
                <div className="my-4 p-2 px-6 bg-orange-600 font-poppins font-medium text-[.8rem] rounded-[1rem]">
                  CHOOSE FILE
                </div>
                <input className="absolute opacity-0"
                 type="file" encType="multipart/form-data"
                 name="foodImg"

                 onChange={(event) => {
                  setFieldValue('foodImg',event.currentTarget.files[0])
                  const file = event.currentTarget.files[0]
                  const imageUrl = URL.createObjectURL(file)
                  setFieldValue('imageUrl',imageUrl)
                }}/>
              </div>
              <div className="w-full mt-1 h-auto flex flex-col gap-5">
                <input
                  type="text"
                  name="foodname"
                  spellCheck={false}
                  placeholder="Name"
                  className="w-full h-[2.4rem] bg-[#5856567b] rounded-sm outline-none px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  value={values.foodname}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="foodprice"
                  spellCheck={false}
                  placeholder="Price"
                  className="w-full h-[2.4rem] bg-[#5856567b] rounded-sm outline-none px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  value={values.foodprice}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="foodcharge"
                  spellCheck={false}
                  placeholder="Charge"
                  className="w-full h-[2.4rem] bg-[#5856567b] rounded-sm outline-none px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  value={values.foodcharge}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="fooddelivery"
                  spellCheck={false}
                  placeholder="Delivery Within"
                  className="w-full h-[2.4rem] bg-[#5856567b] rounded-sm outline-none px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  value={values.fooddelivery}
                  onChange={handleChange}
                />
                <p
                  className={`text-center ${success ? 'text-green-600' : 'text-red-600'} text-[.9rem]`}
                >
                  {message}
                </p>{" "}
                <div className="flex w-full h-auto">
                  <button
                    type="submit"
                    className="m-auto bg-[#ffffff] text-black px-8 rounded-md cursor-pointer active:scale-[.95] duration-100 ease-in-out font-inter font-medium py-2"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddFoodContent;
