<template>
  <div class="header">
    <div class="slanted"></div>
    <div class="header-content">
      <h2 class="text-center text-white font-sans font-semibold text-6xl pt-8">
        <a class="text-white no-underline text-6xl" href="/">Aran Jannson</a>
      </h2>
      <br>
      <ul class="navBarList" style="list-style: none; padding: 0; display: flex; justify-content: center;">
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
// Your TypeScript logic goes here
</script>
