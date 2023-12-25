<template>
  <form @submit.prevent="handleSubmit" class="contact-form" data-aos="fade-up" data-aos-delay="300">
    <h2 style="color: #1a1d20" class="text-center">{{ $t('contact') }}</h2>
    <div class="form-group">
      <label for="name">{{ $t('name') }}:</label>
      <input v-model="formData.name" type="text" id="name" name="name" required>
      <span v-if="!formData.name" class="error-message">{{ $t('nameIsRequired') }}</span>
    </div>
    <div class="form-group">
      <label for="email">{{ $t('email') }}:</label>
      <input v-model="formData.email" type="email" id="email" name="email" required>
      <span v-if="!formData.email" class="error-message">{{ $t('emailIsRequired') }}</span>
    </div>
    <div class="form-group">
      <label for="message">{{ $t('message') }}:</label>
      <textarea v-model="formData.message" id="message" name="message" required></textarea>
      <span v-if="!formData.message" class="error-message">{{ $t('messageIsRequired') }}</span>
    </div>
    <button type="submit" class="submit-button">{{ $t('submit') }}</button>
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
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #2c2c54;

}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  color:white;
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
  background-color: #44475a;
  color: #f8f8f2;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: default;
  transition: background-color 0.3s ease;
  margin-bottom: auto;

  &:hover {
    background-color: #6272a4;
  }
}

</style>
