import { getCollection, getDocument } from "./api";
import { type Media } from "./media";

interface News {
	id: number;
	title: string;
	slug: string;
	author?: string | null;
	description?: string | null;
	image?: number | Media | null;
	content?: {
		root: {
			type: string;
			children: {
				type: string;
				version: number;
				[k: string]: unknown;
			}[];
			direction: ("ltr" | "rtl") | null;
			format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
			indent: number;
			version: number;
		};
		[k: string]: unknown;
	} | null;
	content_html?: string | null;
	updatedAt: string;
	createdAt: string;
}

export async function getNews(locale: string, limit?: number): Promise<News[]> {
	return getCollection("news", locale, 1, undefined, limit);
}

export async function getNewsById(id: number, locale: string, depth: number): Promise<News | null> {
	const news = await getDocument("news", id, locale, depth);
	return news ?? null;
}
