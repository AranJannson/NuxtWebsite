<template>
  <main class="content-wrapper">
    <div class="content-container">
      <ContentDoc />
    </div>
  </main>
</template>

<style scoped>
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.content-container {
  max-width: 800px;
  width: 100%;
  background-color: white;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
