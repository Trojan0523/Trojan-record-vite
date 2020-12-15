import {createRouter, createWebHistory} from 'vue-router';
import Money from "../views/Money.vue";
import Labels from "../views/Labels.vue";
import Statistics from "../views/Statistics.vue";
import NotFound from "../views/NotFound.vue";
import EditLabel from "../views/EditLabel.vue";


const router = createRouter({
  // base url for deploying website(program name)
  history: createWebHistory('/record_preview/'),
  routes: [
    {path: '/', redirect: {name: 'Money'}},
    {path: '/money', component: Money, name: 'Money'},
    {path: '/labels', component: Labels, name: 'labels'},
    {path: '/labels/edit/:id', component: EditLabel},
    {path: '/statistics', component: Statistics, name: 'statistics'},
    {path: '/:pathMatch(.*)', component: NotFound, name: 'NotFound'}
  ]
})

export default router;