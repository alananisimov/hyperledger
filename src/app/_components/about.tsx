import Image from "next/image";

export default function About() {
  return (
    <div>
      <h2 className=" mb-16 w-screen text-center text-3xl font-semibold md:text-4xl lg:text-6xl ">
        About Hyperledger
      </h2>
      <Image
        src={"/brands.svg"}
        alt=""
        priority
        width={400}
        height={500}
        className="mx-auto h-auto w-screen max-w-7xl object-cover"
      />
    </div>
  );
}
