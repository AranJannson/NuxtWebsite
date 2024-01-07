<template>
  <div class="header">

    <div>
      <UButton icon="i-heroicons-language" @click="isOpen = true" style="background-color: black; z-index: 99; right: 0;" class="text-white position-absolute top-0 p-2 m-2"/>
      <UModal v-model="isOpen">
        <div class="p-4 text-center w-100" style="background-color: rgba(0, 0, 0, 0.9);">
          <h2>{{ $t('language') }}</h2>
          <NuxtLink class="languageSelector" :to="switchLocalePath('en')" style="width:100%;" @click.native="isOpen = false">English</NuxtLink>
          <NuxtLink class="languageSelector" :to="switchLocalePath('tr')" style="width:100%;" @click.native="isOpen = false">Türkçe</NuxtLink>
          <NuxtLink class="languageSelector" :to="switchLocalePath('el')" style="width:100%;" @click.native="isOpen = false">Ελληνικά</NuxtLink>
        </div>
      </UModal>
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

<script>
  const isOpen = ref(false)
</script>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

definePageMeta({
  title: 'Header',
  description: 'Page Header',
});

</script>



<style>

.logo{

  padding: 0;
  margin: 0;

  img{

    transition: transform 0.3s ease;
    width: 65px;
    margin:20px;

  }

}

.navBarList{
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0 0 30px;

}


.languageSelector {
  color: white;
  width: 50%;
  display: block !important;
  transition: color 0.3s ease;

  &:hover {
    color: rgb(128, 128, 128);
  }
}

.navBarList{
  width: 20rem;

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