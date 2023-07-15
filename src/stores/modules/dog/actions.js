import dogs from "@/api/dogs";

export const  getDogs = async ({ commit }) => {
  let allData = []
  // const cache = await caches.open('my-cache');
  commit("SET_DOGS_LOADING", true);
  try {
    while (allData.length < 100) {
      const response = await dogs.allDogs();
      const data = response.data.message;
      allData.push(
        data,
      )
      if (allData.length == 100) {
        commit("SET_DOGS", allData);
        commit("SET_DOGS_LOADING", false);
      }
      }
  } catch (error) {
    return error
  }
         
};

export const searchDogsByBreed = async ({commit}, breed) => {
  commit("SET_DOGS_LOADING", true);
  try{
    const response = await dogs.searchDogsByBreed(breed)
    const data = response.data.message
    if (data.length > 0) {
      commit("SET_DOGS", data);
      commit("SET_DOGS_LOADING", false);
      commit("SET_ERROR_MESSAGE", false)
    }
  }
  catch(e) {
    commit("SET_DOGS_LOADING", false);
    commit("SET_ERROR_MESSAGE", true)
  }
  
    
}

export const selectSingleDog = ({commit}, data) => {
  commit("SET_SINGLE_DOG", data)
}
