import React from "react";
import TopBar from "../../components/admin/TopBar";
import LeftBar from "../../components/admin/LeftBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <TopBar />
      <main className="w-full h-[calc(100vh-4.5rem)] flex">
        <div className="w-[20rem] h-full">
          <LeftBar />
        </div>
        <div className="h-full w-[calc(100%)]">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
