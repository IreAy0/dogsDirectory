import dogs from "@/api/dogs";

export const  getDogs = async ({ commit }) => {
  let allData = []
  // const cache = await caches.open('my-cache');
  commit("SET_DOGS_LOADING", true);
  try {
    for (let i = 0; i < 100; i++) {
      const response = await dogs.allDogs();
      const json = await response.data.message;
        allData.push(json);
        commit("SET_DOGS", [...allData]);
        commit("SET_DOGS_LOADING", false);
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
