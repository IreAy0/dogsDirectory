export const SET_DOGS_LOADING = (state, data) => {
  state.loading = data;
};

export const SET_DOGS = (state, data) => {
  state.dogs = data;
};

export const SET_SINGLE_DOG = (state, data) => {
  state.singleDog = data;
}

export const SET_ERROR_MESSAGE = ( state, data) => {
    state.message = data
}