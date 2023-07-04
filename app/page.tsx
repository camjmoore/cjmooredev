import { getProjects } from "../sanity/sanity-utils";

export default async function Home() {
  //instead of using getStaticPaths and getStaticProps to run getProjects and handle the data
  //now in next13 you can just do this

  const projects = await getProjects();

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
}
