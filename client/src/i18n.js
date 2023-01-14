import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";


i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: "/i18n/{{ns}}/{{lng}}.json",
        },
        fallbackLng: "en",
        debug: false,
        ns: [
            "navbar",
            "feature",
            "latest_edition",
            "contact_us",
            "editorial_team",
            "for_authors",
            "about",
        ],

        interpolation: {
            espaceValue: false,
            formatSeparator: ",",
        },
        react: {
            wait: true,
        },
    });

export default i18n;