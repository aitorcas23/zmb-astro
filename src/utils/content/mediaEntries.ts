import { getCollection, getEntry } from "astro:content";
import { setDefaultTitleSlug } from "./global";
import { sourceLanguageTag } from "@paraglide/runtime";

async function getMediaEntries(locale: string, limit?: number) {
	return await getCollection("mediaEntries", ({ id }) => id.startsWith(locale))
		.then(async (e) => await Promise.all(e.map((m) => setDefaultTitleSlug(m, sourceLanguageTag))))
		.then((e) => e.filter((f) => f !== undefined))
		.then((e) => e.sort((a, b) => b.data.date_created.valueOf() - a.data.date_created.valueOf()))
		.then((e) => (limit === undefined ? e : e.slice(0, limit)));
}

async function getMediaEntryById(id: string, locale: string) {
	const mediaEntry = await getEntry("mediaEntries", `${locale}/${id}`);
	if (!mediaEntry) return undefined;
	return await setDefaultTitleSlug(mediaEntry, sourceLanguageTag);
}

export { getMediaEntries, getMediaEntryById };
