<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <h2 style="color: #1a1d20" class="text-center">Contact</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <input v-model="formData.name" type="text" id="name" name="name" required>
      <span v-if="!formData.name" class="error-message">Name is required</span>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input v-model="formData.email" type="email" id="email" name="email" required>
      <span v-if="!formData.email" class="error-message">Email is required</span>
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea v-model="formData.message" id="message" name="message" required></textarea>
      <span v-if="!formData.message" class="error-message">Message is required</span>
    </div>
    <button type="submit" class="submit-button">Submit</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const formData = ref({
      name: '',
      email: '',
      message: ''
    });

    const handleSubmit = () => {
      if (!formData.value.name || !formData.value.email || !formData.value.message) {
        alert('Please fill in all fields');
        return;
      }

      console.log('Form submitted successfully!', formData.value);
      alert('Form submitted successfully!' + '\nName: ' + formData.value.name + '\nEmail: ' + formData.value.email + '\nMessage: ' + formData.value.message);
      formData.value.name = '';
      formData.value.email = '';
      formData.value.message = '';
    };

    return {
      formData,
      handleSubmit
    };
  }
};
</script>

<style scoped>
.contact-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input,
textarea {
  width: calc(100% - 10px);
  padding: 8px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error-message {
  color: red;
  font-size: 0.8em;
  display: block;
  margin-top: 4px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #2f2f2f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0054b3;
}
</style>
