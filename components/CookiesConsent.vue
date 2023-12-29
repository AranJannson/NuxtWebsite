<template>
  <ClientOnly>
    <div class="cookieContainer">
      <div v-if="!consentGiven" class="cookie-consent">
        <p>We use cookies to improve your experience on our site. By continuing, you agree to our use of cookies.</p>
        <button @click="acceptCookies">Accept</button>
      </div>
    </div>

  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const consentGiven = ref(false);

function acceptCookies() {
  const inOneYear = new Date();
  inOneYear.setFullYear(inOneYear.getFullYear() + 1);
  document.cookie = `cookieConsent=true; expires=${inOneYear.toUTCString()}; path=/`;
  consentGiven.value = true;
}

function checkCookieConsent() {
  return document.cookie.split('; ').some(cookie => cookie.trim().startsWith('cookieConsent=true'));
}

onMounted(() => {
  consentGiven.value = checkCookieConsent();
});
</script>


<style scoped>

.cookieContainer{
  width: 100%;
  height: 100%;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.cookie-consent {
  position: fixed;
  bottom: 0;
  border-radius: 10px;
  margin: 1.5rem;
  left: 0;
  right: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px;
  text-align: center;
  border-top: 1px solid #ccc;

  button {
    background-color: #44475a;
    color: #f8f8f2;
    padding: 0.5rem 1rem;
    border-radius: 16px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: auto;

    &:hover {
      background-color: #6272a4;
    }
  }
}
</style>
