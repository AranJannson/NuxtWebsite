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
        <div class="project-details" style="background-color: rgba(255, 255, 255, 0.5);">
          <h3><a :href="project.link" class="projectTitle">{{ project.name }}</a></h3>
          <p>{{ project.description }}</p>
          <a :href="project.link">
            <img :src="project.imageUrl" alt="Project Image" class="project-image"/>
          </a>
          <p style="font-weight: bold;">Language:</p>
          <p :class="getLanguageClass(project.language)">{{ project.language }}</p>
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
          name: 'Java-For-Beginners',
          description: 'A list of tasks in Java to learn the core concepts',
          imageUrl: 'https://aranjannson.com/Pictures/javaForBeginners.png',
          language: 'Java',
          link: 'https://github.com/AranJannson/Java-For-Beginners',
        },
        {
          name: 'Project 2',
          description: 'Description of project 2',
          imageUrl: 'https://via.placeholder.com/300x200',
          language: 'Python',
          link: '',
        },
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
          this.nextSlide(); // Swiped left, go to next slide
        } else {
          this.prevSlide(); // Swiped right, go to previous slide
        }
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
  background-color: #5ac2d9;
  padding: 10px;
  border-radius: 15px;
}

.project-image {
  max-width: 100%;
  width: 300px;
  height: auto;
  border-radius: 5px;
}

.controls {
  margin-top: 10px;
  text-align: center;
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
  background-color: #0056b3;
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
</style>
