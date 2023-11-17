<template>
  <Header />
  <div class="error-container" v-if="error.statusCode || error.message">
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <button @click="clearError">Clear errors</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
  error: Object
});

const clearError = () => {
  // Functionality to clear errors and possibly redirect
  clearError({ redirect: '/' });
};
</script>

<style scoped>
.error-container {
  text-align: center;
  margin-top: 20px;
}

h2 {
  font-size: 24px;
  color: #ff6347;
}

p {
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
}

button {
  padding: 8px 16px;
  border: none;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}
</style>
