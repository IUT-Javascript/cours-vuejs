<script setup>
// Importe les fonctionnalités réactives de Vue.js:
// - reactive() : crée un objet réactif (pour objets complexes)
// - ref() : crée une variable réactive (pour valeurs simples)
import { reactive, ref } from "vue";

// Variables réactive pour les messages d'erreur
// Initialisées à vide (pas d'erreur au départ)
const errorName = ref('');
const errorAge = ref('');

// Objet réactif contenant les données du formulaire
// reactive() est utilisé pour un objet avec plusieurs propriétés
// Ces données se mettent à jour automatiquement via v-model
const form = reactive({
  name: '',
  email: '', 
  age: null
});
//const name = ref(''); --> v-model="name"
//const email = ref(''); --> v-model="email"
//const age = ref(18); --> v-model.number="age"


// Définit un événement personnalisé que ce composant peut émettre
// emit() permet de communiquer vers le composant parent
// On définit "submitUser" comme événement avec les données en paramètre
const emit = defineEmits(['submitUser']);

/**
 * Fonction appelée à la soumission du formulaire
 * Valide les données et affiche les erreurs si nécessaire
 */
function handleSubmit() {
    // Affiche l'objet form dans la console (utile pour déboguer)
    console.log("Form submitted", form);
    errorAge.value = "";
    errorName.value = "";

    // Validation 1 : Vérifier que le nom et l'email sont remplis
    // !form.name retourne true si le champ est vide
    if (!form.name || !form.email) {
        errorName.value = "Name and Email are required!";
    }

    // Validation 2 : Vérifier que l'utilisateur a au moins 18 ans
    // Note: v-model.number convertit la valeur en nombre
    if (form.age < 18) {
        errorAge.value = "Too young!";
    }

    if(errorName.value || errorAge.value) {
        // Si une erreur existe, on arrête la soumission
        console.log("❌ Formulaire invalide!", { errorName: errorName.value, errorAge: errorAge.value });
        return;
    }
    
    // Le formulaire est valide à ce stade
    console.log("✅ Formulaire valide!", form);
    
    // Émet l'événement 'submitUser' avec les données du formulaire
    // Le composant parent (App.vue) peut écouter cet événement avec @submitUser
    emit('submitUser', {
        name: form.name,
        email: form.email,
        age: form.age
    });
    
    // Réinitialise le formulaire après une soumission réussie
    form.name = '';
    form.email = '';
    form.age = null;
}
</script>

<template>    

    <!-- v-if : affiche le message d'erreur SEULEMENT s'il y a du contenu dans 'errorName' -->
    <p v-if="errorName" class="error">
        <!-- {{ errorName }} : affiche la valeur de la variable error (interpolation) -->
        {{ errorName }}
    </p>
    <p v-if="errorAge" class="error">
        {{ errorAge }}
    </p>

    <!-- @submit.prevent : écoute l'événement 'submit' et appelle handleSubmit() -->
    <!-- .prevent : empêche le rechargement de page (comportement par défaut) -->
    <form  @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="name">Name : </label>
            <!-- v-model : liaison bidirectionnelle entre l'input et form.name -->
            <!-- Les changements dans l'input mettent à jour form.name et vice-versa -->
            <input type="text" id="name" v-model="form.name" />
        </div>
        
        <div class="form-group">
            <label for="email">Email : </label>
            <!-- v-model lie cet input à form.email -->
            <input type="text" id="email" v-model="form.email" />
        </div>        
        
        <div class="form-group">
            <label for="age">Age : </label>
            <!-- v-model.number : lie l'input à form.age ET convertit en nombre -->
            <!-- Important pour les comparaisons numériques (age < 18) -->
            <input type="text" id="age" v-model.number="form.age" />
        </div>

        <div class="form-group">
            <!-- type="submit" : déclenche l'événement @submit.prevent du formulaire -->
            <button type="submit">Click me</button>
        </div>
    </form>
</template>