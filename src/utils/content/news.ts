import { getCollection } from "astro:content";
import { setDefaultTitleSlug } from "./global";
import { sourceLanguageTag } from "@paraglide/runtime";

async function getNews(locale: string, limit?: number) {
	return await getCollection("news", ({ id }) => id.startsWith(locale))
		.then(async (n) => await Promise.all(n.map((m) => setDefaultTitleSlug(m, sourceLanguageTag))))
		.then((s) => s.filter((f) => f !== undefined))
		.then((n) => n.sort((a, b) => b.data.date_created.valueOf() - a.data.date_created.valueOf()))
		.then((n) => (limit === undefined ? n : n.slice(0, limit)));
}

export { getNews };
