"use client";
import Link from "next/link";
import { useState } from "react";

const MENU_VALUES = {
  about: false,
  projects: false,
  posts: false,
  contact: false,
};

export default function HeadlessNav() {
  const [open, setOpen] = useState(MENU_VALUES);

  const toggleOpen = (e) => {
    setOpen({ ...MENU_VALUES, [e.target.name]: !e.target.value });
    console.log(e.target.name);
  };

  return (
    <div className="flex flex-1 items-center justify-center h-20 max-w-full mx-auto">
      <nav className="pointer-events-auto md:block">
        <ul className="flex rounded-full px-3 text-sm bg-slate-900 text-zinc-200 ring-1 ring-white/10">
          <Link
            href="/about"
            name="about"
            value={open.about}
            onClick={toggleOpen}
            className={
              open.about
                ? "relative block px-3 py-2 transition text-orange-400"
                : "relative block px-3 py-2 transition hover:text-orange-400"
            }
          >
            About
            <span
              className={`${
                open.about
                  ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 dark:from-orange-400/0 dark:via-orange-400/40 dark:to-orange-400/0"
                  : "hidden"
              }`}
            ></span>
          </Link>
          <Link
            href="/projects"
            name="projects"
            value={open.projects}
            onClick={toggleOpen}
            className={
              open.projects
                ? "relative block px-3 py-2 transition text-orange-400"
                : "relative block px-3 py-2 transition hover:text-orange-400"
            }
          >
            Projects
            <span
              className={`${
                open.projects
                  ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 dark:from-orange-400/0 dark:via-orange-400/40 dark:to-orange-400/0"
                  : "hidden"
              }`}
            ></span>
          </Link>
          <Link
            href="/posts"
            name="posts"
            value={open.posts}
            onClick={toggleOpen}
            className={
              open.posts
                ? "relative block px-3 py-2 transition text-orange-400"
                : "relative block px-3 py-2 transition hover:text-orange-400"
            }
          >
            Posts
            <span
              className={`${
                open.posts
                  ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 dark:from-orange-400/0 dark:via-orange-400/40 dark:to-orange-400/0"
                  : "hidden"
              }`}
            ></span>
          </Link>
          <Link
            href="/contact"
            name="contact"
            value={open.contact}
            onClick={toggleOpen}
            className={
              open.contact
                ? "relative block px-3 py-2 transition text-orange-400"
                : "relative block px-3 py-2 transition hover:text-orange-400"
            }
          >
            Contact
            <span
              className={`${
                open.contact
                  ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 dark:from-orange-400/0 dark:via-orange-400/40 dark:to-orange-400/0"
                  : "hidden"
              }`}
            ></span>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
