<template>
  <div class="containerDesign">
    <div class="chevron"></div>
    <div class="chevronOne"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>

.containerDesign {
  background-color: #eeeeee;
  padding:15px 0;
}

.chevron {
  --s: 5px;
  width: 100%;
  max-height:70px;
  aspect-ratio: 5/2;
  clip-path: polygon(0 0, 0 var(--s), 50% 100%, 100% var(--s), 100% 0, 50% calc(100% - var(--s)));
  background: #39701d;
}

.chevronOne {
  margin-top: -70px;
  --s: 5px;
  width: 100%;
  max-height:70px;
  aspect-ratio: 5/2;
  clip-path: polygon(0 100%, 0 calc(100% - var(--s)), 50% 0, 100% calc(100% - var(--s)), 100% 100%, 50% var(--s));
  background: #39701d;
}

</style>
