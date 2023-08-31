import Image from "next/image";

export default function Headshot() {
  return (
    <div className="hidden sm:flex">
      <div className="flex items-center">
        <div className="h-12 min-w-12 z-10 overflow-hidden bg-bathys2 rounded-full border border-cumulo1">
          <Image
            src="/headshot.png"
            alt="a headshot photo of the next dev you plan to hire"
            quality={50}
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center min-w-46 h-10 py-1 text-sm  pointer-events-auto">
          <h2 className="px-2 text-sm font-bold"> Cameron Moore </h2>
        </div>
      </div>
    </div>
  );
}
