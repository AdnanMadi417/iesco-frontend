<script setup lang="ts">
import type {FormSubmitEvent} from '#ui/types'
import {z} from "zod";

useHead({
  title: 'Admin Login'
})

let {$axios} = useNuxtApp()
const api = $axios()
const toast = useToast()

const schema = z.object({
  username:
      z.string().min(4, 'Username must be at least 8 characters long'),
  password:
      z.string().min(4, 'Password must be at least 8 characters long')
})

type Schema = z.output<typeof schema>;

const state = reactive({
  username: undefined,
  password: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const payload = event.data
  const token = useCookie('token', {maxAge: 28800});

  try {
    const response = await api.post('/login/', payload);

    token.value = response.data.access;
    toast.add({title: `Login successful! Redirecting to dashboard.`})

    setTimeout(async () => {
      await navigateTo('/admin')
    }, 2000)

  } catch (error) {
    console.error('Login failed', error);
    toast.add({title: `Login failed, please try again later!`})
  }
}
</script>

<template>
  <div class="login-page" id="login">
    <div class="main-container">
      <div class="dic-color-one">
        <div class="info"><img src="../public/images/isco-logo.png" alt="">
          <h2>IESCO Scholarship in Malaysia (ISM)</h2>
          <UIcon name="cil-education" class="educationIcon" style="color: white"/>
        </div>
      </div>
      <div class="dic-color-two">
        <div class="info-container">
          <h2>Welcome <span>IESCO</span> Scholarship system</h2>
        </div>
        <div class="controlForm">
          <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">

            <div class="control-input">
              <UFormGroup label="Username" name="username">
                <UInput
                    v-model="state.username"
                    color=blue
                    variant="outline"
                    id="username"
                    placeholder="Enter your username"
                    size="md"
                    required
                    icon="mdi-email"
                />
              </UFormGroup>
            </div>
            <div style="margin-top: 5px" class="control-input">
              <UFormGroup
                  label="Password"
                  name="password"
              >
                <UInput
                    v-model="state.password"
                    type="password"
                    color="blue"
                    variant="outline"
                    id="password"
                    placeholder="Enter your password"
                    size="md"
                    required
                    icon="mdi-password"
                />
              </UFormGroup>

            </div>
            <div class="control-input">
              <UButton
                  class="btnSign"
                  type="submit"
                  style="background-color:rgb(28, 100, 188)"
              >
                SIGN IN
              </UButton>
            </div>
          </UForm>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  height: 1000px;
}

.login-page .main-container {
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 3% 15%;
  box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;
}

@media (min-device-width: 768px) and (max-device-width: 1024px) {
  .login-page .main-container {
    display: block;
    margin: 10% 10%;
    width: 80%;
  }
}

@media (max-width: 600px) {
  .login-page .main-container {
    display: block;
    margin: 0;
    width: 100%;
  }
}

.login-page .main-container .dic-color-one {
  background-color: var(--main-color);
  flex: 30%;
}

.login-page .main-container .info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.login-page .main-container .info img {
  width: 200px;
  height: 120px;
  margin: 50px auto;
}

.login-page .main-container .info h2 {
  font-size: 24px;
  font-weight: normal;
  color: #eeeeee;
}

.login-page .main-container .info .educationIcon {
  font-size: 15rem;
}

.login-page .main-container .dic-color-two {
  background-color: #eeeeee;
  flex: 40%;
  height: 600px;
}

.dic-color-two .info-container {
  font-weight: bold;
}

.dic-color-two .info-container {
  margin-left: 30px;
}

.dic-color-two .info-container h2 {
  font-size: 1.5rem;
  color: var(--main-color);
  margin-left: 1rem;
  margin-top: 20px;
  font-weight: lighter;
}

.dic-color-two .info-container h2 span {
  font-size: 2rem;
  font-weight: bold;
}


.login-page .main-container .controlForm {
  display: block;
  text-align: start;
  align-items: center;
  margin: 40px auto;
}

.login-page .main-container .control-input {
  width: 70%;
  align-items: center;
  margin: 5% auto 0;
}

@media (max-width: 600px) {
  .login-page .main-container .controlForm {
    margin: 50px auto;
    padding: 0 20px;
  }

  .login-page .main-container .control-input {
    width: 80%;
  }
}


.login-page label {
  font-size: 18px;
  font-weight: normal;
  color: var(--main-color);
}


</style>