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
          <h2><a :href="project.link" class="projectTitle">{{ project.name }}</a></h2>
          <p>{{ project.description }}</p>
          <a :href="project.link">
            <img :src="project.imageUrl" alt="Project Image">
          </a>
          <div>
            <p>Language: </p>
            <p :class="`${project.language.toLowerCase()}-text`">{{ project.language }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="align-content-center">
      <button style="margin: 0.5rem" class="btn btn-dark" @click="prevSlide">Previous</button>
      <button style="margin: 0.5rem" class="btn btn-dark" @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const originalProjects = [
  {
    name: 'Java For Beginners',
    description: 'A list of tasks in Java to learn the core concepts',
    imageUrl: 'https://aranjannson.com/Pictures/javaForBeginners.png',
    language: 'Java',
    link: 'https://github.com/AranJannson/Java-For-Beginners',
  },
  {
    name: 'Surrey CompSoc Webapp',
    description: 'As the Web Master for the University Of Surrey Computing Society, I have been tasked with creating a new web application for the society.',
    imageUrl: 'https://aranjannson.com/Pictures/compsoc_logo_color_transparent.png',
    language: 'Nuxt2',
    link: 'https://github.com/surreycompsoc/website',
  },
  {
    name: 'Portfolio Website',
    description: 'The github repository for this website',
    imageUrl: 'https://nuxtjs.ir/logos/nuxt-white.svg',
    language: 'Nuxt3',
    link: 'https://github.com/AranJannson/PortfolioWebsite'
  }
];

const projects = reactive([
  originalProjects[originalProjects.length - 1], // Fake last slide
  ...originalProjects,
  originalProjects[0] // Fake first slide
]);

const currentIndex = ref(1); // Start at the first real slide
const transitionEnabled = ref(true);
const transitionDuration = 300; // Transition duration in milliseconds

const nextSlide = () => {
  transitionEnabled.value = true;
  currentIndex.value++;

  if (currentIndex.value >= projects.length - 1) {
    setTimeout(() => {
      transitionEnabled.value = false;
      currentIndex.value = 1; // Reset to first real slide
    }, transitionDuration);
  }
};

const prevSlide = () => {
  transitionEnabled.value = true;
  currentIndex.value--;

  if (currentIndex.value <= 0) {
    setTimeout(() => {
      transitionEnabled.value = false;
      currentIndex.value = projects.length - 2; // Reset to last real slide
    }, transitionDuration);
  }
};

const touchStartX = ref(0);
const touchEndX = ref(0);

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  const threshold = 50; // Minimum distance (in pixels) to trigger a slide change
  if (touchStartX.value - touchEndX.value > threshold) {
    nextSlide();
  } else if (touchStartX.value - touchEndX.value < -threshold) {
    prevSlide();
  }
};
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
  padding: 20px;
  box-sizing: border-box;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-details {
  text-align: center;
  background-color: #2c2c54;
  color: white;
  padding: 1.2rem;
  border-radius: 8px;
  width: 400px;
  aspect-ratio: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;

  &:hover{
    transform: translateY(-5px);
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
  margin-top: 1rem; /* Adjust as needed */
}

.projectTitle {
  text-decoration: none;
  color: #bd93f9;
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
