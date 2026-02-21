// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import { paraglideVitePlugin } from "@inlang/paraglide-js";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [
			paraglideVitePlugin({
				project: "./project.inlang",
				outdir: "./src/paraglide",
			}),
		],
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
