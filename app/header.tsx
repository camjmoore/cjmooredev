import Nav from "./navigation";
import Headshot from "./headshot";

export default function Header() {
  return (
    <div className="h-20 max-w-full max-auto ">
      <div className="flex items-center justify-center sm:justify-start md:justify-between h-full max-w-4xl mx-auto">
        <Headshot />
        <Nav />
        <div className="hidden md:block px-[3.55rem]">
          <div className="flex w-16 px-3 mx-auto text-sm bg-abyss2/90 backdrop-blur-sm rounded-full ring-1 ring-white/10 pointer-events-auto">
            <p className="py-2.5 mx-auto transition text-ignis">Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
}
