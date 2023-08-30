import {z, defineCollection} from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    languages: z.array(z.string()),
    image: z.string().optional(),
    github: z.string(),
    publishDate: z.date(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'projects': projectCollection,
};
