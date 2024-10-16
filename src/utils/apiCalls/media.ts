export interface Media {
	id: number;
	alt?: string | null;
	updatedAt: string;
	createdAt: string;
	url?: string | null;
	filename?: string | null;
	mimeType?: string | null;
	filesize?: number | null;
	width?: number | null;
	height?: number | null;
	focalX?: number | null;
	focalY?: number | null;
	sizes?: {
		xs?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		s?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		m?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		l?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
		xl?: {
			url?: string | null;
			width?: number | null;
			height?: number | null;
			mimeType?: string | null;
			filesize?: number | null;
			filename?: string | null;
		};
	};
}
