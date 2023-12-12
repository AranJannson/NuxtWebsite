// @ts-expect-error - bootstrap is not typed
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('bootstrap', bootstrap);
});
