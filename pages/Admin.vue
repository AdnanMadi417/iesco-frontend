<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
});
useHead({
  meta: [
    {name: 'robots', content: 'noindex'}
  ]
})

</script>

<template>
  <div class="page-wrapper">
    <Header/>
    <div class="content-container">
      <ProjectDetails/>
    </div>
    <FooterAdminPage/>
  </div>
</template>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  flex: 1;
}

footer {
  margin-top: auto;
}
</style>
