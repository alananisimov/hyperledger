import Image from "next/image";

type Args = {
  image: string;
};
export default function PartnerCard({ image }: Args) {
  return (
    <div className="py-1">
      <div className="flex h-36 w-64 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-md ">
        <Image
          src={image}
          alt=""
          width={300}
          height={200}
          className=" max-h-24 w-auto"
        />
      </div>
    </div>
  );
}
