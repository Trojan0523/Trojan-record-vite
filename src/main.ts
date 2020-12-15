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

window.onload = function () {
  setTimeout(() => window.scrollTo(0,200), 0);
}
// if(document.documentElement.clientWidth > 500) {
//   window.alert('请使用手机扫描二维码打开页面，已保证浏览效果');
//   const img = document.createElement('img');
//   img.src = '/qrcode.png';
//   img.style.position = 'fixed';
//   img.style.left = '50%';
//   img.style.top =  '50%';
//   img.style.transform = 'translate(-50%, -50%)';
//   img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
//   document.body.appendChild(img);
// }