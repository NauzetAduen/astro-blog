import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		isFeatured: z.boolean()
		
	}),
});
const projects = defineCollection({
	schema: z.object({
		title:z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),

	})
})

export const collections = { blog, projects };
