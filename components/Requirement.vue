<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue'; // Import computed for reactive properties

const { t } = useI18n();

const items = computed(() => [
  {
    label: t('requirement1'),
    icon: 'i-heroicons-square-3-stack-3d',
    content: t('content1'),
    style: {
      color: 'rgb(28, 100, 188)',
      backgroundColor: 'rgb(28, 100, 188, .5)'
    }
  },
  {
    label: t('requirement2'),
    icon: 'i-heroicons-square-3-stack-3d',
    content: t('content2'),
    style: {
      color: 'rgb(28, 100, 188)',
      backgroundColor: 'rgb(28, 100, 188, .5)'
    }
  },
  {
    label: t('requirement3'),
    icon: 'i-heroicons-square-3-stack-3d',
    content: t('content3'),
    style: {
      color: 'rgb(28, 100, 188)',
      backgroundColor: 'rgb(28, 100, 188, .5)'
    }
  },
  {
    label: t('requirement4'),
    icon: 'i-heroicons-square-3-stack-3d',
    content: t('content4'),
    style: {
      color: 'rgb(28, 100, 188)',
      backgroundColor: 'rgb(28, 100, 188, .5)'
    }
  }
]);
</script>

<template>
  <div class="requirement-container">
    <div></div>
    <div class="requirement">
      <h1>{{ t('title') }}</h1>
      <h5>{{ t('instruction') }}</h5>
      <UAccordion :items="items"/>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.requirement-container h1 {
  text-align: center;
  padding: 30px 0;
  font-size: 26px;
  font-weight: bold;
  color: var(--main-color);
}

.requirement-container h5 {
  padding: 0 0 20px;
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.54);
}

.requirement-container {
  display: flex;
  justify-content: center;
  padding: 50px;
}

.requirement-container div {
  flex: 20%;
}

.requirement-container .requirement {
  flex: 60%;
}

@media (max-width: 800px) {
  .requirement-container {
    flex-direction: column;
    padding: 10px;
  }

  .requirement-container div {
    flex: 0;
  }

  .requirement-container .requirement {
    flex: 100%;
  }
}
</style>
