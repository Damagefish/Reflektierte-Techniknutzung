// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import NamensEingabeView from '../views/NamensEingabeView.vue'
import LebensBereicheView from '../views/LebensBereicheView.vue';

import AspirationwahlView from '../views/AspirationwahlView.vue';
import BarChart from '../views/BarChart.vue'; 
import MainScreen from '../views/MainScreen.vue'; 
import MeilenSteineWählenView from '../views/MeilenSteineWählenView.vue'; 
import WochenAblaufView from '../views/WochenAblaufView.vue';
import CheckIn1View from '../views/CheckIn1View.vue';
import CheckIn2View from '../views/CheckIn2View.vue';

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
    name: 'AspirationwahlView',
    component: AspirationwahlView
  },
  {
    path: '/barchart', 
    name: 'barchart',
    component: BarChart 
  },
  {
    path: '/mainscreen', 
    name: 'mainscreen',
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
    path: '/CheckIn2View', 
    name: 'CheckIn2View',
    component: CheckIn2View
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
})

export default router
