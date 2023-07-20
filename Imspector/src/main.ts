import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'; // Importa el archivo CSS de Bootstrap
import 'bootstrap';

createApp(App)
  .use(router)
  .mount("#app");