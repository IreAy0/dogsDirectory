import { createApp } from "vue";
import stores from "@/stores";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.use(stores)
app.use(router);

app.mount("#app");
