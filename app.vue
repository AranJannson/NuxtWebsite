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
definePageMeta({
  layout: false,
  title: 'Aran Jannson',
  description: 'Aran Jannson\'s Portfolio Website',
  meta: [
    // Standard SEO
    { name: 'description', content: 'Aran Jannson\'s Portfolio Website' },
    { name: 'image', content: 'https://beta.aranjannson.com/favicon.png' }, // Use absolute URL

    // Open Graph / Facebook
    { property: 'og:title', content: 'Aran Jannson' },
    { property: 'og:description', content: 'Aran Jannson\'s Portfolio Website' },
    { property: 'og:image', content: 'https://beta.aranjannson.com/favicon.png' }, // Use absolute URL
    { property: 'og:url', content: 'https://beta.aranjannson.com' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Aran Jannson' },
    { name: 'twitter:description', content: 'Aran Jannson\'s Portfolio Website' },
    { name: 'twitter:image', content: 'https://beta.aranjannson.com/favicon.png' } // Use absolute URL
  ]
})
</script>




