<script setup>
// defineProps() : Déclare les propriétés (props) que le composant enfant reçoit du parent
// Les props sont des données en lecture seule transmises du parent au enfant
defineProps({
    id: Number,
    title: String,
    description: String,
    image: String,
    isActive: Boolean
})
</script>

<template>
    <!-- :class="{ active: isActive }" : Active la classe CSS 'active' si isActive est true (binding de classe dynamique) -->
    <div class="pannel-item w-100" :class="{ active: isActive, hasDesc: description }">
        <!-- Affiche le titre du panneau (interpolation: {{ variable }}) -->
        <h2>{{ title }}</h2>

        <!-- v-if : affiche l'image SEULEMENT si la propriété 'image' a une valeur -->
        <!-- :src et :alt : lient les propriétés Vue aux attributs HTML (data binding) -->
        <img v-if="image" :src="image" :alt="title" />

        <p>{{ description }}</p>
    </div>
</template>