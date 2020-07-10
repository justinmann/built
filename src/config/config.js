import React from 'react'
import Loadable from 'react-loadable'
import getMenuItems from './menuItems'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'
import parseLanguages from 'rmw-shell/lib/utils/localeTools'

const Loading = () => <LoadingComponent />

const LPAsync = Loadable({
  loader: () => import('../../src/pages/LandingPage'),
  loading: Loading,
})

const config = {
  firebase_config: {
    apiKey: "AIzaSyABMNzrcUScVLTH4GH2cHiLdOVsfEZFlbo",
    authDomain: "built-8f8b6.firebaseapp.com",
    databaseURL: "https://built-8f8b6.firebaseio.com",
    projectId: "built-8f8b6",
    storageBucket: "built-8f8b6.appspot.com",
    messagingSenderId: "910971953299",
    appId: "1:910971953299:web:3cb2f2825f97e64d46ed66",
    measurementId: "G-ZKF4YKPEG8"
  },
  firebase_config_devp: {
    apiKey: "AIzaSyABMNzrcUScVLTH4GH2cHiLdOVsfEZFlbo",
    authDomain: "built-8f8b6.firebaseapp.com",
    databaseURL: "https://built-8f8b6.firebaseio.com",
    projectId: "built-8f8b6",
    storageBucket: "built-8f8b6.appspot.com",
    messagingSenderId: "910971953299",
    appId: "1:910971953299:web:3cb2f2825f97e64d46ed66",
    measurementId: "G-ZKF4YKPEG8"
  },
  firebase_config_dev: {
    apiKey: "AIzaSyABMNzrcUScVLTH4GH2cHiLdOVsfEZFlbo",
    authDomain: "built-8f8b6.firebaseapp.com",
    databaseURL: "https://built-8f8b6.firebaseio.com",
    projectId: "built-8f8b6",
    storageBucket: "built-8f8b6.appspot.com",
    messagingSenderId: "910971953299",
    appId: "1:910971953299:web:3cb2f2825f97e64d46ed66",
    measurementId: "G-ZKF4YKPEG8"
  },
  firebase_providers: [
    'google.com',
    'facebook.com',
    'twitter.com',
    'github.com',
    'password',
    'phone',
  ],
  googleMaps: {
    apiKey: 'AIzaSyByMSTTLt1Mf_4K1J9necAbw2NPDu2WD7g',
  },
  initial_state: {
    themeSource: {
      isNightModeOn: true,
      source: 'light',
    },
    locale: parseLanguages(['en', 'bs', 'es', 'ru', 'de', 'it', 'fr'], 'en'),
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
  landingPage: LPAsync,
}

export default config
