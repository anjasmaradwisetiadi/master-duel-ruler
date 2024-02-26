import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/tier-list' },
        { path: '/dashboard', component: () => import('./components/ExampleComponent.vue')},
        { path: '/tier-list', component: () => import('./pages/TierList.vue'), meta: {requiresAuth: true} },
        { path: '/counter-style-deck', component: () => import('./pages/CounterStyleDeck.vue'), meta: {requiresAuth: true} },
        { path: '/counter-style-deck/:slug', component: () => import('./pages/CounterStyle/CounterStyleDetail.vue'), meta: {requiresAuth: true} },
        { path: '/counter-style-deck/create', component: () => import('./pages/CounterStyle/CreateCounterStyleDeck.vue'), meta: {requiresAuth: true} },
        { path: '/counter-style-deck/:slug/edit', component: () => import('./pages/CounterStyle/CreateCounterStyleDeck.vue'), meta: {requiresAuth: true} },
        { path: '/detail-one-card/:name', component: () => import('./pages/DetailOneCard/DetailOneCard.vue'), meta: {requiresAuth: true} },
        { path: '/play-style-deck', component: () => import('./pages/PlayStyleDeck.vue'), meta: {requiresAuth: true} },
        { path: '/play-style-deck/create', component: () => import('./pages/PlayStyle/CreatePlayStyleDeck.vue'), meta: {requiresAuth: true} },
        { path: '/play-style-deck/:slug', component: () => import('./pages/PlayStyle/PlayStyleDetail.vue'), meta: {requiresAuth: true} },
        { path: '/play-style-deck/:slug/edit', component: () => import('./pages/PlayStyle/CreatePlayStyleDeck.vue'), meta: {requiresAuth: true} },
        { path: '/builder-deck/:slug', component: () => import('./pages/DeckBuilder/DeckBuilderDetail.vue'), meta: {requiresAuth: true} },
        { path: '/about', component: () => import('./pages/About.vue'), meta: {requiresAuth: true} },
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

