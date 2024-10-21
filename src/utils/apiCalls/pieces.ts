import type { MediaEntry } from "./mediaEntries";

export interface Piece {
	id: number;
	title: string;
	author?: string | null;
	arranger?: string | null;
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
	media?: (number | null) | MediaEntry;
	updatedAt: string;
	createdAt: string;
}
