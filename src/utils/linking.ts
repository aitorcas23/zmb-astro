import type { Locale } from "@paraglide/runtime.js";

type AbsolutePathname = `/${string}`;

const pathnames: Record<AbsolutePathname, Record<Locale, AbsolutePathname>> = {
	"/": {
		eu: "/",
		es: "/es",
	},
	"/gure-banda/historia": {
		eu: "/gure-banda/historia",
		es: "/es/nuestra-banda/historia",
	},
	"/gure-banda/partaideak": {
		eu: "/gure-banda/partaideak",
		es: "/es/nuestra-banda/miembros",
	},
	"/berriak": {
		eu: "/berriak",
		es: "/es/noticias",
	},
	"/denboraldiak": {
		eu: "/denboraldiak",
		es: "/es/temporadas",
	},
	"/mediateka": {
		eu: "/mediateka",
		es: "/es/mediateca",
	},
	"/mediateka/edukia": {
		eu: "/mediateka/edukia",
		es: "/es/mediateca/contenido",
	},
	"/mediateka/zerrendak": {
		eu: "/mediateka/zerrendak",
		es: "/es/mediateca/listas",
	},
};

// src/linking.ts
export function localizePathname(pathname: AbsolutePathname, locale: Locale) {
	if (pathnames[pathname]) {
		return pathnames[pathname][locale];
	}
	return pathname;
}
