'use client'

import { Header } from "@/components/Header";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

export default function AdminlayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <Header ver='admin'/>
      <div className="admin">
        <div className="admin_left">
          <div className="admin_side_items">


            <Link
              href={"/adminlayout/teams"}
              className={`admin_side_item ${pathname === "/adminlayout/teams" ? "active" : null
                }`}
            >
              Teams
            </Link>


            <Link
              href={"/adminlayout/allmembers"}
              className={`admin_side_item ${pathname === "/adminlayout/allmembers" ? "active" : null
                }`}
            >
              Members
            </Link>
            <Link
              href={"/adminlayout/projects"}
              className={`admin_side_item ${pathname === "/adminlayout/projects" ? "active" : null
                }`}
            >
              Projects
            </Link>
            <Link
              href={"/adminlayout/users"}
              className={`admin_side_item ${pathname === "/adminlayout/users" ? "active" : null
                }`}
            >
              Lids
            </Link>
            <Link
              href={"/adminlayout/profile"}
              className={`admin_side_item ${pathname === "/adminlayout/profile" ? "active" : null
                }`}
            >
              Profile
            </Link>
          </div>
        </div>
        <div className="admin_right">
          <div className="admin_content">{children}</div>
        </div>
      </div>
    </>
  );
}
