<template>
  <div class="site-container">
    <div class="main-content">
    </div>
    <footer class="mainfooter" role="contentinfo">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Pages</h3>
          <ul>
            <li><NuxtLink class="gradient-text" to="/">Home</NuxtLink></li>
            <li><NuxtLink class="gradient-text" to="/socials">Socials</NuxtLink></li>
            <li><NuxtLink class="gradient-text" to="/projects">Projects</NuxtLink></li>
            <li><NuxtLink class="gradient-text" to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Important Information</h3>
          <ul>
            <li><NuxtLink class="gradient-text" to="/privacy-policy">Privacy Policy</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>External Links</h3>
          <ul>
            <li><a href="" target="_blank" rel="noopener noreferrer"></a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Powered by</h3>
          <ul>
            <li><a class="gradient-text" href="" target="_blank" rel="noopener noreferrer" >TwentyDimension</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-info">
        <p>Icons from <a href="https://material.io/resources/icons/?style=round" target="_blank" rel="noopener noreferrer" style="color: #a7acb1">Google</a> and <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer" style="color: #a7acb1">Icons8</a></p>
        <p>Copyright &copy; {{ currentYear }} Aran Jannson - All Rights Reserved.</p>
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
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.site-container {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 20px;
  max-height: 80vh;
  overflow-y: auto;
}

.mainfooter {
  flex-shrink: 0;
  //background-color: #333;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding-top: 20px;
  padding-bottom: 10px;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1 1 250px;
  margin: 0 20px;
  max-width: 300px;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding-bottom: 5px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-info {
  text-align: center;
  margin-top: 20px;
}
</style>