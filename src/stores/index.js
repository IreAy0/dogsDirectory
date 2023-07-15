// import { defineStore } from "pinia";
import { createLogger, createStore } from "vuex";
import dog from "@/stores/modules/dog";

// const debug = process.env.VUE_APP_ENVIRONMENT !== "production";

const modules = {
  dog
};

export default createStore({
  modules,
  // plugins: plugins,
});


