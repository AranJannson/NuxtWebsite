<template>

  <div class="about-container">
    <div class="about-card">
      <h2>
        About
      </h2>

      <div class="pb-3">
        <img src="https://picsum.photos/seed/picsum/1200/1000">
      </div>

      <p>
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>

    </div>
    <div class="about-card">
      <h2>
        Most Popular Projects
      </h2>
      <ProjectCarousel />
    </div>
  </div>


</template>

<script setup lang="ts">

</script>

<style scoped>


.about-container{
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
}


.about-card{
  background-color: #2c2c54;
  color: #f8f8f2;
  padding: 2rem;
  border-radius: 8px;
  margin: 1rem auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: calc(50% - 100px);
  transition: transform 0.3s ease;

  @media screen and (max-width: 800px) {
    width: 98%;
    margin: 1rem auto;
    padding: 3rem;
    box-sizing: border-box;
  }

  img{
    border-radius: 10px;
  }

  &:hover{
    transform: translateY(-5px);
  }
}

.read-more {
  background-color: #44475a;
  color: #f8f8f2;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: default;
  transition: background-color 0.3s ease;
  margin-bottom: auto;

  &:hover {
    background-color: #6272a4;
  }
}

</style>