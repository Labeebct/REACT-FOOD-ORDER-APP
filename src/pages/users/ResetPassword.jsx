import React from "react";
import LoginTopbar from "../../components/users/LoginTopbar";
import Footer from "../../components/users/Footer";
import PasswordResetContent from "../../components/users/PasswordResetContent";


function PasswordReset() {
  return (
    <>
      <LoginTopbar />
      <PasswordResetContent />
      <Footer />
    </>
  );
}

export default PasswordReset;
