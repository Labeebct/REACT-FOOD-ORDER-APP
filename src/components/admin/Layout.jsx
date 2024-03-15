import React from "react";
import LeftBar from "../../components/admin/LeftBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main className="w-full h-screen flex">
        <LeftBar />
        <div className="w-full xl:w-[calc(100%-16rem)] h-full ">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
