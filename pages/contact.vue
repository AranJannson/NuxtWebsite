<template>

  <title>Contact | AranJannson</title>

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
  title: 'Contact Page',
  description: 'Aran Jannson\'s Portfolio Website Contact Page',
  image: '~/public/favicon.png',
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
