import { getCollection, getEntry } from "astro:content";
import { setDefaultTitleSlug } from "./global";
import { baseLocale } from "@paraglide/runtime";

async function getMediaLists(locale: string, limit?: number) {
	return await getCollection("mediaLists", ({ id }) => id.startsWith(locale))
		.then(async (l) => await Promise.all(l.map((m) => setDefaultTitleSlug(m, baseLocale))))
		.then((l) => l.filter((f) => f !== undefined))
		.then((l) => l.sort((a, b) => b.data.date_created.valueOf() - a.data.date_created.valueOf()))
		.then((l) => (limit === undefined ? l : l.slice(0, limit)));
}

async function getMediaListsByEntryId(entryId: string, locale: string, limit?: number) {
	return await getCollection(
		"mediaLists",
		({ id, data }) => id.startsWith(locale) && data.media_entries.includes(entryId),
	)
		.then(async (l) => await Promise.all(l.map((m) => setDefaultTitleSlug(m, baseLocale))))
		.then((l) => l.filter((f) => f !== undefined))
		.then((l) => l.sort((a, b) => b.data.date_created.valueOf() - a.data.date_created.valueOf()))
		.then((l) => (limit === undefined ? l : l.slice(0, limit)));
}

async function getMediaListById(id: string, locale: string) {
	const mediaList = await getEntry("mediaLists", `${locale}/${id}`);
	if (!mediaList) return undefined;
	return setDefaultTitleSlug(mediaList, baseLocale);
}

export { getMediaLists, getMediaListsByEntryId, getMediaListById };
