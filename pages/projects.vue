<template>

  <title>{{ $t('projects') }} | AranJannson</title>

  <div class="project-container" data-aos="fade-left" data-aos-delay="300">
    <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
    >
      <div class="image-container">
        <NuxtLink :to="project.link">
          <img :src="project.imageUrl" :alt="project.name" class="project-image" />
        </NuxtLink>
      </div>
      <div class="project-details">
        <h2 class="project-name">{{ $t(project.name) }}</h2>
        <p class="project-description">{{ $t(project.description) }}</p>
        <p>{{ $t('language') }}: {{ project.language }}</p>
        <NuxtLink class="gradient-text" :href="project.link" target="_blank" rel="noopener noreferrer">{{ $t('githubLink') }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: null,
      projects: [
        {
          name: 'projectJavaForBeginnersName',
          description: 'projectJavaForBeginnersDescription',
          imageUrl: 'https://aranjannson.com/Pictures/javaForBeginners.png',
          language: 'Java',
          link: 'https://github.com/AranJannson/Java-For-Beginners',
        },
        {
          name: 'projectSurreyCompSocWebappName',
          description: 'projectSurreyCompSocWebappDescription',
          imageUrl: 'https://aranjannson.com/Pictures/compsoc_logo_color_transparent.png',
          language: 'Nuxt2',
          link: 'https://github.com/surreycompsoc/website',
        },
        {
          name: 'projectPortfolioWebsiteName',
          description: 'projectPortfolioWebsiteDescription',
          imageUrl: 'https://nuxtjs.ir/logos/nuxt-white.svg',
          language: 'Nuxt3',
          link: 'https://github.com/AranJannson/PortfolioWebsite'
        }
      ]
    };
  }
};

definePageMeta({
  description: 'Aran Jannson\'s Portfolio Website Projects Page',
  image: '/thumbnails/projects.jpg',
})
</script>

<script setup>

import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init();
});

</script>

<style scoped>
.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.project-card {
  width: 300px;
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;
  background-color: #2c2c54;
  color: #f8f8f2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover{
    transform: scale(1.05);
  }
}

.image-container {
  position: relative;
  width: 100%;
  height: 150px; /* Adjust height as needed */
  overflow: hidden;
  border-radius: 8px 8px 0 0;
}

.project-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px 8px 0 0;
}

.project-details {
  padding: 15px;
}

.project-name {
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: #ffffff;

}



.project-description {
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 10px;
}
</style>
