import en from './locales/en.json';
import tr from './locales/tr.json';
import el from './locales/el.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en,
        tr,
        el,
    }
}))
