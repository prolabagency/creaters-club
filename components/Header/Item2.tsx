import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export const Item2 = () => {
  const pathname = usePathname();

    return (
        <ul className="menu__box">
            
            <Link
              href={"/mainlayout/team"}
              className={`menu__item ${
                pathname === "/mainlayout/team" ? "hover" : null
              }`}
            >
              Team
            </Link>
            <Link
              href={"/mainlayout/members"}
              className={`menu__item ${
                pathname === "/mainlayout/members" ? "hover" : null
              }`}
            >
              Members
            </Link>
            <Link
              href={"/mainlayout/project"}
              className={`menu__item ${
                pathname === "/mainlayout/project" ? "hover" : null
              }`}
            >
              Project
            </Link>
            
            <Link
              href={"/mainlayout/profile"}
              className={`menu__item ${
                pathname === "/mainlayout/profile" ? "hover" : null
              }`}
            >
              Profile
            </Link>
        </ul>
    )
}
