import React, { useEffect, useState } from "react";
import AdminLoginContent from "../../components/admin/AdminLoginContent";
import TopBar from "../../components/admin/TopBar";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [authenticated, setAuthenticate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setAuthenticate(true);
        } else {
          setAuthenticate(false);
          navigate("/admin/dashboard", { replace: true });
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
          <main className="w-full h-[calc(100vh-4.5rem)]">
            <AdminLoginContent />
          </main>
        </>
      )}
    </>
  );
}

export default AdminLogin;
