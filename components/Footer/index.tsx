import Image from "next/image";
import React from "react";
import Logo from "../../images/logo.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="footer">
      <div className='main_inner'>
      <div className="container">
        <div className="footer_inner">
          <div className="footer_left">
            <div className="header_logo">WEC</div>
          </div>
          <div className="footer_right">
            <div className="footer_item">
              <div>+996(552)57-75-77</div>
            </div>
            <div className="footer_item">
              <div>About us</div>
            </div>
            <div className="footer_item">
              <div>Projects</div>
            </div>
            <div className="footer_item">
              <div>Teamlids</div>
            </div>
            <div className="footer_item">
              <div>Partners</div>
            </div>
            <div className="footer_item">
              <div>Contact</div>
            </div>
          </div>
        </div>
      <div className="footer_text">Did by PROlab: <Link style={{color: 'white'}} href='https://prolabagency.com/'>https://prolabagency.com/</Link></div>

      </div>
      </div>
    </div>
  );
};
