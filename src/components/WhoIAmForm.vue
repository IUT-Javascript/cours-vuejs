<script setup>
import { reactive, ref } from "vue";

// Déclaration de la variable réactive pour les erreurs
const errorName = ref('');
const errorAge = ref('');

// Déclaration des variables réactives pour le formulaire
const form = reactive({
  name: '',
  email: '',
  age: null
});
//const name = ref(''); --> v-model="name"
//const email = ref(''); --> v-model="email"
//const age = ref(18); --> v-model.number="age"


function handleSubmit() {
    // Handle form submission logic here
    console.log('Form submitted', form);
    errorAge.value = '';
    errorName.value = '';

    if (!form.name || !form.email) {
        errorName.value = 'Name and Email are required!';   
    }

    if (form.age < 18) {
        errorAge.value = 'Too young!';
    }

    if(errorName.value || errorAge.value) {
        return;
    }
}
</script>

<template>
    <p v-if="errorName" class="error">
        {{ errorName }}
    </p>
    <p v-if="errorAge" class="error">
        {{ errorAge }}
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
            <input id="age" v-model.number="form.age" />
        </div>

        <div class="form-group">
            <button type="submit">Click me</button>
        </div>
    </form>
</template>