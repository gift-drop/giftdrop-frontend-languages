// src/utils/translation/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import zhCN from "./zh-CN.json";
import zhTW from "./zh-TW.json";
import ja from "./ja.json";
import ko from "./ko.json";
import es from "./es.json";
import fr from "./fr.json";
import de from "./de.json";
import pt from "./pt.json";
import ru from "./ru.json";
import hi from "./hi.json";
import ar from "./ar.json";
import it from "./it.json";
import nl from "./nl.json";
import sv from "./sv.json";
import da from "./da.json";
import fi from "./fi.json";
import no from "./no.json";
import pl from "./pl.json";
import tr from "./tr.json";
import th from "./th.json";
import vi from "./vi.json";
import ms from "./ms.json";
import id from "./id.json";
import fil from "./fil.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    "en-US": { translation: en },
    "en-GB": { translation: en },
    "en-AU": { translation: en },
    "en-CA": { translation: en },
    zh: { translation: zhCN },
    "zh-CN": { translation: zhCN },
    "zh-TW": { translation: zhTW },
    "zh-HK": { translation: zhTW },
    "zh-SG": { translation: zhCN },
    ja: { translation: ja },
    ko: { translation: ko },
    es: { translation: es },
    "es-ES": { translation: es },
    "es-MX": { translation: es },
    "es-AR": { translation: es },
    fr: { translation: fr },
    "fr-FR": { translation: fr },
    "fr-CA": { translation: fr },
    de: { translation: de },
    "de-DE": { translation: de },
    "de-AT": { translation: de },
    "de-CH": { translation: de },
    pt: { translation: pt },
    "pt-PT": { translation: pt },
    "pt-BR": { translation: pt },
    ru: { translation: ru },
    hi: { translation: hi },
    ar: { translation: ar },
    "ar-SA": { translation: ar },
    "ar-EG": { translation: ar },
    it: { translation: it },
    nl: { translation: nl },
    sv: { translation: sv },
    da: { translation: da },
    fi: { translation: fi },
    no: { translation: no },
    pl: { translation: pl },
    tr: { translation: tr },
    th: { translation: th },
    vi: { translation: vi },
    ms: { translation: ms },
    id: { translation: id },
    fil: { translation: fil },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback to English if translation not found
  interpolation: {
    escapeValue: false, // React already handles XSS
  },
});

export default i18n;
