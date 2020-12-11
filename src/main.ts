import { createApp } from 'vue'
import App from './App.vue';
import {store} from "./store";
import router from "./router";
import Nav from "./components/Nav.vue";
import Layout from "./components/Layout.vue";
import Icon from "./components/Icon.vue";
import Button from "./components/Button.vue";

const app = createApp(App);
app.component('Icon', Icon);
app.component('Nav', Nav);
app.component('Layout', Layout);
app.component('Button', Button);

app.use(store);
app.use(router);
app.mount('#app')
