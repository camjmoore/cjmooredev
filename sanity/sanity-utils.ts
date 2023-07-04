import { createClient } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "s7ponpx3",
    dataset: "production",
    apiVersion: "2023-02-07",
  });
}
