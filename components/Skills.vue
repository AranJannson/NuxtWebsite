<template>
  <div class="skills-container">
    <h2 class="skills-title">My Skills</h2>
    <p class="skills-description">I have experience in a wide range of programming languages, frameworks, and technologies. Always eager to learn more and expand my skillset.</p>
    <div class="skills-list">
      <!-- Programming Languages -->
      <span class="skill-tag">Bash</span>
      <span class="skill-tag">C++</span>
      <span class="skill-tag">C#</span>
      <span class="skill-tag">CSS</span>
      <span class="skill-tag">HTML</span>
      <span class="skill-tag">Java</span>
      <span class="skill-tag">JavaScript</span>
      <span class="skill-tag">Python</span>
      <span class="skill-tag">SCSS</span>

      <!-- Frameworks and Libraries -->
      <span class="skill-tag">Bootstrap</span>
      <span class="skill-tag">Django</span>
      <span class="skill-tag">Material UI</span>
      <span class="skill-tag">Nuxt 2.0</span>
      <span class="skill-tag">Nuxt 3.0</span>
      <span class="skill-tag">TailwindCSS</span>
      <span class="skill-tag">Vue.js</span>

      <!-- Databases -->
      <span class="skill-tag">Firebase</span>
      <span class="skill-tag">MySQL</span>
      <span class="skill-tag">SQLite</span>

      <!-- Tools and Platforms -->
      <span class="skill-tag">Docker</span>
      <span class="skill-tag">Git</span>
      <span class="skill-tag">Linux</span>
      <span class="skill-tag">Node.js</span>
      <span class="skill-tag">NPM</span>
      <span class="skill-tag">Yarn</span>

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.skills-container {
  background-color: #2c2c54;
  color: #f8f8f2;
  padding: 2rem;
  border-radius: 8px;
  margin: 1rem auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: calc(100% - 100px);

  @media screen and (max-width: 800px) {
    width: auto;
    margin: 1rem auto;
    padding: 3rem;
    box-sizing: border-box;
  }
}

.skills-title {
  color: #bd93f9;
  margin-bottom: 1rem;
}

.skills-description {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background-color: #44475a;
  color: #f8f8f2;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: default;
  transition: background-color 0.3s ease;
}

.skill-tag:hover {
  background-color: #6272a4;
}

</style>