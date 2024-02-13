<template>
  <div class="carousel">
    <div
        class="slides"
        :style="{ transform: `translateX(-${currentIndex * 100}%)`, transition: transitionEnabled ? 'transform 0.3s' : 'none' }"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >
      <div v-for="(project, index) in projects" :key="index" class="slide">
        <div class="project-details">
          <h2><a :href="project.link" class="projectTitle">{{ $t(project.name) }}</a></h2>
          <p>{{ $t(project.description) }}</p>
          <a :href="project.link">
            <img :src="project.imageUrl" alt="Project Image">
          </a>

          <div>
            <p>{{ $t('language') }}: </p>
            <p :class="`${project.language.toLowerCase()}-text`">{{ project.language }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="align-content-center">
      <div class="slide-number">{{ displayIndex }} / {{ maxIndex }}</div>
    </div>
    <div class="align-content-center">
      <button style="margin: 0.5rem" class="btn btn-dark" @click="prevSlide">{{ $t('previous') }}</button>
      <button style="margin: 0.5rem" class="btn btn-dark" @click="nextSlide">{{ $t('next') }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

definePageMeta({
  title: 'Projects Carousel',
  description: 'Projects Carousel',
});

const originalProjects = [
  {
    name: 'projectJavaForBeginners.title',
    description: 'projectJavaForBeginners.title',
    imageUrl: 'https://aranjannson.com/Pictures/javaForBeginners.png',
    language: 'Java',
    link: 'https://github.com/AranJannson/Java-For-Beginners',
  },
  {
    name: 'projectSurreyCompSocWebapp.title',
    description: 'projectSurreyCompSocWebapp.description',
    imageUrl: 'https://aranjannson.com/Pictures/compsoc_logo_color_transparent.png',
    language: 'Nuxt2',
    link: 'https://github.com/surreycompsoc/website',
  },
  {
    name: 'projectPortfolioWebsite.title',
    description: 'projectPortfolioWebsite.description',
    imageUrl: 'https://aranjannson.com/favicon.png',
    language: 'Nuxt3',
    link: 'https://github.com/AranJannson/PortfolioWebsite'
  },
  {
    name: 'projectElectronPenNT.title',
    description: 'projectElectronPenNT.description',
    imageUrl: 'https://aranjannson.com/Pictures/logo_PenNT.png',
    language: 'Electron, Next.js',
    link: ''
  }
];

const displayIndex = computed(() => {
  if (currentIndex.value === 0) {
    return originalProjects.length;
  } else if (currentIndex.value === projects.length - 1) {
    return 1;
  } else {
    return currentIndex.value;
  }
});

const projects = reactive([
  originalProjects[originalProjects.length - 1], // Fake last slide
  ...originalProjects,
  originalProjects[0] // Fake first slide
]);

const currentIndex = ref(1);
const maxIndex = computed(() => originalProjects.length);
const transitionEnabled = ref(true);
const autoScrollInterval = ref(null);

const nextSlide = () => {
  transitionEnabled.value = true;
  currentIndex.value++;

  if (currentIndex.value >= projects.length - 1) {
    setTimeout(() => {
      transitionEnabled.value = false;
      currentIndex.value = 1;
    }, 300);
  }
};

const prevSlide = () => {
  transitionEnabled.value = true;
  currentIndex.value--;

  if (currentIndex.value <= 0) {
    setTimeout(() => {
      transitionEnabled.value = false;
      currentIndex.value = projects.length - 2;
    }, 300);
  }
};

const touchStartX = ref(0);
const touchEndX = ref(0);

const handleTouchStart = (e) => {
  clearInterval(autoScrollInterval.value);
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  autoScrollInterval.value = setInterval(nextSlide, 4000); // Each 1000 = 1 second
  const threshold = 50;
  if (touchStartX.value - touchEndX.value > threshold) {
    nextSlide();
  } else if (touchStartX.value - touchEndX.value < -threshold) {
    prevSlide();
  }
};

onMounted(() => {
  autoScrollInterval.value = setInterval(nextSlide, 4000); // Each 1000 = 1 second
});

onUnmounted(() => {
  clearInterval(autoScrollInterval.value);
});
</script>

<style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slides {
  display: flex;
  transition: transform 0.3s ease;
}

.slide {
  min-width: 100%;
  max-width: 100%;
  margin: 0 auto;
  place-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-details {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  background-color: #1e1e3d;
  border-radius: 10px;
  text-align: center;

  img{
    border-radius: 10px;
  }
}


button {
  background-color: #44475a;
  color: #f8f8f2;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #6272a4;
}

button:disabled {
  background-color: #565454;
  cursor: not-allowed;
}

.align-content-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.projectTitle {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

.default-text {
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.java-text {
  color: red;
  font-size: 20px;
  font-weight: bold;
}

.csharp-text {
  color: blue;
  font-size: 20px;
  font-weight: bold;
}

.python-text {
  color: yellow;
  font-size: 20px;
  font-weight: bold;
}

.nuxt2-text {
  color: green;
  font-size: 20px;
  font-weight: bold;
}

.nuxt3-text {
  color: #82d203;
  font-size: 20px;
  font-weight: bold;
}

</style>
