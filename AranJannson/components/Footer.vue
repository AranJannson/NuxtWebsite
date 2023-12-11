<template>
  <div>
    <NuxtPage />

    <footer class="mainfooter" role="contentinfo" style="padding-top: 0px;">
      <div class="footer-middle">
        <div class="container">
          <div class="row" style="padding-bottom: 30px;">
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>Pages</h4>
                <ul class="list-unstyled">
                  <li> <a href="index.html"> Home </a> </li>
                  <li> <a href="socials.html">Socials</a></li>
                  <li> <a href="#">  </a></li>
                  <li> <a href="#"></a></li>
                  <li> <a href="#"></a></li>
                  <li> <a href="#"></a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>Important Information</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Privacy Policy</a> </li>
                  <li><a href="#"></a> </li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4> External Links </h4>
                <ul class="list-unstyled">
                  <li> <a href="#"> </a> </li>
                  <li> <a href="#"> </a> </li>
                  <li> <a href="#"></a> </li>
                  <li> <a href="#"> </a> </li>
                  <li> <a href="#"></a> </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h4 style="color: cornsilk;">Powered by TwentyDimension</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 copy">
              <p style="text-align: center;">Icons From <a style="text-decoration: underline; color: #3B5998;" target="_blank" href="https://material.io/resources/icons/?style=round">Google</a> and <a style="text-decoration: underline; color: #3B5998;" target="_blank" href="https://icons8.com/">Icons8</a></p>
              <p class="text-center">  Copyright  &copy; {{currentYear}} Aran Jannson - All Rights Reserved. </p>
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