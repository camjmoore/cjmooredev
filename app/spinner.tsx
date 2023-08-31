import Image from "next/image";
import spinner from "../public/spinner.svg";

export default function Spinner() {
  return (
    <div>
      <Image
        src={spinner}
        alt="gradient loader"
        width="75"
        height="75"
        className="animate-spin mx-auto my-12"
      />
    </div>
  );
}
