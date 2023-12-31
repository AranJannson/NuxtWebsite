<template>

  <title>{{ $t('home') }} | AranJannson</title>

  <div class="welcomeBox" data-aos="fade-right" data-aos-delay="300">
    <h2>{{ $t('welcome') }}!</h2>
    <p style="color:gainsboro;">{{ $t('helloMyNameIs') }} <b class="gradient-text">Aran Jannson</b>. {{ $t('undergradDescription') }} <a class="uni-link" href="https://www.surrey.ac.uk/">{{ $t('universityOfSurrey') }}</a>.</p>
    <p style="color:gainsboro;">{{ $t('welcomePortfolio') }}</p>
  </div>

  <div data-aos="fade-left" data-aos-delay="300">
    <Skills />
  </div>
  <br>
  <br>
  <div data-aos="fade-down" data-aos-delay="300">
    <AboutCards/>
  </div>
  <br>
  <br>
  <div data-aos="fade-up" data-aos-delay="300">
    <SocialsIcons/>
  </div>
</template>


<script>
import ProjectCarousel from '~/components/ProjectCarousel.vue';
import SocialsIcons from "~/components/SocialsIcons.vue";
import Skills from "~/components/Skills.vue";
import AboutCards from "~/components/AboutCards.vue";

export default {
  components: {
    AboutCards,
    Skills,
    SocialsIcons,
    ProjectCarousel,
  },
};

definePageMeta({
  title: 'home',
  description: 'homePageDescription',
  image: 'homeThumbnail',
})
</script>

<script setup>

const { locale } = useI18n()

import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init();
});

</script>

<style>

.uni-link{
  color: antiquewhite;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover{
    color: #a7acb1;
  }
}
</style>