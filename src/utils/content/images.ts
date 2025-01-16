const images = import.meta.glob<{ default: ImageMetadata }>("/src/content/images/*.{jpeg,jpg,png}");

function getImage(path: string) {
	return images[path]();
}

export { getImage };
