import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  //instead of using getStaticPaths and getStaticProps to run getProjects and handle the data
  //now in next13 you can just do this

  const projects = await getProjects();

  return (
    <div className="mx-auto mt-5 grid grid-cols-3 gap-4">
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
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div>{project.name}</div>
        </Link>
      ))}
    </div>
  );
}
