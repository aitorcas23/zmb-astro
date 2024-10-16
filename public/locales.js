import homeEu from "./locales/eu/home.json" with { type: "json" };
import mediaEu from "./locales/eu/media.json" with { type: "json" };
import musiciansEu from "./locales/eu/musicians.json" with { type: "json" };
import newsEu from "./locales/eu/news.json" with { type: "json" };
import ourBandEu from "./locales/eu/ourBand.json" with { type: "json" };
import piecesEu from "./locales/eu/pieces.json" with { type: "json" };
import seasonsEu from "./locales/eu/seasons.json" with { type: "json" };
import uiEu from "./locales/eu/ui.json" with { type: "json" };

import homeEs from "./locales/es/home.json" with { type: "json" };
import mediaEs from "./locales/es/media.json" with { type: "json" };
import musiciansEs from "./locales/es/musicians.json" with { type: "json" };
import newsEs from "./locales/es/news.json" with { type: "json" };
import ourBandEs from "./locales/es/ourBand.json" with { type: "json" };
import piecesEs from "./locales/es/pieces.json" with { type: "json" };
import seasonsEs from "./locales/es/seasons.json" with { type: "json" };
import uiEs from "./locales/es/ui.json" with { type: "json" };

const locales = {
	eu: {
		home: homeEu,
		media: mediaEu,
		musicians: musiciansEu,
		news: newsEu,
		ourBand: ourBandEu,
		pieces: piecesEu,
		seasons: seasonsEu,
		ui: uiEu,
	},
	es: {
		home: homeEs,
		media: mediaEs,
		musicians: musiciansEs,
		news: newsEs,
		ourBand: ourBandEs,
		pieces: piecesEs,
		seasons: seasonsEs,
		ui: uiEs,
	},
};

export default locales;
