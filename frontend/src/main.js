import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import VueCookies from 'vue-cookies'
 
library.add(faUserSecret)

createApp(App)
  .component("fa", FontAwesomeIcon)
  .provide('VueCookies', VueCookies)
  .mount("#app")
