import { type Media } from "./media";
import { type Piece } from "./pieces";
import { getCollection, getDocument } from "./api";

export interface Concert {
	id: number;
	title: string;
	slug: string;
	description?: string | null;
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
	date?: string | null;
	image?: number | Media | null;
	place?: string | null;
	placeUrl?: string | null;
	ticketLink?: string | null;
	pieces?: (number | Piece)[] | null;
	content_html?: string | null;
	updatedAt: string;
	createdAt: string;
}

export async function getNextConcerts(locale: string, limit?: number): Promise<Concert[]> {
	const today = new Date();
	const date = today.toLocaleString("en-US", { timeZone: "Europe/Madrid" });
	return getCollection("concerts", locale, 1, "date", limit, `[date][greater_than]=${date}`);
}

export async function getConcertById(
	id: number,
	locale: string,
	depth: number,
): Promise<Concert | undefined> {
	return await getDocument("concerts", id, locale, depth);
}
