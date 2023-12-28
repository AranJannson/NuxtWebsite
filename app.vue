<template>
  
  <img src="~/assets/images/favicon.png" style="display: none;" alt="">

  <a href="https://www.linkedin.com/in/aranjannson/" target="_blank">
    <div class="linkedInOverlay">
      <img src="https://img.icons8.com/ios-filled/1000/000000/linkedin.png"  alt=""/>
    </div>
  </a>

  <Header/>
  <NuxtPage/>
  <CookiesConsent />
  <Footer/>

</template>

<script setup lang="ts">
import CookiesConsent from "~/components/CookiesConsent.vue";

const route = useRoute();
const { t } = useI18n();


useHead({
  meta: [
    {property: 'og:title', content: `${route.meta.title} | AranJannson`},
    { property: 'og:description', content: `${route.meta.description}` },
    { property: 'og:image', content: `${route.meta.image}` },
    { property: 'og:type', content: 'website' },
    {property: 'og:image:height', content: `1079`},
    {property: 'og:image:width', content: `1920`},

    // { property: 'og:url', content: `https://aranjannson.com/${route.path}` },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:description', content: `${route.meta.description}` },
    { property: 'twitter:image', content: `${route.meta.image}` },
    // { property: 'twitter:url', content: `https://aranjannson.com/${route.path}` },
    ]
})
</script>
