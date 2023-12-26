<template>

  <title>{{ $t('contact') }} | AranJannson</title>

  <br>

  <ContactForm />

</template>

<script>
import ContactForm from '~/components/ContactForm.vue';

export default {
  components: {
    ContactForm
  }
};

definePageMeta({
  return: {
    title: 'Contact Page',
    meta: [
      { name: 'description', content: 'Aran Jannson\'s Portfolio Website Contact Page' },
      // Open Graph Image
      { property: 'og:image', content: '~assets/images/thumbnails/contact.jpg' } // Assuming favicon.png is directly inside the public directory
    ]
  }
})
</script>

<style>
.contact {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: gainsboro;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h2 {
  color: gainsboro;
  font-size: 28px;
  margin-bottom: 20px;
}

p {
  margin-bottom: 15px;
}
</style>
