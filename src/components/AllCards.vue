<script setup>
import Loader from "./Loader.vue";
import { useGetters, useActions, useStore } from "vuex-composition-helpers/dist";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const store = useStore()
const route = useRouter()

const { dogs, loading, message } = useGetters({
 loading: "dog/loading",
 dogs: "dog/dogs",
 message: "dog/message"
});

const allDogs = ref(dogs)

const { selectSingleDog, getDogs } = useActions({
  selectSingleDog: "dog/selectSingleDog",
  getDogs: "dog/getDogs"
})

const goToSingleDog = (index, url) => {
  selectSingleDog(url)
  route.push(`about/${index+1}`)
}

onMounted(() => {
  if(allDogs.value.length == 0){
    getDogs()
  }
})


</script>

<template>
  <section class="text-gray-600 bg-slate-50 body-font">
    <div class="container px-5 py-10 mx-auto">
      <div v-if="allDogs.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -m-4">
        <div v-for="(img, index) in allDogs" :key="index + 1" class="w-full p-4">
          <button @click="goToSingleDog(index, img)" class="flex relative h-full">
            <img alt="gallery" :src="img"  class=" inset-0 shadow-2xl rounded-b-2xl  rounded-tr-2xl w-full h-full object-cover object-center" />
          </button>
        </div>
      </div>
      <div v-else>
        <Loader />
      </div>
      
    </div>
  </section>
</template>



<style lang="scss" scoped>

</style>