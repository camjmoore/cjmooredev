import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-evenly w-full fixed backdrop-blur-md">
      <Link href="/">About</Link>

      <Link href="/posts">Posts</Link>

      <a href="https://github.com/octanym">Src</a>
    </div>
  );
}
