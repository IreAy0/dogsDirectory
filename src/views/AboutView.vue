<script setup>
import { ref, onMounted} from 'vue';
import SingleImage from '../components/ListSection/SingleImage.vue';
import { useRouter, useRoute } from 'vue-router'
import Layout from '../components/Layout.vue';

</script>

<template>
  <Layout>
  <div class="grid place-items-center h-full">
    <SingleImage />
  </div>
</Layout>
</template>

<style lang="scss">
</style>
