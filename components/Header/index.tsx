"use client";

import React, { useState, useEffect } from "react";

import Logo from "../../images/logo.png";
import NoProfile from "../../images/no-profile.jpeg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header: any = () => {
  const [profile, setProfile] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const profileData: any = localStorage.getItem("profile");
    if (profileData === null && pathname !== "/") {
      window.location.replace("/");
    } else {
      const profile = JSON.parse(profileData);
      setProfile(profile);
    }
  }, []);

  return (
    <div className="header">
      <div className="container">
        <div className="header_inner">
          <div className="header_logo">
            <Link href="/">
              {" "}
              <Image width={75} height={75} src={Logo} alt="" />
            </Link>
          </div>
          <div className="header_nav">
            <div className="header_nav_bar">Home</div>
            <div className="header_nav_bar">Projects</div>
            <div className="header_nav_bar">Contacts</div>
            <div className="header_nav_bar">Details</div>
            <div className="header_nav_bar">Teams</div>
            <div className="header_nav_bar">Partners</div>
          </div>
          {profile ? null : (
            <Link href="/login" className="header_nav_bar">
              Login
            </Link>
          )}
          {profile && pathname === "/" ? (
            <Link href="/mainlayout/team" className="header_nav_bar">
              Панель
            </Link>
          ) : (
            <>
            {
              profile?.id ? <Link href="/mainlayout/profile" className="header_nav_bar" style={{
                display: 'flex',
                gap: '10px'
              }}>
               {
                profile?.id ? <Image width={50} height={50} style={{
                  border: '1px solid red',
                  borderRadius: '100px',
                  objectFit: 'cover'
                }} src={profile?.photo ? profile?.photo : NoProfile} alt="" /> :null
               } {profile?.first_name} {profile?.last_name}
              </Link>: null
            }</>
          )}
        </div>
      </div>
    </div>
  );
};