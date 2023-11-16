<template>
  <div class="carousel">
    <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(project, index) in projects" :key="index" class="slide">
        <!-- Display project details and image here -->
        <div class="project-details">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <img :src="project.imageUrl" alt="Project Image" class="project-image" />
          <!-- Add more details or adjust image properties -->
        </div>
      </div>
    </div>
    <div class="controls">
      <button @click="prevSlide" :disabled="currentIndex === 0">Previous</button>
      <button @click="nextSlide" :disabled="currentIndex === projects.length - 1">Next</button>
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
          name: 'Project 1',
          description: 'Description of project 1',
          imageUrl: 'https://via.placeholder.com/300x200', // Replace with actual image URL
        },
        {
          name: 'Project 2',
          description: 'Description of project 2',
          imageUrl: 'https://via.placeholder.com/300x200', // Replace with actual image URL
        },
        // Add more projects with their details and image URLs
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
  //border: 1px solid #ccc;
  border-radius: 5px;
  //box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.slides {
  display: flex;
  transition: transform 0.3s ease;
}

.slide {
  min-width: 100%;
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
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
