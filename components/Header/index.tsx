import React from "react";

import Logo from "../../images/logo.png";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_inner">
          <div className="header_logo">
            <Image width={75} height={75} src={Logo} alt="" />
          </div>
          <div className="header_nav">
            <div className="header_nav_bar">Home</div>
            <div className="header_nav_bar">Projects</div>
            <div className="header_nav_bar">Contacts</div>
            <div className="header_nav_bar">Details</div>
            <div className="header_nav_bar">Teams</div>
            <div className="header_nav_bar">Partners</div>
            <Link href='/login' className="header_nav_bar">Login / Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
