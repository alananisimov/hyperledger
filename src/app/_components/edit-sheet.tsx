/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { MaterialSymbolsEditOutlineRounded } from "./icons/edit";
import { type Token } from "@prisma/client";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Delete } from "lucide-react";

type formData = {
  name: string;
  text: string;
  imageLink: string;
  buttonLink: string;
};

export function EditSheet({
  token,
  isAdmin,
}: {
  token: Token;
  isAdmin: boolean;
}) {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: token.name,
      text: token.text,
      imageLink: token.image_link,
      buttonLink: token.button_link,
    },
  });

  const updateToken = api.tokens.updateToken.useMutation({
    onSuccess: () => {
      toast("Successfully updated token");
      router.refresh();
    },
    onError: (e: any) => {
      toast(`${e.message}`);
    },
  });
  const deleteToken = api.tokens.deleteToken.useMutation({
    onSuccess: () => {
      toast("Successfully deleted token");
      router.refresh();
    },
    onError: (e: any) => {
      toast(`${e.message}`);
    },
  });
  const onSubmit = async (data: formData) => {
    console.log(data);

    updateToken.mutate({
      data: {
        name: data.name,
        text: data.text,
        image_link: data.imageLink,
        button_link: data.buttonLink,
      },
      id: token.id,
    });
  };

  return (
    <Sheet>
      <div className="ml-auto inline-flex w-fit gap-x-2">
        {isAdmin && (
          <SheetTrigger asChild>
            <button
              type="button"
              disabled={updateToken.isLoading}
              className="ml-auto flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-lg border border-gray-500 bg-white/75 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50"
            >
              <MaterialSymbolsEditOutlineRounded className="h-4 w-4 flex-shrink-0 text-gray-500" />
            </button>
          </SheetTrigger>
        )}
        {isAdmin && (
          <button
            type="button"
            onClick={() => deleteToken.mutate({ id: token.id })}
            className="ml-auto flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-lg border border-gray-500 bg-white/75 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50"
          >
            <Delete className="h-4 w-4 flex-shrink-0 text-gray-500" />
          </button>
        )}
      </div>

      <SheetContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SheetHeader>
            <SheetTitle>Edit token</SheetTitle>
            <SheetDescription>
              Make changes to your token here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input {...register("name")} id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Supply
              </Label>
              <Input
                {...register("text")}
                id="username"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageLink" className="text-right">
                Image link
              </Label>
              <Input
                {...register("imageLink")}
                id="imageLink"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="buttonLink" className="text-right">
                Button link
              </Label>
              <Input
                {...register("buttonLink")}
                id="buttonLink"
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" variant={"outline"}>
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
