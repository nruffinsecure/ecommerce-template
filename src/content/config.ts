import { defineCollection, z } from 'astro:content';

const productCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'products': productCollection,
};
