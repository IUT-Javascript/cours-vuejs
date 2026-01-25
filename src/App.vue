<script setup>
import { ref } from 'vue';
import PannelItem from './components/PannelItem.vue';
import { getPannelItems } from './services/pannelService.js';
import WhoIAmForm from './components/WhoIAmForm.vue';

const pannels = ref(getPannelItems());
</script>

<template>
  <header>
    <h1 class="text-center">My Awesome Vue.js App</h1>
  </header>

  <main>
    <div class="wrapper w-25">
      <WhoIAmForm />
    </div>

    <div class="wrapper w-75">
      <PannelItem v-for="pannel in pannels" :key="pannel.title" v-bind="pannel" />
    </div>
  </main>
</template>

<style scoped>
</style>
