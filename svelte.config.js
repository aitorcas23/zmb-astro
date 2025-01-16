import { vitePreprocess } from "@astrojs/svelte";
import { enhancedImages } from "@sveltejs/enhanced-img";

export default {
	preprocess: vitePreprocess(),
	plugins: [enhancedImages()],
};
