<script setup>
import { reactive, ref } from "vue";

// Déclaration de la variable réactive pour les erreurs
const error = ref("");

// Déclaration des variables réactives pour le formulaire
const form = reactive({
  name: '',
  email: '',
  age: null
});

function handleSubmit() {
    // Handle form submission logic here
    console.log("Form submitted", form);
    error.value = "";

    if (!form.name || !form.email) {
        error.value = "Name and Email are required!";
        return;
    }

    if (form.age < 18) {
        error.value = "Too young!";
        return;
    }
}
</script>

<template>
    <p v-if="error" class="error">
        {{ error }}
    </p>

    <form  @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="name">Name : </label>
            <input type="text" id="name" v-model="form.name" />
        </div>
        
        <div class="form-group">
            <label for="email">Email : </label>
            <input type="text" id="email" v-model="form.email" />
        </div>        
        
        <div class="form-group">
            <label for="age">Age : </label>
            <input type="text" id="age" v-model.number="form.age" />
        </div>

        <div class="form-group">
            <button type="submit">Click me</button>
        </div>
    </form>
</template>