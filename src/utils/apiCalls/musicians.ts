import { getCollection } from "./api";
import type { Media } from "./media";

export interface Musician {
	id: number;
	name: string;
	instrument?: string | null;
	image?: number | Media | null;
	updatedAt: string;
	createdAt: string;
}

export async function getMusicians(locale: string, limit?: number): Promise<Musician[]> {
	return await getCollection("musicians", locale, 1, undefined, limit);
}
