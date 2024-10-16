import locales from "./public/locales.js"

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLocale: "eu",
    locales: ["eu", "es"],
    namespaces: ["ui", "home", "ourBand", "seasons", "pieces", "news", "media"],
    i18nextServer: {
        resources: locales
    },
    i18nextServerPlugins: {
        fsBackend: null
    },
    routes: {
        es: {
            "gure-banda": {
                index: "nuestra-banda",
                historia: "historia",
                partaideak: "miembros"
            },
            berriak: {
                index: "noticias",
                "[id]": {
                    index: "[id]",
                    "[title]": "[title]"
                }
            },
            denboraldiak: {
                index: "temporadas",
                "[id]": {
                    index: "[id]",
                    "[title]": {
                        index: "[title]",
                        "[concertTitle]": "[concertTitle]"
                    }
                }
            },
            mediateka: {
                index: "mediateca",
                edukia: {
                    index: "contenido",
                    "[id]": {
                        index: "[id]",
                        "[title]": "[title]"
                    }
                },
                listak: {
                    index: "listas",
                    "[id]": {
                        index: "[id]",
                        "[title]": "[title]"
                    }
                }
            },
            "404": "404"
        }
    }
};
