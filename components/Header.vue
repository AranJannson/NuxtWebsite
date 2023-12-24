<template>
  <div class="header">
    <div class="slanted"></div>
    <div class="header-content">
<!--      <h2 class="text-center text-white font-sans font-semibold text-6xl pt-8">-->
<!--        <NuxtLink class="text-white no-underline text-6xl" to="/">Aran Jannson</NuxtLink>-->
<!--      </h2>-->
      <NuxtLink to="/" style="padding: 0; margin: 0;">
        <img src="/favicon.png" alt="Aran Jannson Logo" class="mx-auto" style="width: 120px;">
      </NuxtLink>


      <ul class="navBarList" style="list-style: none; display: flex; justify-content: center; padding: 0 0 30px;">
        <li style="margin: 0 10px;">
          <NuxtLink class="gradient-text" to="/">Home</NuxtLink>
        </li>
        <li style="margin: 0 10px;">
          <NuxtLink class="gradient-text" to="/projects">Projects</NuxtLink>
        </li>
        <li style="margin: 0 10px;">
          <NuxtLink class="gradient-text" to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
