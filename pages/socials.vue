<template>

  <title>{{ $t('socials') }} | AranJannson</title>

  <div class="headerTitle" style="display: flex; justify-content: space-between;">
    <div style="width: 50%;">
      <h1 style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-size: 80px;">Find Me On</h1>
    </div>

    <div style="width: 50%; display: flex; flex-direction: column; justify-content: center;">
      <button @click="openLink('https://www.linkedin.com/in/aranjannson/')" type="button" class="btn btn-dark social-button">
        <div class="row">
          <div class="col">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" class="social-img"/>
          </div>
          <div class="col">
            <h3>LinkedIn</h3>
          </div>
        </div>
      </button>

      <button @click="openLink('https://github.com/AranJannson')" type="button" class="btn btn-dark social-button">
        <div class="row">
          <div class="col">
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" class="social-img"/>
          </div>
          <div class="col">
            <h3>GitHub</h3>
          </div>
        </div>
      </button>

      <button @click="openLink('https://gitlab.com/AranJannson')" type="button" class="btn btn-dark social-button">
        <div class="row">
          <div class="col">
            <img src="https://img.icons8.com/color/48/000000/gitlab.png" alt="GitLab" class="social-img"/>
          </div>
          <div class="col">
            <h3>GitLab</h3>
          </div>
        </div>
      </button>

      <button @click="openLink('mailto:me@aranjannson.com')" type="button" class="btn btn-dark social-button">
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
  return: {
    title: 'Socials Page',
    meta: [
      { name: 'description', content: 'Aran Jannson\'s Portfolio Website Socials Page' },
      // Open Graph Image
      { property: 'og:image', content: '~assets/images/thumbnails/socials.jpg' } // Adjust the path to your image
    ]
  }
})
</script>

<style>
.social-button {
  width: 60%;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-button .row {
  display: flex;
}

.social-button .col {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-img {
  margin-bottom: 10px;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .social-button .row {
    flex-direction: column;
  }
}
</style>
