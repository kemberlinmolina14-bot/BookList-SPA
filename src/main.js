import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Importamos la configuración de rutas

createApp(App)
    .use(router) // Registramos Vue Router en la app
    .mount('#app')