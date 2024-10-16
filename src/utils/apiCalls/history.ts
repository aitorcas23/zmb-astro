import { getGlobal } from "./api";

export interface BandHistory {
	id: number;
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
	updatedAt?: string | null;
	createdAt?: string | null;
}

export async function getBandHistory(locale: string): Promise<BandHistory | undefined> {
	return await getGlobal("band-history", locale, 0);
}
