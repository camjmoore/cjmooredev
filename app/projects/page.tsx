import { getProjects } from "../../sanity/sanity-utils";
import Link from "next/link";

export default async function Home() {
  //instead of using getStaticPaths and getStaticProps to run getProjects and handle the data
  //now in next13 you can just do this

  const projects = await getProjects();

  return (
    <div>
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id}>
          {project.name}
        </Link>
      ))}
    </div>
  );
}
