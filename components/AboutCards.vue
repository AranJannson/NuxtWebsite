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
        Current Project
      </h2>

      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
        Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
        Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
        Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum,
        elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
        Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus,
        tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
        accumsan porttitor, facilisis luctus, metus
      </p>
      <div>
        <ul>
          <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
          <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
          <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
          <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
        </ul>
      </div>


      <div class="pt-3">
        <button class="read-more">Read More</button>
      </div>

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
    width: auto;
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