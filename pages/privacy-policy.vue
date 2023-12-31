<script setup lang="ts">

definePageMeta({
  title: 'privacyPolicy',
  description: 'privacyPolicyPageDescription',
  image: 'privacyPolicyThumbnail',
})

</script>

<template>

  <title>{{ $t('privacyPolicy') }} | AranJannson</title>

  <div class="privacy-policy">
    <h2 data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.title') }}</h2>

    <h3 data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.subtitle') }}</h3>

    <p data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.paragraph1') }}</p>

    <h3 data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.useOfCookies') }}</h3>

    <p data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.paragraph2') }}</p>
    <p data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.paragraph3') }}</p>
    <p data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.paragraph4') }}</p>

    <h3 data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.externalLinks') }}</h3>

    <p data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.paragraph5') }}</p>

    <h3 data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.noPersonalInformationCollected') }}</h3>

    <p data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.paragraph6') }}</p>

    <h3 data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.security') }}</h3>

    <p data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.paragraph7') }}</p>

    <h3 data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.policyUpdates') }}</h3>

    <p data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.paragraph8') }}</p>

    <h3 data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.contactUs') }}</h3>

    <p data-aos="fade-left" data-aos-delay="300">{{ $t('privacyPolicyDesc.paragraph9') }}</p>



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

h3{
  color: gainsboro;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
}

p {
  margin-bottom: 15px;
}
</style>
