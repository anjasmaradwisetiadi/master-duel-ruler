import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/ExampleComponent.vue';
import TierList from './pages/TierList.vue';
import CounterStyleDeck from './pages/CounterStyleDeck.vue';
import PlayStyleDeck from './pages/PlayStyleDeck.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: HomePage },
        { path: '/tier-list', component: TierList },
        { path: '/counter-style-deck', component: CounterStyleDeck },
        { path: '/play-style-deck', component: PlayStyleDeck },
      
    ]
  });
  
  export default router;

