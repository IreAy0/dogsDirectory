<script setup>
import { useGetters, useActions, useStore } from "vuex-composition-helpers/dist";
import { ref } from "vue";

const { searchDogsByBreed } = useActions({
    searchDogsByBreed: "dog/searchDogsByBreed"
})

const { message } = useGetters({
    message: "dog/message"
})
const searchTerm = ref("")

const onSubmit = () => {
    searchDogsByBreed(searchTerm.value.toLocaleLowerCase().replace(' ', '-'))
}

</script>

<template>
  <section class="py-12 sm:py-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <p class="mt-5 capitalize text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                Dogs are angels sent to be our 
                <span class="relative inline-flex sm:inline">
                  <span class="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                  <span class="relative "> bestfriends </span>
              </span>
            </p>
            <form @submit.prevent="onSubmit" class="max-w-xl mx-auto mt-8 bg-white sm:bg-transparent lg:mt-12 rounded-xl">
              <div class="p-4 sm:p-2 sm:bg-white sm:border-2 sm:rounded-full border-gray-500 sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                  <div class="flex flex-col items-start sm:flex-row">
                      <div class="flex-1 w-full min-w-0">
                          <div class="relative text-gray-400 focus-within:text-gray-600">
                              <label for="email" class="sr-only"></label>
                              <input
                                    v-model="searchTerm"
                                  type="text"
                                  name="searchTerm"
                                  id="searchTerm"
                                  placeholder="Search by breed"
                                  class="block w-full px-4 py-4 text-base text-center focus:outline-none text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                                  
                              />
                          </div>
                      </div>

                      <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600 focus:bg-orange-600">
                          Search
                      </button>
                  </div>
              </div>
          </form>
          <p v-show="message == true" class="py-4 text-red-500"> Breed not found!!!</p>
        </div>
    </div>

</section>
</template>



<style lang="scss" scoped>

</style>