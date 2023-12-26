<template>
  <div class="header">
    <div class="text-black position-absolute top-0 p-4" style="z-index: 99; right: 0;">
      <select @change="changeLocale" class="bg-white border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-blue-500">
        <option value="en">en</option>
        <option value="tr">tr</option>
        <option value="el">el</option>
      </select>
    </div>

    <div class="slanted"></div>
    <div class="header-content">
<!--      <h2 class="text-center text-white font-sans font-semibold text-6xl pt-8">-->
<!--        <NuxtLink class="text-white no-underline text-6xl" to="/">Aran Jannson</NuxtLink>-->
<!--      </h2>-->

      <NuxtLink :to="localePath('/')" class="logo">
        <img src="/favicon.png" alt="Site Logo" class="mx-auto" style="width: 120px;">
      </NuxtLink>

      <ul class="navBarList" style="list-style: none; display: flex; justify-content: center; padding: 0 0 30px;">
        <li style="margin: 0 10px;">
          <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
        </li>
        <li style="margin: 0 10px;">
          <NuxtLink :to="localePath('/projects')">{{ $t('projects') }}</NuxtLink>
        </li>
        <li style="margin: 0 10px;">
          <NuxtLink :to="localePath('/contact')">{{ $t('contact') }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()

definePageMeta({
  title: 'Header',
  description: 'Page Header',
})

</script>

<script>
export default {
  methods: {
    changeLocale(event) {
      const newLocale = event.target.value;
      this.$router.push(this.switchLocalePath(newLocale));
    }
  }
}
</script>

<style>

.logo{

  padding: 0;
  margin: 0;

  img{

    transition: transform 0.3s ease;

    &:hover{
      transform: scale(1.15);
    }
  }

}
</style>