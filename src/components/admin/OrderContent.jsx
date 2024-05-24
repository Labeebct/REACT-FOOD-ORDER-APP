import React, { useEffect, useState } from "react";
import axionsInstance from "../../instance/axiosInstance";
import { confirmAlert } from "react-confirm-alert";
import loadingVideo from "../../assets/Foods/loading.mp4";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Alert } from "@mui/material";

function OrderContent() {
  const [orders, setOrders] = useState([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    const fetchOrders = async () => {
      try {
        const response = await axionsInstance.get("/admin/orders");
        const { data, status } = response;

        if (status == 200) {
          setOrders(data.orders);
          setLoading(false)
        }
      } catch (error) {
        if (error.response) {
          const { status } = error.response;
          if (status == 404) {
            setError("No Orders not Found");
          } else {
            console.log("Internal server error");
          }
        } else {
          console.log("No response from the server", error);
        }
      }
    };

    fetchOrders();
  }, []);


  const handleSelect = async (e, orderId) => {
    confirmAlert({
      title: "Confirm to change STATUS",
      message: "Are you sure you want change status?",
      titleClassName: "text-xl font-bold text-green-500",
      buttons: [
        {
          label: "Yes",
          style: { backgroundColor: "#D80032" },
          className: "text-white font-bold py-2 px-4 rounded mr-2",
          onClick: async () => {
            try {
              //Taking status from value
              const orderStatus = e.target.value;

              //Sending api to change order status
              const response = await axionsInstance.patch(
                `/admin/change-order-status?orderId=${orderId}`,
                { status: orderStatus }
              );
              const { status } = response;

              if (status == 200) {
                setSuccess(true);
              }
            } catch (error) {
              if (error.response) {
                const { data, status } = error.response;

                if (status == 404) {
                  console.log("order not found");
                } else {
                  console.log("Internal server error");
                }
              } else {
                console.log("No response from server", error);
              }
            }
          },
        },
        {
          label: "No",
          style: { backgroundColor: "#65B741" },
          className:
            "bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2",
        },
      ],
      overlayClassName:
        "fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center",
    });
  };

  if (success) setTimeout(() => setSuccess(false), 1400);

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
      {success && (
        <div className="absolute bg-black bg-opacity-60 inset-0 h-screen w-screen flex justify-center items-center">
         <Alert variant="filled" severity="success">
            Order status has been updated.
          </Alert>
        </div>
      )}
      <div className="w-full h-auto bg-[#ffffff23] flex justify-start px-3 items-center rounded-md py-4 mb-4 sticky top-0 left-0 right-0">
        <h3 className="font-roboto text-[1.2rem] font-medium">Orders List</h3>
      </div>
      <div className="scrollbar-hide w-full h-auto overflow-x-scroll">
        <table className="border border-slate-200 border-opacity-20 w-full h-auto">
          <thead>
            <tr className="text-[.92rem] font-inter ">
              <th className="font-roboto border border-slate-200 border-opacity-20 py-6 min-w-32">
                ORDER _ID
              </th>
              <th className="font-roboto border border-slate-200 border-opacity-20 py-6 min-w-32">
                USER
              </th>
              <th className="font-roboto border border-slate-200 border-opacity-20 py-6 min-w-32">
                FOOD NAME
              </th>
              <th className="font-roboto border border-slate-200 border-opacity-20 py-6 min-w-32">
                FOOD PICTURE
              </th>
              <th className="font-roboto border border-slate-200 border-opacity-20 py-6 min-w-24">
                PRICE
              </th>
              <th className="font-roboto border border-slate-200 border-opacity-20 py-6 min-w-16">
                QTY
              </th>
              <th className="font-roboto border border-slate-200 border-opacity-20 py-6 min-w-24">
                DELIVERY
              </th>
              <th className="font-roboto border border-slate-200 border-opacity-20 py-6 min-w-32">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="cursor-pointer">
                <td className="font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4">
                  {order._id}
                </td>
                <td className="font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 capitalize">
                  {order.userId.userName}
                </td>
                <td className="font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4">
                  {order.foodId.foodname}
                </td>
                <td className="font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4">
                  <img
                    src={"https://foodapi.labio.shop/" + order.foodId.foodImg}
                    className="mx-auto w-24 h-24"
                    alt=""
                  />
                </td>
                <td className="font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 text-green-500">
                  ${order.price}
                </td>
                <td className="font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4 ">
                  {order.quantity}
                </td>
                <td className="font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4">
                  {order.foodId.fooddelivery} hours
                </td>
                <td className="font-[300] border border-slate-200 border-opacity-20 text-center font-roboto text-[.95rem] py-4">
                  <select
                    onChange={(e) => handleSelect(e, order._id)}
                    name="orderstatus"
                    className="text-white bg-orange-600 outline-none p-2 font-bold text-sm cursor-pointer rounded-[.2rem]"
                    id="status"
                  >
                    <option className="p-4 bg-white text-black text-[.88rem]">
                      {order.status.toUpperCase()}
                    </option>
                    <option
                      className="p-4 bg-white text-black text-[.88rem]"
                      value="confirmed"
                    >
                      CONFIRMED
                    </option>
                    <option
                      className="p-4 bg-white text-black text-[.88rem]"
                      value="packed"
                    >
                      PACKED
                    </option>
                    <option
                      className="p-4 bg-white text-black text-[.88rem]"
                      value="sent out"
                    >
                      SEND OUT
                    </option>
                    <option
                      className="p-4 bg-white text-black text-[.88rem]"
                      value="delivered"
                    >
                      DELIVERED
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderContent;
