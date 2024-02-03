/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Copy } from "lucide-react";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import TokensList from "./tokens-list";
import { api } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import { space_mono } from "../layout";

export async function OurTokensDialog() {
  const tokens = await api.tokens.getTokens.query();
  const session = await getServerAuthSession();
  return (
    <Dialog>
      <DialogTrigger asChild className="mx-auto">
        <div className="flex flex-col items-center space-y-6" id="tokens">
          <button className={`relative flex w-fit items-center justify-center`}>
            <div className=" md:hidden">
              <Image
                src={"/images/rectangle.svg"}
                alt=""
                width={250}
                height={60}
                className=""
                priority
              />
            </div>
            <div className="hidden md:block">
              <Image
                src={"/images/rectangle.svg"}
                alt=""
                width={320}
                priority
                height={50}
                className=""
              />
            </div>
            <h2 className="absolute -ml-4 -mt-0.5 inline-flex items-center justify-center gap-x-1 text-2xl font-semibold text-cyan-950 md:text-3xl">
              List of tokens
            </h2>
          </button>
        </div>
      </DialogTrigger>
      <DialogContent
        className={` font-sans sm:max-w-6xl sm:rounded-none md:px-36 ${space_mono.className} `}
      >
        <DialogHeader>
          <DialogTitle className="text-3xl">Our tokens</DialogTitle>
          <DialogDescription className="text-xl">
            You can see our tokens here.
          </DialogDescription>
        </DialogHeader>
        <div className=" overflow-x-auto">
          <TokensList tokens={tokens} session={session} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
