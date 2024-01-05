import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import Fontawesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//adding specific icons 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router)
.mount('#app')
