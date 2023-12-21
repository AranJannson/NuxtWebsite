<template>
  <div class="text-center">
    <h2>My Links</h2>
  </div>
  <div class="social-container">
    <a href="https://www.linkedin.com/in/aranjannson/" target="_blank" class="social-button">
      <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn">
    </a>
    <a href="https://github.com/AranJannson" target="_blank" class="social-button">
      <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub">
    </a>
    <a href="https://gitlab.com/AranJannson" target="_blank" class="social-button">
      <img src="https://img.icons8.com/color/48/000000/gitlab.png" alt="GitLab">
    </a>
  </div>
</template>

<style scoped>
.social-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  overflow: hidden;

}

.social-button {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  border-radius: 50%;
  padding: 8px;
  background-color: #2c2c54;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 5px;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(44, 44, 84, 0.5);
  }

  width: fit-content;
  height: fit-content;
}

img {
  display: block;
  cursor: pointer;
  width: 48px;
  height: auto;
}
</style>
