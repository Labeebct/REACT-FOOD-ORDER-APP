import React from "react";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

function TopBar() {
  return (
    <nav className="flex z-10 sticky top-0 right-0 left-0 text-white justify-between px-7 items-center w-full h-[4.5rem] bg-black border-b border-gray-100 border-opacity-10">
      <div className="text-[1.26rem] sm:text-[1.3rem] md:text-[1.4rem] text-[#FF7A00] font-cagliostro">
        LABIOO
      </div>
      <Link to="/login">
        <li className="px-5 py-6 flex gap-2 items-center border-b hover:text-[#FF7A00]  border-slate-200 border-opacity-10 cursor-pointer">
          <LogoutIcon sx={{ fontSize: 20 }} />
        </li>
      </Link>
    </nav>
  );
}

export default TopBar;
