import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const components = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/components" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.date().optional(),
    published: z.boolean().default(true),
  }),
});

const sections = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/sections" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    published: z.boolean().default(true),
  }),
});

const templates = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/templates" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    price: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  components,
  sections,
  templates,
  docs,
};
