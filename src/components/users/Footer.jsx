import React from "react";

import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer className="flex flex-col gap-4 w-full text-white h-[15rem] border-t border-gray-100 border-opacity-10 p-10">
      <h3 className="font-poppins text-2xl font-[500] tracking-widest mb-7">
        LABIOO
      </h3>
      <section className="text-[.84rem] flex items-center gap-2">
        <PhoneIcon sx={{ fontSize: 16 }} />
        <p>+91 8590471530</p>
      </section>
      <section className="text-[.84rem] flex items-center gap-2">
        <MailOutlineIcon sx={{ fontSize: 16 }} />
        <p>ctlabeebthaliyil@gmail.com</p>
      </section>
      <section className="text-[.84rem] flex items-center gap-2">
        <InstagramIcon sx={{ fontSize: 16 }} />
        <p>Labeeb_ct</p>
      </section>
    </footer>
  );
}

export default Footer;
