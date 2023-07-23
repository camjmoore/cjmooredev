import { Post } from "@/types/Post";
import { Project } from "@/types/Project";
import config from "./client-config";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient(config);

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
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getPosts(): Promise<Post[]> {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      content
    }`
  );
}
