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
            <div className="hidden md:block">
              <Image
                src={"/images/rectangle.svg"}
                alt=""
                width={420}
                height={60}
                className=""
              />
            </div>
            <div className=" md:hidden">
              <Image
                src={"/images/rectangle.svg"}
                alt=""
                width={320}
                height={50}
                className=""
              />
            </div>
            <h2 className="absolute -ml-4 -mt-0.5 inline-flex items-center justify-center gap-x-1 text-3xl font-semibold text-cyan-950 md:text-4xl">
              List of tokens
            </h2>
          </button>
        </div>
      </DialogTrigger>
      <DialogContent
        className={` font-sans sm:max-w-6xl md:px-36 ${space_mono.className}`}
      >
        <DialogHeader>
          <DialogTitle>Our tokens</DialogTitle>
          <DialogDescription>You can see our tokens here.</DialogDescription>
        </DialogHeader>
        <div className=" overflow-x-auto">
          <TokensList tokens={tokens} session={session} />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
