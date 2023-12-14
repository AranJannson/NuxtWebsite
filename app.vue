<template>

  <a href="https://www.linkedin.com/in/aranjannson/" target="_blank">
    <div class="linkedInOverlay">
      <img src="https://img.icons8.com/ios-filled/1000/000000/linkedin.png"  alt=""/>
    </div>
  </a>

  <Header/>
  <transition name="fade" mode="out-in">
  <NuxtPage/>
  </transition>
  <Footer/>


</template>


<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>