import Image from "next/image";
import Link from "next/link";

export default function BuyNowBtn({ link }: { link: string }) {
  return (
    <Link
      href={link}
      className={`relative mx-auto mt-auto flex max-h-12 max-w-72 items-center justify-center`}
    >
      <Image
        src={"/images/rectangle_token.png"}
        alt=""
        width={100}
        height={50}
        className="h-full w-full"
      />
      <h2 className="absolute -ml-2 -mt-0.5 inline-flex items-center justify-center gap-x-1 text-lg font-medium text-white">
        BUY NOW
      </h2>
    </Link>
  );
}
