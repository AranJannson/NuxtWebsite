<template>
  <div>
    <NuxtPage />

    <footer class="mainfooter" role="contentinfo">
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>Pages</h4>
                <ul class="list-unstyled">
                  <li><a href="/">Home</a></li>
                  <li><a href="/socials">Socials</a></li>
                  <li><a href="/projects">Projects</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>Important Information</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Privacy Policy</a></li>
                  <!-- Add more links or content here -->
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>External Links</h4>
                <ul class="list-unstyled">
                  <!-- Add external links here -->
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h4 style="color: cornsilk;">Powered by TwentyDimension</h4>
            </div>
          </div>
          <hr style="border-top: 1px solid rgba(255, 255, 255, 0.1);">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>
                Icons from <a href="https://material.io/resources/icons/?style=round" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: #3B5998;">Google</a> and <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: #3B5998;">Icons8</a>
              </p>
              <p>&copy; {{ currentYear }} Aran Jannson - All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const currentYear = ref(new Date().getFullYear());

    return {
      currentYear: computed(() => currentYear.value),
    };
  },
});
</script>

<style scoped>
.mainfooter {
  margin-top: 30px;
}

.footer-middle {
  padding-bottom: 20px;
}

.text-sm {
  font-size: 12px;
}
</style>
