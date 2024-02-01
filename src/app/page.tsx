/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import background from "~/../public/images/background.png";
import Partners from "./_components/partners";
import TokensList from "./_components/tokens-list";
import { space_mono } from "./layout";
import About from "./_components/about";
export default async function Home() {
  noStore();
  const tokens = await api.tokens.getTokens.query();
  const session = await getServerAuthSession();
  console.log(session);
  return (
    <div className={`${space_mono.className} flex flex-col`}>
      <div className="relative isolate h-screen ">
        <Image
          src={background}
          alt=""
          className="absolute -z-10 h-full w-auto object-cover"
        />

        <div className="mx-auto w-full px-6 pt-14 lg:px-8 " id="benefits">
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
      <div
        className=" relative mx-auto my-48 h-full w-full px-6 md:px-16 lg:my-72 lg:px-36"
        id="tokens"
      >
        <div className="absolute -left-0 -top-56 -z-10 w-screen overflow-hidden py-24 ">
          <div className="-ml-12  w-[calc(100vw+100px)] rotate-[174deg] bg-[#2B626F] px-10 py-96 "></div>
        </div>
        <TokensList tokens={tokens} session={session} />
      </div>
      <div className="flex w-screen justify-center" id="about">
        <About />
      </div>
    </div>
  );
}
