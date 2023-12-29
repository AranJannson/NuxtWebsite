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
  title: 'Contact',
  description: 'Looking to connect? Visit the Contact page on my Portfolio Website. Here, you can reach out to me, whether for professional collaborations, project inquiries, or just to say hello. I\'m always open to new opportunities and conversations!',
  image: '/thumbnails/contact.jpg',
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
