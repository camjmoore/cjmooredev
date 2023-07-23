import { Post } from "@/types/Post";
import { Project } from "@/types/Project";
import config from "./client-config";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient(config);

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

export async function getProject(slug: string): Promise<Project> {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
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
