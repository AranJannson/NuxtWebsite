<script setup lang="ts">

definePageMeta({
  title: 'Privacy Policy',
  description: 'Aran Jannson\'s Portfolio Website Privacy Policy',
  image: '~/public/favicon.png',
})

</script>

<template>

  <title>{{ $t('privacyPolicy') }} | AranJannson</title>

  <div class="privacy-policy">
    <h2>{{ $t('privacyPolicy') }}</h2>

    <p>{{ $t('privacyPolicyPart1') }}</p>
    <p>{{ $t('privacyPolicyPart2') }}</p>
    <p>{{ $t('privacyPolicyPart3') }}</p>
    <p>{{ $t('privacyPolicyPart4') }}</p>

  </div>
</template>

<style scoped>
.privacy-policy {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: gainsboro;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1 {
  color: gainsboro;
  font-size: 28px;
  margin-bottom: 20px;
}

p {
  margin-bottom: 15px;
}
</style>
