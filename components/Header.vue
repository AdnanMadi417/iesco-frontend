<script setup lang="ts">

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
</style>