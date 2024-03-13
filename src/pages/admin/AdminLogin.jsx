import React from "react";
import AdminLoginContent from "../../components/admin/AdminLoginContent";
import TopBar from "../../components/admin/TopBar";

function AdminLogin() {
  return (
    <>
      <TopBar />
      <main className="w-full h-[calc(100vh-4.5rem)]">
        <AdminLoginContent />
      </main>
    </>
  );
}

export default AdminLogin;
