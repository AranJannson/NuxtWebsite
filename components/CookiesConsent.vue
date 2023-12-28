<template>
  <ClientOnly>
    <div v-if="!consentGiven" class="cookie-consent">
      <p>We use cookies to improve your experience on our site. By continuing, you agree to our use of cookies.</p>
      <button @click="acceptCookies">Accept</button>
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
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px;
  text-align: center;
  border-top: 1px solid #ccc;
}
</style>
