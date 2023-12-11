<template>

  <div class="welcomeBox" >
    <h2>Welcome!</h2>

    <p style="color:gainsboro;">Hello My Name Is <b>Aran Jannson</b>. I am a second-year undergraduate student studying Computer Science at the <a href="https://www.surrey.ac.uk/" style="color:antiquewhite;">The University Of Surrey</a>.</p>
    <p style="color:gainsboro;">Welcome to my portfolio website! Here, you can explore my most popular GitHub projects, find ways to reach me, and discover more details about myself.</p>
  </div>

  <div>
    <h2 style="text-align: center">My Projects</h2>
    <ProjectCarousel />
  </div>

</template>
<script>
import ProjectCarousel from '~/components/ProjectCarousel.vue';

export default {
  components: {
    ProjectCarousel,
  },
};
</script>