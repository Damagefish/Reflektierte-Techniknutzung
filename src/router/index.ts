import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store';

import NamensEingabeView from '../views/NamensEingabeView.vue'
import LebensBereicheView from '../views/LebensBereicheView.vue';

import AspirationwahlView from '../views/AspirationwahlView.vue';
import BarChart from '../views/BarChart.vue'; 
import MainScreen from '../views/MainScreen.vue'; 
import MeilenSteineWählenView from '../views/MeilenSteineWählenView.vue'; 
import WochenAblaufView from '../views/WochenAblaufView.vue';
import CheckIn1View from '../views/CheckIn1View.vue';

import BackgroundView from '@/views/BackgroundView.vue'; // Stellen Sie sicher, dass der Pfad korrekt ist
import KalenderView from '@/views/KalenderView.vue'; // Passe den Pfad entsprechend an

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/',
    name: 'NamensEingabeView',
    component: NamensEingabeView
  },
  
  {
    path: '/LebensBereicheView',
    name: 'LebensBereicheView',
    component: LebensBereicheView
  },
  {
    path: '/AspirationwahlView',
    name: 'AspirationsWahlView',
    component: AspirationwahlView
  },
  {
    path: '/barchart', 
    name: 'barchart',
    component: BarChart 
  },

  {
    path: '/mainscreen', 
    name: 'MainScreen',
    component: MainScreen 
},


  {
    path: '/WochenAblaufView', 
    name: 'WochenAblaufView',
    component: WochenAblaufView 
  },

  {
    path: '/CheckIn1View', 
    name: 'CheckIn1View',
    component: CheckIn1View 
  },
  
  {
    path: '/BackgroundView',
    name: 'BackgroundView',
    component: BackgroundView,
  },
  
  {
    path: '/KalenderView',
    name: 'KalenderView',
    component: KalenderView,
  },

  {
    path: '/meilensteine-waehlen',
    name: 'meilensteine-waehlen',
    component: MeilenSteineWählenView
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const currentScreen = store.state.currentScreen;

  if (currentScreen === 'NamensEingabeView' && to.name !== 'NamensEingabeView') {
    next({ name: 'NamensEingabeView' }); 
  }
  else if (currentScreen === 'MainScreen' && to.name !== 'MainScreen') {
    next({ name: 'MainScreen' }); 
  }
  else {
    next();
  }
});


export default router
