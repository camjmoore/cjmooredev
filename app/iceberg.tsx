"use client";
import SceneProps from "@react-three/fiber/dist/declarations/src/three-types";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Iceberg() {
  const modelURL = "/iceberg.glb";
  const model = useLoader(GLTFLoader, modelURL);
  console.log(model);
  // no conditional renders are necessary due to useLoader suspense behavior
  return <primitive object={model.scene} />;
}
