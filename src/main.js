import Vue from 'vue'
import App from './App.vue'
import { router } from "./router"
import store from "./store"
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(CKEditor);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})