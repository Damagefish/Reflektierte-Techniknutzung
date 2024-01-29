import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Import fonts
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

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
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add(faArrowRight)
library.add(faCircleArrowRight)
library.add(faCircleArrowLeft)
library.add(faHome)
library.add(faClock)
library.add(faChartColumn)
library.add(faCirclePlus)
library.add(faCircleCheck)
library.add(faCalendar)
library.add(faTrash)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(store).mount('#app')