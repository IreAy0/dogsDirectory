
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useActions, useGetters, useState } from 'vuex-composition-helpers/dist';
import { Cloudinary} from "@cloudinary/url-gen";
import { cartoonify, grayscale, sepia } from "@cloudinary/url-gen/actions/effect";


const props = defineProps(['id', 'url'])

const router = useRouter()

const { singleDog } = useGetters({
 singleDog: "dog/singleDog"
});

let dogImage = ref(singleDog)
let oldImage = ref("")
let transforming = ref(false)
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME 
  }
});

const { selectSingleDog } = useActions({
  selectSingleDog: "dog/selectSingleDog"
})

const transformImage = (img) => {
  const cldSrc = cld.image(img)
  .effect(cartoonify())
  .effect(grayscale())
  .effect(sepia())
  .setDeliveryType("fetch")
  .toURL();
  oldImage.value = img
  selectSingleDog(cldSrc)
  transforming.value = true

}

const revert = (img) => {
  selectSingleDog(img)
  transforming.value = false
}

onMounted(() =>{
    if (singleDog.value == null) {
      router.push('/')
    }
})

</script>


<template>
  <div class="flex flex-col sm:flex-row gap-y-4 items-center">
    <img :src="dogImage" class="w-72 h-72 object-cover rounded-lg mr-4" alt="dog-image">
    <button v-if="transforming !== true" @click="transformImage(dogImage)" :disabled="transforming == true" class="bg-[#f6a93f] transform delay-150 duration-300 ease-in-out hover:bg-[#ff9d04] text-white font-bold py-2 px-4 rounded">
     Click Me!!
    </button>
    
    <button v-else @click="revert(oldImage)" :disabled="!dogImage.includes('cloudinary')" class="bg-[#f6a93f] transform delay-150 duration-300 ease-in-out hover:bg-[#ff9d04] text-white font-bold py-2 px-4 rounded">See Original</button>
  </div>
</template>


<style lang="scss" scoped>

</style>