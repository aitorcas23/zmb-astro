// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import paraglide from "@inlang/paraglide-astro";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		paraglide({
			project: "./project.inlang",
			outdir: "./src/paraglide",
		}),
	],
});
