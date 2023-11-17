import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export const Item3 = () => {
  const pathname = usePathname();

    return (
        <ul className="menu__box">
            <Link
              href={"/adminlayout/teams"}
              className={`menu__item ${pathname === "/adminlayout/teams" && "hover"}`}
            >
              Teams
            </Link>
            <Link
              href={"/adminlayout/allmembers"}
              className={`menu__item ${pathname === "/adminlayout/allmembers" && "hover"}`}
            >
              Members
            </Link>
            <Link
              href={"/adminlayout/projects"}
              className={`menu__item ${pathname === "/adminlayout/projects" && "hover"}`}
            >
              Projects
            </Link>
            <Link
              href={"/adminlayout/users"}
              className={`menu__item ${pathname === "/adminlayout/users" && "hover"}`}
            >
              Users
            </Link>
            <Link
              href={"/adminlayout/profile"}
              className={`menu__item ${pathname === "/adminlayout/profile" && "hover"}`}
            >
              Profile
            </Link>
        </ul>
    )
}
