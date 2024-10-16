import { getAlt, getImage } from "./mediaProcessors";
import type { MediaEntry } from "./apiCalls/mediaEntries";

export function getMediaEntryThumbnail(size: "xs" | "s" | "m" | "l" | "xl", entry: MediaEntry) {
	switch (entry.mediaType) {
		case "YouTube":
			switch (size) {
				case "xs":
					return `https://img.youtube.com/vi/${entry.youtubeID}/mqdefault.jpg`;
				case "s":
					return `https://img.youtube.com/vi/${entry.youtubeID}/sddefault.jpg`;
				default:
					return `https://img.youtube.com/vi/${entry.youtubeID}/maxresdefault.jpg`;
			}
		case "Image":
			return getImage(size, entry.mediaUpload);
		default:
			return undefined;
	}
}

export function getMediaEntryAlt(entry: MediaEntry) {
	switch (entry.mediaType) {
		case "YouTube":
			return entry.title;
		case "Image":
			return getAlt(entry.mediaUpload) ?? entry.title;
		default:
			return entry.title;
	}
}
