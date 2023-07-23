"use client";

import config from "@/sanity.config"; //available as an alias in root of project
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
  return <NextStudio config={config} />;
}
