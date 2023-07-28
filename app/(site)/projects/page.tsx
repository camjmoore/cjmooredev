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
          className="rounded-lg border border-gray-500"
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={250}
              height={200}
              className="overflow-hidden rounded-lg border border-gray-500"
            />
          )}
          <div>{project.name}</div>
        </Link>
      ))}
    </div>
  );
}
