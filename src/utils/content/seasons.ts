import { getCollection, getEntry } from "astro:content";
import { setDefaultTitleSlug } from "./global";
import { sourceLanguageTag } from "@paraglide/runtime";

async function getSeasonByConcertId(concertId: string, locale: string) {
	return await getCollection(
		"seasons",
		({ id, data }) => id.startsWith(locale) && data.concerts.includes(concertId),
	)
		.then(async (s) => await Promise.all(s.map((m) => setDefaultTitleSlug(m, sourceLanguageTag))))
		.then((s) => s.filter((f) => f !== undefined))
		.then((s) => s.pop());
}

async function getSeasons(locale: string, limit?: number) {
	return await getCollection("seasons", ({ id }) => id.startsWith(locale))
		.then(async (s) => await Promise.all(s.map((m) => setDefaultTitleSlug(m, sourceLanguageTag))))
		.then((s) => s.filter((f) => f !== undefined))
		.then((n) =>
			n.sort((a, b) => {
				if (!a.data.year) return 1;
				if (!b.data.year) return -1;
				return Number(b.data.year?.slice(0, 4)) - Number(a.data.year?.slice(0, 4));
			}),
		)
		.then((n) => (limit === undefined ? n : n.slice(0, limit)));
}

async function getSeasonById(id: string, locale: string) {
	const season = await getEntry("seasons", `${locale}/${id}`);
	if (!season) return undefined;
	return setDefaultTitleSlug(season, sourceLanguageTag);
}

export { getSeasonByConcertId, getSeasons, getSeasonById };
