import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center">
      <div className="h-24 w-24 overflow-hidden rounded-full border border-cumulo1">
        <Image
          src="/headshot.png"
          alt="a headshot photo of the next dev you plan to hire"
          quality={50}
          width={100}
          height={100}
        />
      </div>
      <div className="">
        <h2 className="text-3xl"> Cameron J Moore </h2>
        <p className="text-5md"> Front-End Developer | Full-Stack Interloper</p>
      </div>
    </div>
  );
}
