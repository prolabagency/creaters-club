"use client";

import React, { useState, useEffect } from "react";

import Logo from "../../images/logo.png";
import NoProfile from "../../images/no-profile.jpeg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@/redux/slices/profile";

export const Header: any = () => {
  const pathname = usePathname();
  const dispatch = useDispatch<any>()
  const {profile} = useSelector((state: any) => state)

  useEffect(() => {
    dispatch(getProfile())
  }, []);

  return (
    <div className="header">
      <div className="bg"></div>
      <div className="container ver">
        <div className="header_inner" >
          <div >
            <Link href="/" className="header_logo">
              {" "}
              WEC
            </Link>
          </div>
          <div className="header_nav">
            <Link href='/' className={`header_nav_bar ${pathname === '/' && 'hover'}`}>Home</Link>
            <Link href='/about' className={`header_nav_bar ${pathname === '/about' && 'hover'}`}>About us</Link>
            <div className="header_nav_bar">Teams</div>
            <div className="header_nav_bar">Projects</div>
            <div className="header_nav_bar">Partners</div>
            <div className="header_nav_bar">Contact</div>
          </div>
          {profile?.data ? null : (
            <Link href="/login" className="header_nav_bar">
              Login
            </Link>
          )}
          {profile?.data && pathname === "/" || profile?.data && pathname === "/about"? (
            <Link href="/team" className="header_nav_bar">
              Панель
            </Link>
          ) : (
            <>
            {
              profile?.data?.id ? <Link href="/profile" className="header_nav_bar" style={{
                display: 'flex',
                gap: '10px'
              }}>
               {
                profile?.data?.id ? <Image width={50} height={50} style={{
                  border: '1px solid red',
                  borderRadius: '100px',
                  objectFit: 'cover'
                }} src={profile?.data?.photo ? profile?.data?.photo : NoProfile} alt="" /> :null
               } {profile?.data?.first_name} {profile?.data?.last_name}
              </Link>: null
            }</>
          )}
        </div>
      </div>
    </div>
  );
};