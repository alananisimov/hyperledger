import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { type CarouselApi } from "~/components/ui/carousel";
type Args = {
  type: "forward" | "back";
  api: CarouselApi | undefined;
};
export default function Move({ type, api }: Args) {
  const handleClick = () => {
    if (api) {
      if (type === "back") {
        api.scrollPrev();
      } else {
        api.scrollNext();
      }
    }
  };
  return (
    <button
      className={`absolute ${type === "back" ? "-left-32 top-1/2" : "-right-32 top-1/2 -translate-y-1/2"} flex h-20 w-32 -translate-y-1/2 items-center justify-center`}
      onClick={handleClick}
    >
      <Image
        src={"/images/rectangle.svg"}
        alt=""
        width={100}
        height={50}
        className=""
      />
      <h2 className="absolute -ml-2 -mt-0.5 inline-flex items-center justify-center gap-x-1 text-cyan-950">
        {type === "back" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      </h2>
    </button>
  );
}
