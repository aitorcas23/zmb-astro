import { getEntry } from "astro:content";
import { type DataEntryMap } from "astro:content";

function idToNumber(id: string) {
	const rhs = id.split("/")[1];
	if (rhs == "id") {
		return 1;
	} else {
		return Number(rhs.slice(3)) + 1;
	}
}

type EntryTitleSlug = {
	id: string;
	collection: keyof DataEntryMap;
	data: { title?: string; slug?: string };
};
async function setDefaultTitleSlug<T extends EntryTitleSlug>(entry: T, locale: string) {
	const id = entry.id.slice(3);
	const defaultEntry = await getEntry(entry.collection, `${locale}/${id}`);
	if (!defaultEntry || !("title" in defaultEntry.data) || !("slug" in defaultEntry.data)) {
		return undefined;
	}
	return {
		...entry,
		data: {
			...entry.data,
			title: entry.data.title ?? defaultEntry.data.title!,
			slug: entry.data.slug ?? defaultEntry.data.slug!,
		},
	};
}

type EntryName = {
	id: string;
	collection: keyof DataEntryMap;
	data: { name?: string };
};
async function setDefaultName<T extends EntryName>(entry: T, locale: string) {
	const id = entry.id.slice(3);
	const defaultEntry = await getEntry(entry.collection, `${locale}/${id}`);
	if (!defaultEntry || !("name" in defaultEntry.data)) {
		return undefined;
	}
	return {
		...entry,
		data: {
			...entry.data,
			name: entry.data.name ?? defaultEntry.data.name!,
		},
	};
}

type EntryTitle = {
	id: string;
	collection: keyof DataEntryMap;
	data: { title?: string };
};
async function setDefaultTitle<T extends EntryTitle>(entry: T, locale: string) {
	const id = entry.id.slice(3);
	const defaultEntry = await getEntry(entry.collection, `${locale}/${id}`);
	if (!defaultEntry || !("title" in defaultEntry.data)) {
		return undefined;
	}
	return {
		...entry,
		data: {
			...entry.data,
			title: entry.data.title ?? defaultEntry.data.title!,
		},
	};
}

export { idToNumber, setDefaultTitleSlug, setDefaultName, setDefaultTitle };
