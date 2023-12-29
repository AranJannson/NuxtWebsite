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
      <NuxtLink :to="localePath('/')" class="logo">
        <img src="~/assets/images/favicon.png" alt="Site Logo" class="mx-auto">
      </NuxtLink>

      <ul class="navBarList" >
        <li>
          <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/projects')">{{ $t('projects') }}</NuxtLink>
        </li>
        <li>
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
    width: 75px;
    margin:20px;

    &:hover{
      transform: scale(1.15);
    }
  }

}

.navBarList{
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0 0 30px;

}

.navBarList{

  li{
    margin: 0 10px;
    padding: 0 3px;


    width: 90px;

    text-align: center;

    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: transform 0.3s ease;

    &:hover{
      transform: scale(1.15);
    }
  }
}
</style>