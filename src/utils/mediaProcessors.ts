import { type Media } from "./apiCalls/media";

export function getImage(
	size: "xs" | "s" | "m" | "l" | "xl",
	collection: number | Media | null | undefined,
) {
	if (!collection || typeof collection === "number") return undefined;
	const sizes = collection.sizes;
	if (!sizes) return undefined;
	const url = sizes[size]?.url;
	return url ?? undefined;
}

export function getAlt(collection: number | Media | null | undefined) {
	if (!collection || typeof collection === "number") return undefined;
	return collection.alt ?? undefined;
}
