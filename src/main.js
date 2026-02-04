// ============================================
// Point d'entrée de l'application Vue.js
// ============================================

// Importe les styles CSS globaux
import './assets/main.css'

// Import des fonctionnalités principales de Vue.js
// createApp : fonction qui crée une instance d'application
import { createApp } from 'vue'

// Import du composant racine (App.vue)
// Tous les autres composants seront enfants de ce composant
import App from './App.vue'

// Crée une instance de l'application Vue avec le composant App comme racine
// puis la monte dans l'élément HTML avec l'id 'app' (voir index.html)
createApp(App).mount('#app')
