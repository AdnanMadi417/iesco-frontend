<script setup lang="ts">
const toast = useToast()

function onCallback() {
  alert('Notification expired!')
}
</script>

<template>
  <div class="notification">
    <div class="main-container">
      <div class="container">
        <div class="icon">
          <UIcon name="ep-success-filled"/>
        </div>
        <div class="content">
          <h1>{{ $t('congratulations') }}</h1>
          <h2>{{ $t('application_submitted') }}</h2>
          <hr class="m-2">
          <p v-html="$t('submission_thank_you')"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.notification {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
}

@media (max-width: 800px) {
  .notification {
    display: block;
    width: 90%;
  }
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
}

.main-container .container .icon {
  font-size: 10rem;
  color: var(--main-color);
}

.main-container .container h2,
.main-container .container h1 {
  text-transform: capitalize;
  font-size: 1.5rem;
  color: var(--main-color);
}

.main-container .container p {
  font-size: 1rem;
  color: var(--main-color);
  text-align: justify;
  padding: 30px 0;
  line-height: 20px;
  margin: 0 40px;
}

</style>