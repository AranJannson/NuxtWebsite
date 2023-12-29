<template>
  <div class="header">
    <div class="text-black position-absolute top-0 p-4" style="z-index: 99; right: 0;">
    <!-- Dropdown for language selection -->
    <select v-model="selectedLocale" @change="changeLanguage" class="bg-white border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-blue-500">
      <option value="en">English</option>
      <option value="tr">Türkçe</option>
      <option value="el">Ελληνικά</option>
    </select>
  </div>

    <div class="slanted"></div>
    <div class="header-content">
<!--      <h2 class="text-center text-white font-sans font-semibold text-6xl pt-8">-->
<!--        <NuxtLink class="text-white no-underline text-6xl" to="/">Aran Jannson</NuxtLink>-->
<!--      </h2>-->

      <NuxtLink :to="localePath('/')" class="logo">
        <img src="~/assets/images/favicon.png" alt="Site Logo" class="mx-auto" style="width: 120px;">
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
  computed: {
    // Computed property to get the current locale
    selectedLocale: {
      get() {
        return this.$i18n.locale;
      },
      // No need to set as the changeLanguage method handles the update
      set() {}
    }
  },
  methods: {
    changeLanguage(event) {
      const selectedLocale = event.target.value;
      this.$router.push(this.switchLocalePath(selectedLocale));
    }
  }
};
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