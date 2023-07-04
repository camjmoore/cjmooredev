import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "s7ponpx3",
    dataset: "production",
    apiVersion: "2023-02-07",
  });

  //for all types that match projects
  //return
  //id
  //created stamp
  //name
  //slug.current as slug
  //image url destructured from image.asset as image
  //url
  //content

  return client.fetch(
    groq`*[_type == "project" ]{
      _id,
      _createdAt
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}
