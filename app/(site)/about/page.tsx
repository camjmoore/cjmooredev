import Image from "next/image";

export default function About() {
  return (
    <div className="mx-auto w-[50rem]">
      <section className="flex justify-evenly items-center">
        <div>
          <h2 className="text-3xl text-white"> Cameron J Moore </h2>
          <p className="text-5md text-white">
            {" "}
            Front-End Developer | Full-Stack Interloper
          </p>
        </div>
        <Image
          src="/headshot.png"
          alt="a headshot photo of the next dev you plan to hire"
          quality={50}
          width={100}
          height={100}
          className="items-center rounded-full border border-zinc-400"
        />
      </section>
    </div>
  );
}
