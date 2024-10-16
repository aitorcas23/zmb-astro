import type { MediaEntry } from "./mediaEntries";

export interface Piece {
	id: number;
	title: string;
	author?: string | null;
	arrenger?: string | null;
	description?: string | null;
	media?: (number | null) | MediaEntry;
	updatedAt: string;
	createdAt: string;
}
