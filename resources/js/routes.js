import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/ExampleComponent.vue';
import TierList from './pages/TierList.vue';
import CounterStyleDeck from './pages/CounterStyleDeck.vue';
import CounterStyleDetail from './pages/CounterStyle/CounterStyleDetail.vue';
import CreateCounterStyleDeck from './pages/CounterStyle/CreateCounterStyleDeck.vue';
import PlayStyleDeck from './pages/PlayStyleDeck.vue';
import LoginRegister from './pages/LoginRegister.vue';
import store from './store/index.js';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/tier-list' },
        { path: '/dashboard', component: () => import('./components/ExampleComponent.vue')},
        { path: '/tier-list', component: () => import('./pages/TierList.vue'), meta: {requiresAuth: true} },
        { path: '/counter-style-deck', component: () => import('./pages/CounterStyleDeck.vue'), meta: {requiresAuth: true} },
        // { path: '/counter-style-deck/detail', component: CounterStyleDetail },
        { path: '/counter-style-deck/:slug', component: () => import('./pages/CounterStyle/CounterStyleDetail.vue'), meta: {requiresAuth: true} },
        { path: '/counter-style-deck/create', component: () => import('./pages/CounterStyle/CreateCounterStyleDeck.vue'), meta: {requiresAuth: true} },
        { path: '/counter-style-deck/:slug/edit', component: () => import('./pages/CounterStyle/CreateCounterStyleDeck.vue'), meta: {requiresAuth: true} },
        { path: '/play-style-deck', component: () => import('./pages/PlayStyleDeck.vue'), meta: {requiresAuth: true} },
        { path: '/login', component: () => import('./pages/LoginRegister.vue'),  meta: {requiresUnauth: true} },
        { path: '/register', component: () => import('./pages/LoginRegister.vue'), meta: {requiresUnauth: true}  },
    ]
  });
  
  router.beforeEach(function(to, _, next) {
    const getToken = store?.getters?.getterResponseAuth?.token;
    const auth = to.meta.requiresAuth; 
    const unauth = to.meta.requiresUnauth; 
    
    if (auth && !getToken) {
      next('/login');
    } else if (unauth && getToken) {
      next('/tier-list');
    } else {
      next();
    }
  });

  
  export default router;

