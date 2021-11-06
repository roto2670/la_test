import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './services/constants.js';
import * as services from './services/services.js';
import sweetalert from 'sweetalert2';


const app = createApp(App).use(router);

app.config.globalProperties.services = services;
app.config.globalProperties.sweetalert = sweetalert;

app.mount("#app");
