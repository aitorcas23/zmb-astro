// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import paraglide from "@inlang/paraglide-astro";

import i18nRouteGen from "astro-i18n-route-gen";

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: ["eu", "es"],
		defaultLocale: "eu",
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		paraglide({
			project: "./project.inlang",
			outdir: "./src/paraglide",
		}),
		i18nRouteGen({
			enabled: false,
			routes: {
				"index.astro": {},
				berriak: {
					es: "noticias",
					children: {
						"index.astro": {},
						"[id]": {
							children: {
								"index.astro": {},
								"[slug].astro": {},
							},
						},
					},
				},
				denboraldiak: {
					es: "temporadas",
					children: {
						"index.astro": {},
						"[id]": {
							children: {
								"index.astro": {},
								"[slug]": {
									children: {
										"index.astro": {},
										"[concertId]": {
											children: {
												"index.astro": {},
												"[concertSlug].astro": {},
											},
										},
									},
								},
							},
						},
					},
				},
				"gure-banda": {
					es: "nuestra-banda",
					children: {
						"historia.astro": {},
						"partaideak.astro": {
							es: "miembros.astro",
						},
					},
				},
				mediateka: {
					es: "mediateca",
					children: {
						"index.astro": {},
						edukia: {
							es: "contenido",
							children: {
								"index.astro": {},
								"[id]": {
									children: {
										"index.astro": {},
										"[slug].astro": {},
									},
								},
							},
						},
						listak: {
							es: "listas",
							children: {
								"index.astro": {},
								"[id]": {
									children: {
										"index.astro": {},
										"[slug].astro": {},
									},
								},
							},
						},
					},
				},
			},
		}),
	],
});
