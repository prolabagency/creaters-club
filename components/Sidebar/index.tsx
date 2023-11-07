import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="admin_left">
            <div className="admin_side_items">

                {
                    localStorage.getItem('admin') ?
                    <Link
                        href={"/mainlayout/teams"}
                        className={`admin_side_item ${pathname === "/mainlayout/teams" ? "active" : null
                            }`}
                    >
                        Teams
                    </Link>: <Link
                    href={"/mainlayout/team"}
                    className={`admin_side_item ${pathname === "/mainlayout/team" ? "active" : null
                        }`}
                >
                    Team
                </Link>

                } 
                <Link
                    href={"/mainlayout/members"}
                    className={`admin_side_item ${pathname === "/mainlayout/members" ? "active" : null
                        }`}
                >
                    Members
                </Link>
                <Link
                    href={"/mainlayout/project"}
                    className={`admin_side_item ${pathname === "/mainlayout/project" ? "active" : null
                        }`}
                >
                    Project
                </Link>
                <Link
                    href={"/users"}
                    className={`admin_side_item ${pathname === "/users" ? "active" : null
                        }`}
                >
                    Users
                </Link>
                <Link
                    href={"/mainlayout/profile"}
                    className={`admin_side_item ${pathname === "/mainlayout/profile" ? "active" : null
                        }`}
                >
                    Profile
                </Link>
            </div>
        </div>
    )
}
