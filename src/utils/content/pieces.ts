import { getEntry } from "astro:content";
import { setDefaultTitle } from "./global";
import { baseLocale } from "@paraglide/runtime";

async function getPieceById(id: string, locale: string) {
	const piece = await getEntry("pieces", `${locale}/${id}`);
	if (!piece) return undefined;
	return await setDefaultTitle(piece, baseLocale);
}

export { getPieceById };
