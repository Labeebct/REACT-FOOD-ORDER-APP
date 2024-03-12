import React, { useState } from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

function LeftBar() {
  const [page, setPage] = useState("");

  return (
    <div className="w-full h-full">
      <ul
        className={`w-full border-r border-slate-200 border-opacity-20 bg-[#000000] h-full flex flex-col`}
      >
        <Link to="/admin/dashboard">
          <li
            onClick={() => setPage("Dashboard")}
            className={`px-5 py-6 flex gap-2 items-center ${
              page === "Dashboard" ? "bg-[#0e0e0e]" : ""
            } border-b hover:bg-[#0e0e0e] border-slate-200 border-opacity-10 cursor-pointer`}
          >
            <HomeIcon />
            Dashboard
          </li>
        </Link>
        <Link to="/admin/foods">
          <li
            onClick={() => setPage("Foods")}
            className={`px-5 py-6 flex gap-2 items-center ${
              page === "Foods" ? "bg-[#0e0e0e]" : ""
            } border-b hover:bg-[#0e0e0e] border-slate-200 border-opacity-10 cursor-pointer`}
          >
            <LunchDiningIcon />
            Foods
          </li>
        </Link>
        <Link to="/admin/orders">
          <li
            onClick={() => setPage("Orders")}
            className={`px-5 py-6 flex gap-2 items-center ${
              page === "Orders" ? "bg-[#0e0e0e]" : ""
            } border-b hover:bg-[#0e0e0e] border-slate-200 border-opacity-10 cursor-pointer`}
          >
            <LocalShippingIcon />
            Orders
          </li>
        </Link>
        <Link to="/admin/users">
          <li
            onClick={() => setPage("Users")}
            className={`px-5 py-6 flex gap-2 items-center ${
              page === "Users" ? "bg-[#0e0e0e]" : ""
            } border-b hover:bg-[#0e0e0e] border-slate-200 border-opacity-10 cursor-pointer`}
          >
            <PeopleAltIcon />
            Users
          </li>
        </Link>
        <Link to="/admin/login">
          <li
            onClick={() => setPage("Logout")}
            className={`px-5 py-6 flex gap-2 items-center border-b hover:bg-[#0e0e0e] border-slate-200 border-opacity-10 cursor-pointer`}
          >
            <LogoutIcon />
            Logout
          </li>
        </Link>
      </ul>{" "}
    </div>
  );
}

export default LeftBar;
