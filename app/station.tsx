import { Suspense } from "react";
import Iceberg from "./iceberg";
import Spinner from "./spinner";

export default function Station() {
  return (
    <div className="mx-auto max-w-2xl min-h-[50vh]">
      <Suspense fallback={<Spinner />}>
        <Iceberg />
      </Suspense>
    </div>
  );
}
