<template>
  <div>
    <!-- Clickable div to show notification -->
    <div class="clickable-div" @click="showNotification">
      Click me to show the notification
    </div>

    <!-- Div that will be shown/hidden based on the boolean property -->
    <div class="notification-div" v-if="isNotificationVisible">
      Thank you for clicking! This is the notification.
    </div>
  </div>
</template>

<script setup>

import {ref} from 'vue';

const isNotificationVisible = ref(false);

const showNotification = () => {
  isNotificationVisible.value = true;
};
</script>

<style scoped>
.clickable-div {
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-bottom: 10px;
}

.notification-div {
  padding: 15px;
  background-color: #4CAF50;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
}
</style>

<style scoped>

</style>