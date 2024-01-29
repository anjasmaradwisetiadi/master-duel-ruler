import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/ExampleComponent.vue';
import TierList from './pages/TierList.vue';
import CounterStyleDeck from './pages/CounterStyleDeck.vue';
import CounterStyleDetail from './pages/CounterStyleDetail.vue';
import CreateCounterStyleDeck from './pages/CounterStyle/CreateCounterStyleDeck.vue';
import PlayStyleDeck from './pages/PlayStyleDeck.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/tier-list' },
        { path: '/dashboard', component: HomePage },
        { path: '/tier-list', component: TierList },
        { path: '/counter-style-deck', component: CounterStyleDeck },
        { path: '/counter-style-deck/detail', component: CounterStyleDetail },
        { path: '/counter-style-deck/create', component: CreateCounterStyleDeck },
        { path: '/play-style-deck', component: PlayStyleDeck },
    ]
  });
  
  export default router;

