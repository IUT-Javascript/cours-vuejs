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
    <div class="pannel-item w-100" :class="{ active: isActive }">
        <h2>{{ title }}</h2>

        <img v-if="image" :src="image" :alt="title" />

        <p>{{ description }}</p>
    </div>
</template>