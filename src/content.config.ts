import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      statement: z.string(),
      client: z.string(),
      role: z.string(),
      year: z.string(),
      scope: z.string(),
      hero: image(),
      heroAlt: z.string(),
      next: z.string().optional(), // slug of the next project in data/projects.ts
      brief: z.object({ heading: z.string(), body: z.array(z.string()) }),
      listen: z.object({ heading: z.string(), body: z.array(z.string()), caption: z.string() }),
      map: z.object({ heading: z.string(), body: z.array(z.string()), caption: z.string() }),
      sketch: z.object({ heading: z.string(), body: z.array(z.string()), captions: z.tuple([z.string(), z.string()]) }),
      test: z.object({
        heading: z.string(),
        body: z.array(z.string()),
        caption: z.string(),
        changes: z.array(z.object({ found: z.string(), changed: z.string() })),
      }),
      ship: z.object({ heading: z.string(), body: z.array(z.string()), captions: z.array(z.string()) }),
      impact: z.object({
        heading: z.string(),
        figures: z.array(z.object({ value: z.string(), label: z.string() })),
        note: z.string().optional(),
      }),
      lookingBack: z.object({ heading: z.string(), body: z.array(z.string()) }),
    }),
});

export const collections = { cases };
