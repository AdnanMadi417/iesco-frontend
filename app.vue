<script setup>
import {useI18n} from 'vue-i18n'

const {locale} = useI18n()

const localeFontClass = computed(() => (locale.value === 'ar' ? 'arabic-font' : 'english-font'))
const documentDirection = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
</script>
<template>
  <div :class="localeFontClass" :dir=documentDirection>
    <nuxt-page/>
    <UNotifications/>
  </div>
</template>
<style>

.arabic-font {
  font-family: 'Almarai', sans-serif;
}

.english-font {
  font-family: 'Nunito', sans-serif;
}

:root {
  --main-color: rgb(28, 100, 188);
  --main-hovor-color: rgb(28, 100, 188, 1.2);
  --background-color: rgb(92, 164, 76, 0.7);
  --hovor-color: rgb(92, 164, 76);
}
</style>