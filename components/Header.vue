<script setup lang="ts">

const {locale, setLocale} = useI18n()
const items = [
  [{
    label: 'Profile',

  }]
]

</script>

<template>
  <header class="header">
    <div class="logo-container">
      <div>
        <a href="https://iesco.my/">
          <img src="../public/images/isco-logo.png" alt="Logoo" class="logo"/>
        </a>
      </div>
    </div>
    <div class="project-name">
      <span class="project-name">{{ $t('projectName') }}</span>
      <span class="translate-verstion">
        <button @click="setLocale('en')">English</button>
        <button @click="setLocale('ar')">Arabic</button>
      </span>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--main-color);
  border-bottom: 1px solid #e0e0e0;
}

@media (max-width: 600px) {
  .project-name {
    display: none;
  }
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  width: 80px;
  margin-right: 10px;
}

.project-name {
  font-size: 24px;
  font-weight: normal;
  color: #eee;
}

.translate-verstion {
  margin: 0 10px;
}

.translate-verstion button {
  margin-left: 10px;
  padding: 1px 5px;
  border-radius: 10px 0;
  background-color: white;
  color: var(--main-color);
}

.translate-verstion button:hover {
  background-color: var(--main-color);
  color: white;
  transition: .3s;
}


</style>