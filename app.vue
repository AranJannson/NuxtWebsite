<template>
  
  <img src="~/assets/images/favicon.png" style="display: none;" alt="">

  <a href="https://www.linkedin.com/in/aranjannson/" target="_blank">
    <div class="linkedInOverlay">
      <img src="https://img.icons8.com/ios-filled/1000/000000/linkedin.png"  alt=""/>
    </div>
  </a>

  <Header/>
  <NuxtPage/>
  <Footer/>

</template>

<script setup lang="ts">
const route = useRoute()

useHead({
  meta: [
    { property: 'og:description', content: `${route.meta.description}` },
    { property: 'og:image', content: `${route.meta.image}` },
    { property: 'og:type', content: 'website' },
    // { property: 'og:url', content: `https://aranjannson.com/${route.path}` },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:description', content: `${route.meta.description}` },
    { property: 'twitter:image', content: `${route.meta.image}` },
    // { property: 'twitter:url', content: `https://aranjannson.com/${route.path}` },
    ]
})
</script>
