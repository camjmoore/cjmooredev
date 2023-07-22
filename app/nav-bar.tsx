"use client";
import Link from "next/link";
import { useState } from "react";

const DEFAULT_VALUES = {
  link1: false,
  link2: false,
  link3: false,
};

export default function HeadlessNav() {
  const [open, setOpen] = useState(DEFAULT_VALUES);

  const toggleOpen = (e) => {
    setOpen({ ...DEFAULT_VALUES, [e.target.name]: !e.target.value });
    console.log(e.target.name);
  };

  return (
    <div className="flex flex-1 items-center justify-center h-16 max-w-full mx-auto">
      <nav className="pointer-events-auto md:block">
        <ul className="flex rounded-full px-3 text-sm bg-slate-900 text-zinc-200 ring-1 ring-white/10">
          <Link
            href="/about"
            name="link1"
            value={open.link1}
            onClick={toggleOpen}
            className="relative block px-3 py-2 transition hover:text-orange-400"
          >
            About
            <span
              className={`${
                open.link1
                  ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 dark:from-orange-400/0 dark:via-orange-400/40 dark:to-orange-400/0"
                  : "hidden"
              }`}
            ></span>
          </Link>
          <Link
            href="/projects"
            name="link2"
            value={open.link2}
            onClick={toggleOpen}
            className="relative block px-3 py-2 transition hover:text-orange-400"
          >
            Projects
            <span
              className={`${
                open.link2
                  ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 dark:from-orange-400/0 dark:via-orange-400/40 dark:to-orange-400/0"
                  : "hidden"
              }`}
            ></span>
          </Link>
          <Link
            href="/posts"
            name="link3"
            value={open.link3}
            onClick={toggleOpen}
            className="relative block px-3 py-2 transition hover:text-orange-400"
          >
            Posts
            <span
              className={`${
                open.link3
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
