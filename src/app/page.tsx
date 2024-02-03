/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import background from "~/../public/images/background.png";
import Partners from "./_components/partners";
import { space_mono } from "./layout";
import About from "./_components/about";
import { OurTokensDialog } from "./_components/our-tokens-dialog";
export default async function Home() {
  noStore();
  return (
    <div
      className={`${space_mono.className} relative flex flex-col overflow-hidden`}
    >
      <div className="relative isolate h-screen ">
        <Image
          src={background}
          alt=""
          priority
          className="absolute -z-10 h-full w-auto object-cover"
        />

        <div className="mx-auto w-full px-6 pt-14 lg:px-8 ">
          <div className="mx-auto max-w-3xl  py-32 sm:py-48 md:ml-32 md:mr-auto lg:py-56 ">
            <div className="">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Enabling an open, trusted, and enduring digital economy
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                The open source, global ecosystem for enterprise-grade
                blockchain technologies hosted by the Linux Foundation
              </p>
            </div>
          </div>
        </div>
      </div>
      <Partners />

      <div className=" mx-auto mt-8 w-full max-w-7xl ">
        <div className="absolute right-0 -z-10 hidden h-fit w-[900px] overflow-hidden md:block">
          <div className="-mr-60 -mt-20 ml-auto bg-[#2B626F] pt-[53rem] md:w-[800px] md:rotate-[110deg] lg:w-[1100px] "></div>
        </div>
        <div className="grid grid-cols-1 gap-10 px-10 py-12 md:grid-cols-2 md:px-24 lg:px-0">
          <div>
            <Image
              alt=""
              src={"/images/Hyperledger_Projects.webp"}
              width={400}
              height={400}
              className="mx-auto h-auto w-full object-cover md:ml-auto"
              priority
            />
          </div>
          <div className="mx-auto my-auto flex h-fit w-fit flex-col gap-y-10 md:mx-0 md:ml-auto">
            <h1 className="text-center text-4xl font-semibold text-black md:text-white lg:text-6xl">
              Our assets
            </h1>
            <OurTokensDialog />
          </div>
        </div>
      </div>

      <div
        className=" flex w-screen justify-center bg-[white] pb-12 pt-32"
        id="about"
      >
        <About />
      </div>
    </div>
  );
}
