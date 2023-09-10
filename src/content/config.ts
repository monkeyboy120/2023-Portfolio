import {z, defineCollection} from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    languages: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    github: z.string(),
    publishDate: z.date(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'projects': projectCollection,
};
