import Vue from 'vue';
import VueRouter from 'vue-router';
import publicRoutes from './moduls/public';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    ...publicRoutes
  ],
});

export default router;
