"use client";
import { type Token } from "@prisma/client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "~/components/ui/carousel";
import BuyNowBtn from "./buy-now-btn";
import { type Session } from "next-auth";
import { EditSheet } from "./edit-sheet";
import { CreateSheet } from "./create-sheet";
import MoveForward from "./move-forward";
import { useState } from "react";

type Args = {
  tokens: Token[];
  session: Session | null;
};

export default function TokensList({ tokens, session }: Args) {
  const isAdmin =
    session?.user.email ===
    ("alananisimov@gmail.com" || "georgejefrey89@gmail.com");
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div>
      <div className="hidden md:block">
        <MoveForward type="forward" api={api} />
        <MoveForward type="back" api={api} />
      </div>

      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="gap-x-4">
          {tokens.map((el, i) => {
            return (
              <CarouselItem
                className="-pl-4 flex flex-col bg-white md:basis-1/2 xl:basis-1/2"
                key={i}
              >
                <div className="flex w-full items-center bg-[#5AB5B8] px-10 py-6 text-4xl font-normal leading-[42.70px] tracking-tight text-neutral-800">
                  <span className="line-clamp-1">{el.name}</span>
                  <EditSheet token={el} isAdmin={isAdmin} />
                </div>
                <div className="h-full p-10">
                  <p className="text-2xl">{el.text}</p>
                  <div className="mt-8 flex flex-col items-center">
                    <Image
                      src={el.image_link}
                      alt=""
                      width={300}
                      height={300}
                      className="h-auto max-w-44"
                    />
                  </div>
                  <div className=" mt-12 max-h-12 w-auto">
                    <BuyNowBtn link={el.button_link} />
                  </div>
                </div>
              </CarouselItem>
            );
          })}
          {isAdmin && (
            <div className="flex items-center justify-center md:basis-1/2 lg:basis-1/3">
              <div className="ml-4 flex h-32  w-32 flex-col items-center  justify-center rounded-lg bg-white p-10">
                <CreateSheet />
              </div>
            </div>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
