import type { MediaEntry } from "./mediaEntries";
import { getCollection, getDocument } from "./api";

export interface MediaList {
	id: number;
	title: string;
	slug: string;
	description?: string | null;
	media?: (number | MediaEntry)[] | null;
	updatedAt: string;
	createdAt: string;
}

export async function getMediaLists(
	locale: string,
	depth: number,
	limit?: number,
): Promise<MediaList[]> {
	return await getCollection("media-lists", locale, depth, undefined, limit);
}

export async function getMediaListById(
	id: number,
	locale: string,
	depth: number,
): Promise<MediaList | undefined> {
	return await getDocument("media-lists", id, locale, depth);
}

export async function getMediaListsByEntryId(
	id: number,
	locale: string,
	limit?: number,
): Promise<MediaList[]> {
	return await getCollection("media-lists", locale, 0, undefined, limit, `[media][contains]=${id}`);
}
