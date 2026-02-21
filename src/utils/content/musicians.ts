import { getCollection, getEntry } from "astro:content";
import { setDefaultName } from "./global";
import { baseLocale } from "@paraglide/runtime";

async function getMusicians(locale: string, limit?: number) {
	return await getCollection("musicians", ({ id }) => id.startsWith(locale))
		.then(async (l) => await Promise.all(l.map((m) => setDefaultName(m, baseLocale))))
		.then((l) => l.filter((f) => f !== undefined))
		.then((l) => l.sort((a, b) => a.data.name.localeCompare(b.data.name)))
		.then((l) => (limit === undefined ? l : l.slice(0, limit)));
}

async function getMusicianById(id: string, locale: string) {
	const musician = await getEntry("musicians", `${locale}/${id}`);
	if (!musician) return undefined;
	return musician;
}

export { getMusicians, getMusicianById };
