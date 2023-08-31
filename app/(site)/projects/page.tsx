import { getProjects } from "@/sanity/sanity-utils";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  //instead of using getStaticPaths and getStaticProps to run getProjects and handle the data
  //now in next13 you can just do this

  const projects = await getProjects();

  return (
    <div>
      <h1 className="self-start px-3 py-1 w-full bg-abyss2 bg-opacity-60 backdrop-blur-sm rounded-md">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="w-64 h-60 mx-auto overflow-hidden bg-abyss2 bg-opacity-60 backdrop-blur-sm rounded-md"
          >
            <h2 className="text-center my-3">
              <HiOutlineWrenchScrewdriver className="inline text-ignis1 h-4 w-4 mr-3" />
              {project.name}
            </h2>
            {project.image && (
              <div className="max-w-fit overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={260}
                  height={200}
                />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
