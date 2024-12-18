// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

import vercel from "@astrojs/vercel/serverless";

import svelte from "@astrojs/svelte";

import paraglide from "@inlang/paraglide-astro";

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
		astroI18next(),
		svelte(),
		paraglide({
			project: "./project.inlang",
			outdir: "./src/paraglide",
		}),
	],
	output: "server",
	adapter: vercel(),
});
