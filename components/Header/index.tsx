"use client";

import React, { useState, useEffect } from "react";

import Logo from "../../images/logo.png";
import NoProfile from "../../images/no-profile.jpeg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@/redux/slices/profile";
import { Item3 } from "./Item3";
import { Item1 } from "./Item1";
import { Item2 } from "./Item2";

interface Props {
  ver?: any
}

export const Header: any = ({ver}: Props) => {
  const pathname = usePathname();
  const dispatch = useDispatch<any>();
  const { profile } = useSelector((state: any) => state);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getProfile());
    }
  }, []);

  return (
    <div className="header">
      <div className="bg"></div>
      <div className="container ver">
        <div className="header_inner">
          <div>
            <Link href="/" className="header_logo">
              {" "}
              WEC
            </Link>
          </div>
          <div className="header_nav">
            <Link
              href="/"
              className={`header_nav_bar ${pathname === "/" && "hover"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`header_nav_bar ${pathname === "/about" && "hover"}`}
            >
              About us
            </Link>
            <Link
              href="/projects"
              className={`header_nav_bar ${pathname === "/projects" && "hover"}`}
            >
              Projects
            </Link>
            <Link
              href="/teamlids"
              className={`header_nav_bar ${pathname === "/teamlids" && "hover"}`}
            >
              Teams
            </Link>
            {/* <Link
              href="/organizers"
              className={`header_nav_bar ${pathname === "/organizers" && "hover"}`}
            >
              Organizers
            </Link> */}
            <Link
              href="/partners"
              className={`header_nav_bar ${pathname === "/partners" && "hover"}`}
            >
              Partners
            </Link>
            <Link
              href="/contact"
              className={`header_nav_bar ${pathname === "/contact" && "hover"}`}
            >
              Contact
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {profile?.data ? null : (
              <Link href="/login" className="header_nav_bar">
                Login
              </Link>
            )}
            {(profile?.data && pathname === "/") ||
              (profile?.data && pathname === "/about") ||
              (profile?.data && pathname === "/projects") ||
              (profile?.data && pathname === "/teamlids") ||
              (profile?.data && pathname === "/contact") ||
              (profile?.data && pathname === "/partners") ? (
              <Link href={localStorage.getItem('admin') === 'true' ? "/adminlayout/teams" : "/mainlayout/team"} className="header_nav_bar">
                Панель
              </Link>
            ) : (
              <>
                {profile?.data?.id ? (
                  <Link
                    href="/mainlayout/profile"
                    className="header_nav_bar"
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    {profile?.data?.id ? (
                      <Image
                        width={50}
                        height={50}
                        style={{
                          border: "1px solid red",
                          borderRadius: "100px",
                          objectFit: "cover",
                        }}
                        src={
                          profile?.data?.photo
                            ? profile?.data?.photo
                            : NoProfile
                        }
                        alt=""
                      />
                    ) : null}{" "}
                    <div className="header__info">{profile?.data?.first_name}</div>
                    <div className="header__info">{profile?.data?.last_name}</div> 
                  </Link>
                ) : null}
              </>
            )}
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>

              {!ver ? <Item1/> : null}
              {ver === 'team' ? <Item2/> : null}
              {ver === 'admin' ? <Item3/> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
