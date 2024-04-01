import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import TopBar from "../users/TopBar";
import Footer from "../users/Footer";

function Layout() {
  const navigate = useNavigate();

  const [authenticated, setAuthenticate] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const payload = jwtDecode(token);
          if (payload.role == "user") {
            setAuthenticate(true);
          } else {
            navigate("/admin/dashboard", { replace: true });
          }
        } else {
          setAuthenticate(false);
          navigate("/login", { replace: true });
        }
      } catch (error) {
        setAuthenticate(false);
        console.log("Error in check auth", error);
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      {authenticated && (
        <>
          <TopBar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
