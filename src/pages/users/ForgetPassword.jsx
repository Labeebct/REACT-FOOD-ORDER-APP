import React from "react";
import LoginTopbar from "../../components/users/LoginTopbar";
import Footer from "../../components/users/Footer";
import ForgetPassContent from "../../components/users/ForgetPassContent";

function ForgetPassword() {
  return (
    <>
      <LoginTopbar />
      <ForgetPassContent />
      <Footer />
    </>
  );
}

export default ForgetPassword;
