import { getEntry } from "astro:content";
import { setDefaultTitle } from "./global";
import { sourceLanguageTag } from "@paraglide/runtime";

async function getPieceById(id: string, locale: string) {
	const piece = await getEntry("pieces", `${locale}/${id}`);
	if (!piece) return undefined;
	return await setDefaultTitle(piece, sourceLanguageTag);
}

export { getPieceById };
