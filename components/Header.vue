<script setup lang="ts">
import type {Avatar} from '#ui/types'

const {locale, setLocale} = useI18n()
const items = [
  [{
    label: 'Profile',
  }]
]


const languages = [
  {
    id: 'en',
    label: 'English',
    avatar: {src: 'https://avatars.githubusercontent.com/u/739984?v=4'}
  },
  {
    id: 'ar',
    label: 'Arabic',
    avatar: {src: 'https://avatars.githubusercontent.com/u/904724?v=4'}
  }
]

const selectedLanguage = ref(languages[0])

watchEffect(() => {
  setLocale(selectedLanguage.value.id)
})

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
      <span class="translate-version">
        <USelectMenu v-model="selectedLanguage" :options="languages">
          <template #leading>
            <UAvatar v-bind="(selectedLanguage.avatar as Avatar)" size="2xs"/>
          </template>
        </USelectMenu>
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

.translate-version {
  margin: 0 10px 0 30px;
  display: inline-block;
  width: 125px;
}
</style>