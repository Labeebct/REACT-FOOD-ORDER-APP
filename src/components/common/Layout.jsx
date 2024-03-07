import React from "react";
import { Outlet } from "react-router-dom";

import TopBar from "../users/TopBar";
import Footer from "../users/Footer";

function Layout() {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
