import axios from "axios"

export default {
  allDogs(){
    return axios.get('https://dog.ceo/api/breeds/image/random')
  },

  searchDogsByBreed(breed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
  }
}

