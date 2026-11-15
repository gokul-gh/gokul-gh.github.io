import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.string().default('Internal company project'),
    tech: z.array(z.string()).default([]),
    description: z.string(),
    image: z.string().optional(),
    date: z.union([z.string(), z.number()]).optional(),
  }),
});

export const collections = { projects };