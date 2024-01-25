import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Fontawesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//adding specific icons 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faChartColumn } from '@fortawesome/free-solid-svg-icons'


library.add(faArrowRight)
library.add(faCircleArrowRight)
library.add(faCircleArrowLeft)
library.add(faHome)
library.add(faClock)
library.add(faChartColumn)
library.add(faCirclePlus)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

