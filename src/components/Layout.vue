<script setup>
import Nav from "../components/HeaderSection/Nav.vue";


</script>


<template>
  <div class="flex flex-col h-screen ">
    <!-- <header class="bg-gray-900 text-white py-4 px-6"> -->
      <Nav />
    <!-- </header> -->
    <main class="flex-1 bg-slate-50 ">
      <slot></slot>
    </main>
    <footer class="bg-[#f6fffa]  py-4 md:py-6">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <p>&copy;  My Awesome Company</p>
      </div>
      
    </footer>
  </div>
</template>



<style lang="scss" scoped>

</style>