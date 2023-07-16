<script setup>
import Hero from './Hero.vue'
import { useGetters, useActions } from "vuex-composition-helpers/dist";
import { onMounted, isProxy, toRaw, ref  } from "vue";
import AllCards from './AllCards.vue';

const searchTerm = ref(null)

const { dogs } = useGetters({
 
  dogs: "dog/dogs",
 
});

const { getDogs } = useActions({ getDogs: "dog/getDogs" });




</script>

<template>
  <Hero />
  <AllCards />

</template>
