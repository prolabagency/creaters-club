"use client";

import { Header } from "@/components/Header";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

export default function MainLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <div className="admin">
        <div className="admin_left">
          <div className="admin_side_items">
            <Link
              href={"/mainlayout/teams"}
              className={`admin_side_item ${
                pathname === "/mainlayout/teams" ? "active" : null
              }`}
            >
              Teams
            </Link>
            <Link
              href={"/mainlayout/members"}
              className={`admin_side_item ${
                pathname === "/mainlayout/members" ? "active" : null
              }`}
            >
              Members
            </Link>
            <Link
              href={"/mainlayout/projects"}
              className={`admin_side_item ${
                pathname === "/mainlayout/projects" ? "active" : null
              }`}
            >
              Projects
            </Link>
            <Link
              href={"/mainlayout/users"}
              className={`admin_side_item ${
                pathname === "/mainlayout/users" ? "active" : null
              }`}
            >
              Users
            </Link>
            <Link
              href={"/mainlayout/profile"}
              className={`admin_side_item ${
                pathname === "/mainlayout/profile" ? "active" : null
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
