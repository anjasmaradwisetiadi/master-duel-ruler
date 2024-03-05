import { createApp } from 'vue';
import routes from './routes.js';
import store from './store/index.js'
import App from './App.vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillEditor } from '@vueup/vue-quill';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';
import {collectionUrl} from'./urlCollect.js'; 

const options = {
    confirmButtonColor: '#0b365e',
    cancelButtonColor: '#ff7674',
};

const app = createApp(App);
app.use(routes);
app.use(store);
app.use(VueSweetalert2, options);
app.component('QuillEditor', QuillEditor)
app.mount('#app');

// Set the base URL for your API
// Replace with your Laravel backend URL
axios.defaults.baseURL = collectionUrl.baseUrlHead; 


// Enable CORS credentials
axios.defaults.withCredentials = false;