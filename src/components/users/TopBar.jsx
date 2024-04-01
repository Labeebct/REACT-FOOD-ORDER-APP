import React, { useState } from "react";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const Navigate = useNavigate();

  const [nav, setNav] = useState(false);
  const [page, setPage] = useState("home");

  const logout = () => {
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
            localStorage.removeItem("token");
            Navigate("/login");
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
    <nav className="flex z-10 sticky top-0 right-0 left-0 text-white justify-between px-7 items-center w-full h-[4.5rem] bg-black border-b border-gray-100 border-opacity-10">
      <div className="text-[1.26rem] sm:text-[1.3rem] md:text-[1.4rem] text-[#FF7A00] font-cagliostro">
        LABIOO
      </div>
      <div className="ml-0 md:ml-[8rem] bg-white flex overflow-hidden rounded-2xl h-7 md:max-w-[14rem] max-w-[9rem] ">
        <input
          type="text"
          placeholder="Search"
          spellCheck={false}
          className="bg-transparent h-full pl-4 w-[90%] outline-none text-black text-[.9rem]"
        />
        <div className="w-10 cursor-pointer bg-gray-300 flex items-center justify-center">
          <SearchIcon style={{ color: "black" }} />
        </div>
      </div>
      <section className="flex md:hidden">
        {nav ? (
          <CloseIcon
            onClick={() => setNav(false)}
            sx={{ fontSize: 27 }}
            className="cursor-pointer"
          />
        ) : (
          <MenuIcon
            sx={{ fontSize: 27 }}
            className="cursor-pointer"
            onClick={() => setNav(true)}
          />
        )}
      </section>
      <ul className="hidden md:flex">
        <Link to="/">
          <li
            onClick={() => setPage("home")}
            className={`px-3 hover:text-[#FF7A00] font-inter text-[.9rem] cursor-pointer ${
              page === "home" ? "text-[#FF7A00]" : ""
            } `}
          >
            Home
          </li>
        </Link>
        <Link to="/foods">
          <li
            onClick={() => setPage("foods")}
            className={`px-3 hover:'text-[#FF7A00]' font-inter text-[.9rem] cursor-pointer ${
              page === "foods" ? "text-[#FF7A00]" : ""
            } `}
          >
            Foods
          </li>
        </Link>
        <Link to="/orders">
          <li
            onClick={() => setPage("orders")}
            className={`px-3 hover:'text-[#FF7A00]' font-inter text-[.9rem] cursor-pointer ${
              page === "orders" ? "text-[#FF7A00]" : ""
            } `}
          >
            Orders
          </li>
        </Link>
        <Link to="/login">
          <li
            className="px-3 hover:text-[#FF7A00] font-inter text-[.9rem] cursor-pointer"
            onClick={logout}
          >
            <LogoutIcon sx={{ fontSize: 16 }} />
          </li>
        </Link>
      </ul>
      <ul
        className={`mt-[4.5rem] w-[17.5rem] border-r border-slate-200 border-opacity-20 bg-[#000000] h-screen flex flex-col ${
          nav ? "left-0" : "left-[-17.5rem]"
        }  md:hidden absolute bottom-0 top-0 ease-linear duration-300`}
      >
        <Link to="/home">
          <li className="px-5 py-6 flex gap-2 items-center border-b hover:bg-[#0e0e0e] border-slate-200 border-opacity-10 cursor-pointer">
            <HomeIcon />
            Home
          </li>
        </Link>
        <Link to="/foods">
          <li className="px-5 py-6 flex gap-2 items-center border-b hover:bg-[#0e0e0e] border-slate-200 border-opacity-10 cursor-pointer">
            <LunchDiningIcon />
            Foods
          </li>
        </Link>
        <Link to="/orders">
          <li className="px-5 py-6 flex gap-2 items-center border-b hover:bg-[#0e0e0e] border-slate-200 border-opacity-10 cursor-pointer">
            <LocalShippingIcon />
            Orders
          </li>
        </Link>
        <Link to="/login">
          <li
            className="px-5 py-6 flex gap-2 items-center border-b hover:bg-[#0e0e0e] border-slate-200 border-opacity-10 cursor-pointer"
            onClick={logout}
          >
            <LogoutIcon />
            Logout
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default TopBar;
