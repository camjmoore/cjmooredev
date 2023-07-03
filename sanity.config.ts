import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "s7ponpx3",
  dataset: "production",
  title: "cjmoore",
  apiVersion: "2023-02-07",
  basePath: "/admin",
  plugins: [deskTool()]
})

export default config;
