import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  //instead of using getStaticPaths and getStaticProps to run getProjects and handle the data
  //now in next13 you can just do this

  const projects = await getProjects();

  return (
    <div>
      <h1 className="self-start pl-1">Projects</h1>
      <div className="grid grid-cols-1 gap-12 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="mx-auto w-60 h-72 overflow-hidden rounded-lg border border-nimbo2"
          >
            {project.image && (
              <div className="max-w-fit h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={250}
                  height={200}
                />
              </div>
            )}
            <h2 className="text-center mt-6">{project.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
