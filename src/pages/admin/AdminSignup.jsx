import React from "react";
import AdminSignupContent from "../../components/admin/AdminSignupContent";
import TopBar from "../../components/admin/TopBar";

function AdminSignup() {
  return (
    <>
      <TopBar />
      <main className="w-full h-[calc(100vh-4.5rem)]">
        <AdminSignupContent />
      </main>
    </>
  );
}

export default AdminSignup;
