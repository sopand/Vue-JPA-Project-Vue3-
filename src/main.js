import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/modules/loginStore';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
const app = createApp(App);
app.component('QuillEditor', QuillEditor);
app.use(router);
app.use(store);
app.mount('#app');
