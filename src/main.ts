import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import Nav from "./components/Nav.vue";
import Layout from "./components/Layout.vue";

const app = createApp(App);
app.component('Nav', Nav);
app.component('Layout', Layout);

app.use(router);
app.mount('#app')
