import Image from "next/image";
import TgJoinBtn from "./tg-join-btn";
import Link from "next/link";

export default function Footer({ classname }: { classname: string }) {
  return (
    <>
      <div
        className={` flex flex-col bg-[#013A44] py-12 font-sans md:flex-row md:px-32 ${classname}`}
      >
        <div className="flex flex-col gap-y-4">
          <Image
            src={"/hyperledger_foundation_logo_vt_green 2 (2).png"}
            alt=""
            width={200}
            height={100}
            className="mx-auto"
          />
          <div className=" inline-flex justify-center gap-x-2">
            <Image
              src={"/icons/ant-design_youtube-filled.png"}
              alt=""
              width={60}
              height={60}
              className="h-6 w-auto"
            />
            <Image
              src={"/icons/fluent_mail-24-filled.png"}
              alt=""
              width={60}
              height={60}
              className="h-6 w-auto"
            />
            <Image
              src={"/icons/mdi_twitter.png"}
              alt=""
              width={60}
              className="h-6 w-auto"
              height={60}
            />
            <Image
              src={"/icons/ri_linkedin-fill.png"}
              alt=""
              width={60}
              height={60}
              className="h-6 w-auto"
            />
          </div>
        </div>
        <div className="mx-auto mt-6 flex flex-col items-center justify-center gap-x-5 gap-y-3 text-[#B2F4B5] md:mx-0 md:ml-auto md:flex-row">
          <Link href={"#tokens"}>
            <h3 className="">TOKENS</h3>
          </Link>
          <Link href={"#benefits"}>
            <h3 className="">OUR PARTNERS</h3>
          </Link>
          <Link href={"#about"}>
            <h3 className="">ABOUT US</h3>
          </Link>
          <TgJoinBtn className="" />
        </div>
      </div>
      <p className="flex w-screen justify-center bg-[#013A44] pb-6 text-xs text-white md:justify-end md:pr-32 md:text-base">
        Copyright © 2024 Hyperledger
      </p>
    </>
  );
}
