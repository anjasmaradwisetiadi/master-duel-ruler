import { createApp } from 'vue';
import routes from './routes.js';
import store from './store/index.js'
import App from './App.vue';

const app = createApp(App);

app.use(routes);
app.use(store);
app.mount('#app');