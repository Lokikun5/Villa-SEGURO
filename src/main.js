import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueGoogleMaps from '@fawmi/vue-google-maps'

// const app = createApp(App);
// app.use(VueGoogleMaps, {
//     load: {
//         key: 'YOUR_API_KEY_COMES_HERE',
//     },
// }).mount('#app')

createApp(App).use(router).mount('#app')
