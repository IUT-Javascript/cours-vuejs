<script setup>
// Script Composition API en mode <script setup>
// Syntaxe moderne et plus simple pour définir la logique des composants

// Importe la fonction 'ref' pour créer une donnée réactive
// ref() crée une variable réactive qui s'actualise automatiquement si elle change
import { ref } from 'vue';

// Importe les sous-composants utilisés dans ce composant
import PannelItem from './components/PannelItem.vue';
import WhoIAmForm from './components/WhoIAmForm.vue';

// Importe la fonction service qui récupère les données
import { getPannelItems } from './services/pannelService.js';

// Crée une variable réactive 'pannels' initialisée avec les données du service
// La variable sera automatiquement mise à jour dans le template si elle change
const pannels = ref(getPannelItems());

// Variable réactive pour stocker les informations de l'utilisateur
// Initialisée à null (aucun utilisateur n'a encore soumis le formulaire)
const currentUser = ref(null);

/**
 * Fonction appelée quand le formulaire WhoIAmForm émet l'événement 'submitUser'
 * Reçoit les données de l'utilisateur et les stocke pour affichage
 */
function handleUserSubmit(userData) {
    // Stocke les données reçues du composant enfant
    currentUser.value = userData;
    console.log("Utilisateur inscrit:", userData);
}
</script>

<template>
  <header>
    <h1 class="text-center">My Awesome Vue.js App</h1>
  </header>

  <main>
    <div class="wrapper w-25">
      <!-- Composant du formulaire -->
      <!-- @submitUser : écoute l'événement 'submitUser' émis par WhoIAmForm -->
      <!-- handleUserSubmit($event) : reçoit les données du formulaire en paramètre -->
      <WhoIAmForm @submitUser="handleUserSubmit" />
      
      <!-- Affiche les informations de l'utilisateur si elles existent -->
      <!-- v-if : affiche ce bloc SEULEMENT si currentUser a une valeur -->
      <div v-if="currentUser" class="user-info">
        <h3>Informations utilisateur</h3>
        <p><strong>Nom:</strong> {{ currentUser.name }}</p>
        <p><strong>Email:</strong> {{ currentUser.email }}</p>
        <p><strong>Âge:</strong> {{ currentUser.age }} ans</p>
      </div>
    </div>

    <div class="wrapper w-75">
        <!-- <PannelItem v-for="pannel in pannels" :key="pannel.title" 
          :id="pannel.id"
          :title="pannel.title" 
          :description="pannel.description" 
          :image="pannel.image"
          :is-active="pannel.isActive" /> -->

      <!-- v-for : boucle sur le tableau 'pannels' pour créer une instance de PannelItem pour chaque élément -->
      <!-- :key : attribut obligatoire pour aider Vue à identifier les éléments (chaque clé doit être unique) -->
      <!-- v-bind="pannel" : transmet tous les propriétés de l'objet 'pannel' au composant enfant (raccourci) -->
      <PannelItem v-for="pannel in pannels" :key="pannel.title" v-bind="pannel" />
    </div>
  </main>
</template>

<style scoped>
</style>
