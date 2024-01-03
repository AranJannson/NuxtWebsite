<template>

  <title>{{ $t('socials') }} | AranJannson</title>

 <div class="socials-container">
   <div class="socials-content">
    <h2>
      {{ $t('socials') }}
    </h2>
   </div>
   <div class="socials-content">
     <button @click="openLink('https://www.linkedin.com/in/aranjannson/')">
       <div class="row">
         <div class="col">
           <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" class="social-img"/>
         </div>
         <div class="col">
           <h3>LinkedIn</h3>
         </div>
       </div>
     </button>

     <button @click="openLink('https://github.com/AranJannson')">
       <div class="row">
         <div class="col">
           <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" class="social-img"/>
         </div>
         <div class="col">
           <h3>GitHub</h3>
         </div>
       </div>
     </button>

     <button @click="openLink('https://gitlab.com/AranJannson')">
       <div class="row">
         <div class="col">
           <img src="https://img.icons8.com/color/48/000000/gitlab.png" alt="GitLab" class="social-img"/>
         </div>
         <div class="col">
           <h3>GitLab</h3>
         </div>
       </div>
     </button>

     <button @click="openLink('mailto:me@aranjannson.com')" >
       <div class="row">
         <div class="col">
           <img src="https://aranjannson.com/Pictures/email_white_48dp.svg" alt="Email" class="social-img"/>
         </div>
         <div class="col">
           <h3>Email</h3>
         </div>
       </div>
     </button>
   </div>
 </div>

</template>

<script>
export default {
  name: 'Socials',
  methods: {
    openLink(url) {
      window.open(url);
    }
  }
};

definePageMeta({
  title: 'socials',
  description: 'socialsPageDescription',
  image: 'socialsThumbnail',
})
</script>

<style>
.socials-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
}

.socials-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

button {
  background-color: #292c31;
  color: #f8f8f2;
  padding: 1.5rem 3rem;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: #3a4052;
  }
}

.social-img {
  margin-right: 10px;
}
</style>
