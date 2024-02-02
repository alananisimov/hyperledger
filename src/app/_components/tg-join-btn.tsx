import Image from "next/image";
import { CibTelegramPlane } from "./icons/tg";
import Link from "next/link";

export default function TgJoinBtn({ className }: { className: string }) {
  return (
    <Link
      href={""}
      className={`relative flex items-center justify-center ${className} w-fit`}
    >
      <Image
        src={"/images/rectangle.svg"}
        alt=""
        width={100}
        height={50}
        className=""
      />
      <h2 className="absolute -ml-2 -mt-0.5 inline-flex items-center justify-center gap-x-1 text-cyan-950">
        <span>
          <CibTelegramPlane />
        </span>
        JOIN
      </h2>
    </Link>
  );
}
