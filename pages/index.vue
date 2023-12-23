<template>

  <title>Home | AranJannson</title>

  <div class="welcomeBox" >
    <h2>Welcome!</h2>
    <p style="color:gainsboro;">Hello, My Name Is <b>Aran Jannson</b>. I am a second-year undergraduate student studying Computer Science at <a class="uni-link" href="https://www.surrey.ac.uk/">The University Of Surrey</a>.</p>
    <p style="color:gainsboro;">Welcome to my portfolio website! Here, you can explore my most popular GitHub projects, find ways to reach me, and discover more details about myself.</p>
  </div>

  <Skills />

  <div>
    <br>
    <br>
  </div>

  <AboutCards/>

  <div>
    <br>
    <br>
  </div>

  <SocialsIcons/>

</template>
<script>
import ProjectCarousel from '~/components/ProjectCarousel.vue';
import SocialsIcons from "~/components/SocialsIcons.vue";
import Skills from "~/components/Skills.vue";
import AboutCards from "~/components/AboutCards.vue";

export default {
  components: {
    AboutCards,
    Skills,
    SocialsIcons,
    ProjectCarousel,
  },
};
</script>

<style>

.uni-link{
  color: antiquewhite;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover{
    color: #a7acb1;
  }
}
</style>