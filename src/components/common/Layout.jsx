import { jwtDecode } from "jwt-decode";
import React, {  useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import TopBar from "../users/TopBar";
import Footer from "../users/Footer";

function Layout() {
  const [authenticated, setAuthenticate] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          const payload = jwtDecode(token);
          if(payload.role == 'user'){
            setAuthenticate(true);
          } else {
            navigate('/admin/dashboard',{replace:true})
          }
        } else {
          setAuthenticate(false);
          navigate('/login', {replace: true})
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
      <TopBar />
      {authenticated && <Outlet />}
      <Footer />
    </>
  );
}

export default Layout;
