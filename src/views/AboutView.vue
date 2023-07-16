<script setup>
import { ref, onMounted} from 'vue';
import SingleImage from '../components/ListSection/SingleImage.vue';
import { useRouter, useRoute } from 'vue-router'
import Layout from '../components/Layout.vue';

</script>

<template>
  <Layout>
    <div class="container mx-auto py-3">
      <router-link to="/" > <svg xmlns="http://www.w3.org/2000/svg" class="inline-flex" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6Z"/></svg> Go home</router-link>
    </div>
    
  <div class="grid place-items-center h-full">
    <SingleImage />
  </div>
</Layout>
</template>

<style lang="scss">
</style>
