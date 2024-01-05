<template>

  <div class="about-container">
    <div class="about-card">
      <h2>
        {{ $t('about') }}
      </h2>

      <br>

      <div class="pb-3 flex justify-center items-center h-64 w-100">
        <img class="mx-auto" src="https://media.licdn.com/dms/image/D4D03AQH77RcAmKWCvA/profile-displayphoto-shrink_400_400/0/1691746859489?e=1709769600&v=beta&t=N3RSAIgLuP-8Yd4339Zss53YycPzNQEWwCxUj0zOkLk" alt="linkedInProfilePic">
      </div>
      <br>

      <p>
        {{ $t('aboutInfo.intro') }}
      </p>
      <p>
        {{ $t('aboutInfo.language_proficiency') }}
      </p>
      <p>
        {{ $t('aboutInfo.academic_interest') }}
      </p>
      <p>
        {{ $t('aboutInfo.hobbies') }} <NuxtLink class="gradient-text" :to="localePath('/projects')">{{ $t('projects') }}</NuxtLink>.
      </p>
      <p>
        {{ $t('aboutInfo.committee_role') }} <NuxtLink class="gradient-text" href="https://www.surreycompsoc.org/" target="_blank" rel="noopener noreferrer">{{ $t('computerSociety') }}</NuxtLink>.
      </p>
      <p>
        {{ $t('aboutInfo.lab_helper_experience') }}
      </p>
      <p>
        {{ $t('aboutInfo.contact_instruction_part1') }} <NuxtLink class="gradient-text" :to="localePath('/contact')">{{ $t('contact') }}</NuxtLink> {{ $t('aboutInfo.contact_instruction_part2') }}.
      </p>

    </div>
    <div class="about-card">
      <h2>
        {{ $t('myMostPopularProjects') }}
      </h2>
      <ProjectCarousel />
    </div>
  </div>


</template>

<script setup lang="ts">
const localePath = useLocalePath();

definePageMeta({
  title: 'About Cards',
  description: 'Cards Used to display about information and project carousel',
})

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
  //scale: 0.95;

  @media screen and (max-width: 800px) {
    width: 98%;
    margin: 1rem auto;
    padding: 2rem 0.5rem;
    box-sizing: border-box;
  }


  img{
    border-radius: 10px;
    width: 300px;
    object-fit: cover;

  }

  &:hover{
    transform: scale(1.01);
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