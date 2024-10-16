import { getCollection, getDocument } from "./api";
import type { Media } from "./media";

export interface MediaEntry {
	id: number;
	title: string;
	slug: string;
	description?: string | null;
	mediaType?: ("YouTube" | "Image") | null;
	youtubeID?: string | null;
	mediaUpload?: number | Media | null;
	updatedAt: string;
	createdAt: string;
}

export async function getMediaEntries(locale: string, limit?: number): Promise<MediaEntry[]> {
	return getCollection("media-entries", locale, 1, undefined, limit);
}

export async function getMediaEntryById(
	id: number,
	locale: string,
	depth: number,
): Promise<MediaEntry | null> {
	const mediaEntry = await getDocument("media-entries", id, locale, depth);
	return mediaEntry ?? null;
}
