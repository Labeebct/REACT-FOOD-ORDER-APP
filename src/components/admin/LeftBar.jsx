import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function LeftBar() {
  const navigate = useNavigate();

  const [page, setPage] = useState("");
  const [leftNav, setLeftNav] = useState(false);

  const handleLogout = () => {
    confirmAlert({
      title: "Confirm to LOGOUT",
      message: "Are you sure you want to Logout?",
      titleClassName: "text-xl font-bold text-green-500",
      buttons: [
        {
          label: "Yes",
          style: { backgroundColor: "#D80032" },
          className: "text-white font-bold py-2 px-4 rounded mr-2",
          onClick: async () => {
            setPage("Logout");
            localStorage.removeItem("token");
            navigate("/admin/login", { replace: true });
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
        "fixed inset-0 bg-[black] bg-opacity-50 flex justify-center items-center",
    });
  };

  return (
    <div
      className={`xl:relative min-w-[3.1rem] ${
        leftNav ? "w-[14rem] absolute z-10" : "w-[3.1rem]"
      } ease-in-out duration-200 xl:w-[16rem] h-full overflow-hidden  border-r border-slate-200 border-opacity-20 bg-[#000000]`}
    >
      <div className="mb-5">
        <h3 className="hidden xl:flex p-6  text-[1.26rem] sm:text-[1.3rem] md:text-[1.4rem] text-[#FF7A00] font-cagliostro">
          LABIOO
        </h3>
        <div className="xl:hidden cursor-pointer text-[#FF7A00] py-7 pl-4">
          {leftNav ? (
            <CloseIcon
              onClick={() => setLeftNav(false)}
              sx={{ fontSize: 27 }}
            />
          ) : (
            <MenuIcon onClick={() => setLeftNav(true)} sx={{ fontSize: 27 }} />
          )}
        </div>
      </div>
      <ul className={`w-full h-full flex flex-col`}>
        <Link to="/admin/dashboard">
          <li
            onClick={() => setPage("Dashboard")}
            className={`px-5 py-5 text-[.9rem] text-[#fffffff7] flex gap-2 items-center ${
              page === "Dashboard" ? "bg-[#0e0e0e]" : ""
            } border-b hover:bg-[#0e0e0e] border-slate-400 border-opacity-10 cursor-pointer`}
          >
            <HomeIcon sx={{ fontSize: 20 }} />
            Dashboard
          </li>
        </Link>
        <Link to="/admin/foods">
          <li
            onClick={() => setPage("Foods")}
            className={`px-5 py-5 text-[.9rem] text-[#fffffff7] flex gap-2 items-center ${
              page === "Foods" ? "bg-[#0e0e0e]" : ""
            } border-b hover:bg-[#0e0e0e] border-slate-400 border-opacity-10 cursor-pointer`}
          >
            <LunchDiningIcon sx={{ fontSize: 20 }} />
            Foods
          </li>
        </Link>
        <Link to="/admin/orders">
          <li
            onClick={() => setPage("Orders")}
            className={`px-5 py-5 text-[.9rem] text-[#fffffff7] flex gap-2 items-center ${
              page === "Orders" ? "bg-[#0e0e0e]" : ""
            } border-b hover:bg-[#0e0e0e] border-slate-400 border-opacity-10 cursor-pointer`}
          >
            <LocalShippingIcon sx={{ fontSize: 20 }} />
            Orders
          </li>
        </Link>
        <Link to="/admin/users">
          <li
            onClick={() => setPage("Users")}
            className={`px-5 py-5 text-[.9rem] text-[#fffffff7] flex gap-2 items-center ${
              page === "Users" ? "bg-[#0e0e0e]" : ""
            } border-b hover:bg-[#0e0e0e] border-slate-400 border-opacity-10 cursor-pointer`}
          >
            <PeopleAltIcon sx={{ fontSize: 20 }} />
            Users
          </li>
        </Link>
        <Link to="/admin/login">
          <li
            onClick={handleLogout}
            className={`px-5 py-5 text-[.9rem] text-[#fffffff7] flex gap-2 items-center border-b hover:bg-[#0e0e0e] border-slate-400 border-opacity-10 cursor-pointer`}
          >
            <LogoutIcon sx={{ fontSize: 20 }} />
            Logout
          </li>
        </Link>
      </ul>{" "}
    </div>
  );
}

export default LeftBar;
