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
  meta: [{ property: 'og:title', content: `${route.meta.title} | AranJannson` },
    { property: 'og:description', content: `${route.meta.description}` },
    { property: 'og:image', content: `${route.meta.image}` },
    ]
})
</script>




