<script setup>
defineProps({
    id: Number,
    title: String,
    description: String,
    image: String,
    isActive: Boolean
})
</script>

<template>
    <!-- if(isActive) then class="pannel-item w-100 active" 
         if(description) then class="pannel-item w-100 hasDesc" -->
    <div class="pannel-item w-100" :class="{ active: isActive, hasDesc: description }">
        <h2>{{ title }}</h2>

        <img v-if="image" :src="image" :alt="title" />

        <p>{{ description }}</p>
    </div>
</template>