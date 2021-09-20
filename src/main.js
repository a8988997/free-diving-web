import { createApp } from 'vue'
import {Field, Form, ErrorMessage, defineRule, configure, } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import AOS from 'aos'
import 'aos/dist/aos.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'
import {currency} from './methods/filters'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true,
})

const app = createApp(App)
app.config.globalProperties.$filters = {
    currency,
};
setLocale('zh_TW');
app.use(AOS)
app.use(VueAxios, axios)
app.use(router)
app.component('Loading',Loading)
app.component('Field',Field)
app.component('ErrorMessage',ErrorMessage)
app.component('Form',Form)
app.mount('#app')



