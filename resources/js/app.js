import { createApp } from 'vue';
import routes from './routes.js';
import createStore from './store/index.js'
import App from './App.vue';

const app = createApp(App);

app.use(routes).use(createStore);
app.mount('#app');