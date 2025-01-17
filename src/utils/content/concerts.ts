import { getCollection, getEntry } from "astro:content";
import { setDefaultTitleSlug } from "./global";
import { sourceLanguageTag } from "@paraglide/runtime";

async function getNextConcerts(locale: string, limit?: number) {
	return await getCollection(
		"concerts",
		({ id, data }) => id.startsWith(locale) && !data.done,
	)
		.then(async (c) => await Promise.all(c.map((m) => setDefaultTitleSlug(m, sourceLanguageTag))))
		.then((c) => c.filter((f) => f !== undefined))
		.then((c) =>
			c.sort((a, b) => {
				if (!a.data.date) return 1;
				if (!b.data.date) return -1;
				return a.data.date!.valueOf() - b.data.date!.valueOf();
			}),
		)
		.then((c) => (limit === undefined ? c : c.slice(0, limit)));
}

async function getConcerts(locale: string, limit?: number) {
	return await getCollection("concerts", ({ id }) => id.startsWith(locale))
		.then(async (c) => await Promise.all(c.map((m) => setDefaultTitleSlug(m, sourceLanguageTag))))
		.then((c) => c.filter((f) => f !== undefined))
		.then((c) => c.sort((a, b) => b.data.date!.valueOf() - a.data.date!.valueOf()))
		.then((c) => (limit === undefined ? c : c.slice(0, limit)));
}

async function getConcertById(id: string, locale: string) {
	const concert = await getEntry("concerts", `${locale}/${id}`);
	if (!concert) return undefined;
	return await setDefaultTitleSlug(concert, sourceLanguageTag);
}

export { getNextConcerts, getConcerts, getConcertById };
