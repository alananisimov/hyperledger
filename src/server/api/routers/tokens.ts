import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

// Define the shape of a card
const cardSchema = z.object({
  name: z.string().min(1),
  image_link: z.string(),
  button_link: z.string(),
  text: z.string(),
});

interface CardInput {
  name: string;
  image_link: string;
  button_link: string;
  text: string;
}

export const tokenRouter = createTRPCRouter({
  createToken: protectedProcedure
    .input(cardSchema)
    .mutation(async ({ ctx, input }): Promise<CardInput> => {
      // Simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const createdCard = await ctx.db.token.create({
        data: {
          name: input.name,
          image_link: input.image_link,
          button_link: input.button_link,
          text: input.text,
          createdById: ctx.session.user.id,
        },
      });

      return createdCard;
    }),

  deleteToken: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }): Promise<void> => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await ctx.db.token.delete({
        where: {
          id: input.id,
        },
      });
    }),

  getTokens: publicProcedure.query(({ ctx }) => {
    return ctx.db.token.findMany({});
  }),

  updateToken: protectedProcedure
    .input(z.object({ id: z.number(), data: cardSchema }))
    .mutation(async ({ ctx, input }): Promise<CardInput> => {
      // Simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const updatedCard = await ctx.db.token.update({
        where: { id: input.id },
        data: input.data,
      });

      return updatedCard;
    }),
});
