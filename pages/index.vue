<script setup lang="ts">
import Card from "~/components/Card.vue";

useHead({
  title: 'IESCO Scholarship Application Form'
})
</script>

<template>
  <div class="home-container">

    <Header/>
    <Card/>
    <Requirement/>
    <RegistrationForm/>
    <Footer/>
  </div>
</template>

<style scoped>
</style>