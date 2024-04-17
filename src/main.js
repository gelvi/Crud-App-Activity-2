import { createApp } from 'vue';
import App from './App.vue';
import store from './store.js'; // Adjust the path as needed

createApp(App)
  .use(store)
  .mount('#app');
