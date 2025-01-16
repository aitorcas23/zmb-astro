import { getCollection } from "astro:content";
import { setDefaultName } from "./global";
import { sourceLanguageTag } from "@paraglide/runtime";

async function getMusicians(locale: string, limit?: number) {
	return await getCollection("musicians", ({ id }) => id.startsWith(locale))
		.then(async (l) => await Promise.all(l.map((m) => setDefaultName(m, sourceLanguageTag))))
		.then((l) => l.filter((f) => f !== undefined))
		.then((l) => l.sort((a, b) => b.data.date_created.valueOf() - a.data.date_created.valueOf()))
		.then((l) => (limit === undefined ? l : l.slice(0, limit)));
}

export { getMusicians };
