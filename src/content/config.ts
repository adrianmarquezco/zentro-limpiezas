import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.string(),
    dateModified: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    lang: z.enum(['es', 'gl']).default('es'),
    draft: z.boolean().default(false),
  }),
});

const blogGlCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.string(),
    dateModified: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    lang: z.enum(['es', 'gl']).default('gl'),
    draft: z.boolean().default(false),
    slugEs: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  'blog-gl': blogGlCollection,
};
