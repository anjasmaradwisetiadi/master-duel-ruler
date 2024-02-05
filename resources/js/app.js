import { createApp } from 'vue';
import routes from './routes.js';
import store from './store/index.js'
import App from './App.vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillEditor } from '@vueup/vue-quill';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
};

const app = createApp(App);
app.use(routes);
app.use(store);
app.use(VueSweetalert2, options);
app.component('QuillEditor', QuillEditor)
app.mount('#app');