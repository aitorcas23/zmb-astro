import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

function getId(entry: string) {
	return entry.split(".")[0];
}

const seasons = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/seasons",
		generateId: ({ entry }) => getId(entry),
	}),
	schema: z.object({
		title: z.string().optional(),
		slug: z.string().optional(),
		description: z.string().optional(),
		year: z.string().optional(),
		image: z.string().optional(),
		image_description: z.string().optional(),
		concerts: z.array(z.string()).optional().default([]),
		date_created: z.date(),
	}),
});

const concerts = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/concerts",
		generateId: ({ entry }) => getId(entry),
	}),
	schema: z.object({
		title: z.string().optional(),
		slug: z.string().optional(),
		description: z.string().optional(),
		date: z.date().optional(),
		image: z.string().optional(),
		image_description: z.string().optional(),
		place: z.string().optional(),
		place_url: z.string().optional(),
		ticket_purchase_link: z.string().optional(),
		pieces: z.array(z.string()).optional().default([]),
		date_created: z.date(),
	}),
});

const pieces = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/pieces",
		generateId: ({ entry }) => getId(entry),
	}),
	schema: z.object({
		title: z.string().optional(),
		author: z.string().optional(),
		arranger: z.string().optional(),
		media_entry: z.string().optional(),
		date_created: z.date(),
	}),
});

const news = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/news",
		generateId: ({ entry }) => getId(entry),
	}),
	schema: z.object({
		title: z.string().optional(),
		slug: z.string().optional(),
		author: z.string().optional(),
		description: z.string().optional(),
		image: z.string().optional(),
		image_description: z.string().optional(),
		date_created: z.date(),
	}),
});

const musicians = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/musicians",
		generateId: ({ entry }) => getId(entry),
	}),
	schema: z.object({
		name: z.string().optional(),
		instrument: z.string().optional(),
		image: z.string().optional(),
		image_description: z.string().optional(),
		date_created: z.date(),
	}),
});

const mediaEntries = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/media_entries",
		generateId: ({ entry }) => getId(entry),
	}),
	schema: z.object({
		title: z.string().optional(),
		slug: z.string().optional(),
		description: z.string().optional(),
		media_type: z.enum(["youtube", "image"]),
		youtube_id: z.string().optional(),
		image: z.string().optional(),
		image_description: z.string().optional(),
		date_created: z.date(),
	}),
});

const mediaLists = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/media_lists",
		generateId: ({ entry }) => getId(entry),
	}),
	schema: z.object({
		title: z.string().optional(),
		slug: z.string().optional(),
		description: z.string().optional(),
		media_entries: z.array(z.string()).optional().default([]),
		date_created: z.date(),
	}),
});

const esBandHistory = defineCollection({
	loader: glob({
		pattern: "band_history.es.md",
		base: "./src/content/pages",
	}),
});

const euBandHistory = defineCollection({
	loader: glob({
		pattern: "band_history.eu.md",
		base: "./src/content/pages",
	}),
});

export const collections = {
	seasons,
	concerts,
	pieces,
	news,
	musicians,
	mediaEntries,
	mediaLists,
	esBandHistory,
	euBandHistory,
};
