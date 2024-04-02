import React, { useEffect, useState } from "react";
import BlockIcon from "@mui/icons-material/Block";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import loadingVideo from "../../assets/Foods/loading.mp4";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import axiosInstancce from "../../instance/axiosInstance";

function UsersContent() {
  const [userdata, setUserdata] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blocked, setBlocked] = useState("");

  useEffect(() => {
    setLoading(true)
    const getDatas = async () => {
      const response = await axiosInstancce.get("/admin/users");
      const { data, status } = response;

      //Saving the signupdata in data state
      if (status == 200) {
        setOrders(data.orders);
        setUserdata(data.signupDatas);
        setLoading(false)
      }
    };

    getDatas();
  }, []);

  //Function to block user
  const blockUser = async (userId) => {
    try {
      //Finding user to find the current status
      const findUser = userdata.find((user) => user._id == userId);

      const setStatus = findUser.status === "active" ? "BLOCK" : "UNBLOCK";

      Swal.fire({
        title: "Are you sure?",
        text: `You Want to ${setStatus} the user?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, ${setStatus} It!`,
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          //Sending api request to backend to block user
          const response = await axiosInstancce.patch(
            `/admin/block-user?userId=${userId}`
          );

          const { data, status } = response;

          if (status == 200) {
            setUserdata((prevUserData) =>
              prevUserData.map((user) =>
                user._id === userId ? { ...user, status: data.status } : user
              )
            );
            setBlocked(data.setStatus);
          }

          Swal.fire({
            title: `${blocked}!`,
            text: `User Has been succesfully ${blocked}`,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log("Error in block user", error);
    }
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
    <div className="h-full w-full p-4 flex flex-col items-center overflow-y-scroll">
      <div className="w-full h-auto bg-[#ffffff23] flex justify-between px-3 items-center rounded-md py-4 mb-4 sticky top-0 left-0 right-0">
        <h3 className="font-roboto text-[1.2rem] font-medium">Users List</h3>
      </div>
      <div className="scrollbar-hide w-full h-auto overflow-x-scroll">
        <table className="border border-slate-200 border-opacity-20 w-full h-auto">
          <thead>
            <tr className="text-[.92rem] font-inter ">
              <th className="font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32">
                USER NAME
              </th>
              <th className="font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32">
                EMAIL
              </th>
              <th className="font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32">
                MOBILE
              </th>
              <th className="font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32">
                ORDERS
              </th>
              <th className="font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32">
                REG DATE
              </th>
              <th className="font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32">
                STATUS
              </th>
              <th className="font-roboto font-[600] border border-slate-200 border-opacity-20 py-6 min-w-32">
                BLOCK
              </th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((data, index) => (
              <tr className="cursor-pointer h-[4.5rem]" key={index}>
                <td className="font-[400] border border-slate-200 border-opacity-20 text-center font-roboto text-[.93rem] py-4 capitalize">
                  {data.userName}
                </td>
                <td className="font-[400] border border-slate-200 border-opacity-20 text-center font-roboto text-[.93rem] py-4">
                  {data.email}
                </td>
                <td className="font-[400] border border-slate-200 border-opacity-20 text-center font-roboto text-[.93rem] py-4">
                  {data.address[0] ? data.address[0].mobilenum : "XXXXXXXXXX"}
                </td>
                <td className="font-[400] border border-slate-200 border-opacity-20 text-center font-roboto text-[.93rem] py-4">
                  {orders.filter((order) => order.userId === data._id).length}
                </td>
                <td className="font-[400] border border-slate-200 border-opacity-20 text-center font-roboto text-[.93rem] py-4">
                  {new Date(data.regDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td
                  className={`font-[600] border border-slate-200 ${
                    data.status == "active" ? "text-green-600" : "text-red-600"
                  } border-opacity-20 text-center font-roboto text-[.9rem] py-4 uppercase`}
                >
                  {data.status}
                </td>
                <td
                  className={`font-[400] border border-slate-200 border-opacity-20 text-center font-roboto text-[.93rem] py-4 ${
                    data.status == "active" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  <button
                    className="active:scale-[.9] ease-in-out duration-100"
                    onClick={() => blockUser(data._id)}
                  >
                    {data.status == "active" ? (
                      <BlockIcon />
                    ) : (
                      <PanoramaFishEyeIcon />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersContent;
