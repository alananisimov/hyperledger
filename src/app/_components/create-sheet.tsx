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
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Plus } from "lucide-react";

type formData = {
  name: string;
  text: string;
  imageLink: string;
  buttonLink: string;
};

export function CreateSheet() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "Your token name",
      text: "Your token supply",
      imageLink: "https://",
      buttonLink: "https://",
    },
  });

  const createToken = api.tokens.createToken.useMutation({
    onSuccess: () => {
      toast("Successfully created token");
      router.refresh();
    },
    onError: (e: any) => {
      toast(`${e.message}`);
    },
  });
  const onSubmit = async (data: formData) => {
    console.log(data);

    createToken.mutate({
      name: data.name,
      text: data.text,
      image_link: data.imageLink,
      button_link: data.buttonLink,
    });
  };

  return (
    <Sheet>
      <div className=" inline-flex w-fit gap-x-2">
        <SheetTrigger asChild>
          <button
            type="button"
            disabled={createToken.isLoading}
            className="ml-auto flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-lg border border-gray-500 bg-white/75 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50"
          >
            <Plus className="h-10 w-10 flex-shrink-0 text-gray-500" />
          </button>
        </SheetTrigger>
      </div>

      <SheetContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SheetHeader>
            <SheetTitle>Create token</SheetTitle>
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
                Create
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
