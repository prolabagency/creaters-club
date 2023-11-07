import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export const Item1 = () => {
  const pathname = usePathname();

    return (
        <ul className="menu__box">
            <Link
                href="/"
                className={`menu__item ${pathname === "/" && "hover"}`}
            >
                Home
            </Link>
            <Link
                href="/about"
                className={`menu__item ${pathname === "/about" && "hover"}`}
            >
                About us
            </Link>
            <Link
                href="/projects"
                className={`menu__item ${pathname === "/projects" && "hover"}`}
            >
                Projects
            </Link>
            <Link
                href="/organizers"
                className={`menu__item ${pathname === "/organizers" && "hover"}`}
            >
                Organizers
            </Link>
            <Link
                href="/partners"
                className={`menu__item ${pathname === "/partners" && "hover"}`}
            >
                Partners
            </Link>

            <div className="menu__item">Contact</div>
        </ul>
    )
}
