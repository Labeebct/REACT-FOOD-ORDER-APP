import React from "react";
import LeftBar from "../../components/admin/LeftBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main className="w-full h-screen flex">
        <div className="w-[17rem] h-full">
          <LeftBar />
        </div>
        <div className="h-full w-[calc(100%-17rem)]">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
