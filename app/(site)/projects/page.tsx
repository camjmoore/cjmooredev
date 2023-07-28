import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  //instead of using getStaticPaths and getStaticProps to run getProjects and handle the data
  //now in next13 you can just do this

  const projects = await getProjects();

  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project._id}
          className="overflow-hidden w-60 h-72 rounded-lg border border-gray-500"
        >
          {project.image && (
            <div className="mx-auto overflow-hidden max-w-fit h-52">
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={200}
              />
            </div>
          )}
          <div>{project.name}</div>
        </Link>
      ))}
    </div>
  );
}
