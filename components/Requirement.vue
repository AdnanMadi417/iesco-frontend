<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {computed} from 'vue';

const {t} = useI18n();

const items = computed(() => [
  {
    label: t('requirement1'),
    content: t('content1'),
    style: {
      color: '#093a76',
      backgroundColor: 'rgb(241, 244, 249)',
      padding: '1rem',
      margin: '0',
      borderRadius: '0',
      borderBottom: '1px solid #e0e0e0',
      fontWeight: 'bold',
    }
  },
  {
    label: t('requirement2'),
    content: t('content2'),
    style: {
      color: '#093a76',
      backgroundColor: 'rgb(241, 244, 249)',
      padding: '1rem',
      margin: '0',
      borderRadius: '0',
      borderBottom: '1px solid #e0e0e0',
      fontWeight: 'bold',
    }
  },
  {
    label: t('requirement3'),
    content: t('content3'),
    style: {
      color: '#093a76',
      backgroundColor: 'rgb(241, 244, 249)',
      padding: '1rem',
      margin: '0',
      borderRadius: '0',
      borderBottom: '1px solid #e0e0e0',
      fontWeight: 'bold',
    }
  },
  {
    label: t('requirement4'),
    content: t('content4'),
    style: {
      color: '#093a76',
      backgroundColor: 'rgb(241, 244, 249)',
      padding: '1rem',
      margin: '0',
      borderRadius: '0',
      borderBottom: '1px solid #e0e0e0',
      fontWeight: 'bold',
    }
  }
]);
</script>

<template>
  <div class="requirement-container">
    <div></div>
    <div class="requirement">
      <h1>{{ t('title') }}</h1>
      <UAccordion :items="items" class="box"/>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.requirement-container h1 {
  text-align: center;
  padding: 25px 0;
  font-size: 32px;
  font-weight: normal;
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
  flex: 15%;
}

.requirement-container .requirement {
  flex: 70%;
}

.box {
  box-shadow: rgba(149, 157, 165, 0.1) 0 8px 24px;
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
