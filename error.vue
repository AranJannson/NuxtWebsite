<template>
  <div class="error-page">
    <Header/>
    <div class="error-container" v-if="error.statusCode || error.message">
      <h1>{{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
      <button @click="clearError">Home</button>
    </div>
    <Footer/>
  </div>

</template>


<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
  error: Object
});

const clearError = () => {
  // Functionality to clear errors and possibly redirect
  const router = useRouter();
  // Clear errors...
  router.push('/'); // Redirect to '/'
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
  padding: 10px 20px; /* Adjust padding for the button */
  border: none;
  background-color: #FF0000; /* Red color */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px; /* Add some border radius for a rounded look */
  font-size: 16px; /* Adjust font size */
}

button:hover {
  background-color: #CC0000; /* Darker shade on hover */
}


body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.error-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.error-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Rest of your styles */
}


</style>
