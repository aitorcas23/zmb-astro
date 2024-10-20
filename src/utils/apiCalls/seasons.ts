import { getCollection, getDocument } from "./api";
import type { Concert } from "./concerts";
import type { Media } from "./media";

export interface Season {
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
	content_html?: string | null;
	years?: string | null;
	image?: number | Media | null;
	concerts?: (number | Concert)[] | null;
	updatedAt: string;
	createdAt: string;
}

export async function getSeasonByConcertId(
	locale: string,
	concertId: number,
): Promise<Season | null> {
	const seasons = await getCollection(
		"seasons",
		locale,
		0,
		undefined,
		1,
		`[concerts][contains]=${concertId}`,
	);
	if (seasons.length === 0) {
		return null;
	} else {
		return seasons[0];
	}
}

export async function getSeasons(locale: string, limit?: number): Promise<Season[]> {
	return getCollection("seasons", locale, 1, undefined, limit);
}

export async function getSeasonById(
	id: number,
	locale: string,
	depth: number,
): Promise<Season | undefined> {
	return getDocument("seasons", id, locale, depth);
}
