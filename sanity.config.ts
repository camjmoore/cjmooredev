import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";

const config = defineConfig({
  projectId: "s7ponpx3",
  dataset: "production",
  title: "cjmoore",
  apiVersion: "2023-02-07",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [project] },
});

export default config;
