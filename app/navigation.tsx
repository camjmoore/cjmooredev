"use client";
import Headroom from "react-headroom";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();

  const menu = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Posts", href: "/posts" },
    { name: "Rudiments", href: "/rudiments" },
  ];

  return (
    <Headroom>
      <div className="flex flex-1 items-center justify-center h-20 max-w-full mx-auto">
        <nav className="flex backdrop-blur-sm rounded-full px-3 text-sm bg-abyss2 bg-opacity-80 ring-1 ring-white/10 pointer-events-auto">
          {menu.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                href={link.href}
                key={link.name}
                className={
                  isActive
                    ? "relative block px-3 py-2.5 transition text-ignis1"
                    : "relative block px-3 py-2.5 transition hover:text-ignis1"
                }
              >
                {link.name}
                <span
                  className={`${
                    isActive
                      ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-ignis2/0 via-ignis2/70 to-ignis2/0"
                      : "hidden"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>
      </div>
    </Headroom>
  );
}
