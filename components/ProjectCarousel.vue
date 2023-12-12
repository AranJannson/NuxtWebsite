<template>
  <div class="carousel">
    <div
        class="slides"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >
      <div v-for="(project, index) in projects" :key="index" class="slide">
        <div class="project-details">
          <div>
            <h3><a :href="project.link" class="projectTitle">{{ project.name }}</a></h3>
            <p>{{ project.description }}</p>
          </div>
          <div>
            <a :href="project.link">
              <img :src="project.imageUrl" alt="Project Image" class="project-image"/>
            </a>
          </div>
          <div>
            <p style="font-weight: bold;">Language:</p>
            <p :class="getLanguageClass(project.language)">{{ project.language }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="controls">
      <button @click="prevSlide" :disabled="currentIndex === 0" class="btn btn-dark">Previous</button>
      <button @click="nextSlide" :disabled="currentIndex === projects.length - 1" class="btn btn-dark">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      projects: [
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
        // Add more projects with their details and image URLs
      ],
      touchStartX: 0,
      touchEndX: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    },
    getLanguageClass(language) {
      if (language === 'Java') {
        return 'java-text';
      } else if (language === 'C#') {
        return 'csharp-text';
      } else if (language === 'Python') {
        return 'python-text';
      } else if (language === 'Nuxt2'){
        return 'nuxt2-text'
      } else if (language === 'Nuxt3'){
        return 'nuxt3-text'
      }
      return 'default-text';
    },
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      const difference = this.touchStartX - this.touchEndX;
      if (Math.abs(difference) > 50) {
        if (difference > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    },
  },
  watch: {
    currentIndex(newValue, oldValue) {
      if (newValue === this.projects.length) {
        this.currentIndex = 0;
      } else if (newValue === -1) {
        this.currentIndex = this.projects.length - 1;
      }
    },
  },
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
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 15px;
  width: 400px;
  aspect-ratio: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-image {
  max-width: 100%;
  width: 450px;
  height: auto;
  border-radius: 5px;
  align-self: center;
}

.controls {
  margin-top: 10px;
  text-align: center;
  flex-shrink: 0;
}

button {
  margin: 0 5px;
  padding: 8px 16px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #b3001b;
}

button:disabled {
  background-color: #565454;
  cursor: not-allowed;
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
