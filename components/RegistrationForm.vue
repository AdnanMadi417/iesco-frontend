<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const localePath = useLocalePath()
const router = useRouter()
const showPopup = ref(false)

watchEffect(() => {
  if (showPopup.value) {
    router.push(localePath('/congrats'))
  }
})
</script>

<template>
  <section class="registration-section">
    <div class="container">
      <h2 class="title">Online Registration System</h2>

      <div class="registration-form">
        <div class="form-container">
          <RegistrationFromValidation @show-success="showPopup = true" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.registration-section {
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 960px;
  text-align: center;
}

.title {
  font-size: 2rem;
  color: var(--main-color);
  font-weight: 700;
  margin-bottom: 2rem;
}

.registration-form {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 3rem 2rem;
  box-sizing: border-box;
  text-align: left;
}

.form-container {
  width: 100%;
}

button {
  background-color: var(--main-color);
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #fff;
  color: var(--main-color);
  border: 1px solid var(--main-color);
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-top: 6px;
  margin-bottom: 1rem;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .registration-form {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 1.5rem;
  }
}
</style>
