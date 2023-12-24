<template>
  <div class="header">
    <div class="text-black position-absolute top-0 p-4" style="z-index: 99; right: 0;">
      <form>
        <select v-model="locale" class="bg-white border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-blue-500">
          <option value="en">en</option>
          <option value="tr">tr</option>
          <option value="el">el</option>
        </select>
      </form>
    </div>

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
          <NuxtLink class="gradient-text" to="/">{{ $t('home') }}</NuxtLink>
        </li>
        <li style="margin: 0 10px;">
          <NuxtLink class="gradient-text" to="/projects">{{ $t('projects') }}</NuxtLink>
        </li>
        <li style="margin: 0 10px;">
          <NuxtLink class="gradient-text" to="/contact">{{ $t('contact') }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>
