<script setup lang="ts">
import {type InferType, object, string} from 'yup'
import type {FormSubmitEvent} from '#ui/types'
import {z} from "zod";

const schema = z.object({
  email:
      z.string()
      .email('Invalid email')
      .regex(/^[a-zA-Z0-9._%+-]+@iesco\.my$/, 'Must be a @iesco.my'),
  password:
      z.string()
          .min(8, 'Password must be at least 8 characters long')
          .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
          .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
          .regex(/[0-9]/, 'Password must contain at least one number')
          .regex(/[\W_]/, 'Password must contain at least one special character')
          .nonempty('Password is required'),
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
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
          <h2 class="h2-one">Welcome</h2>
          <h2 class="h2-two">IESCO</h2>
          <h2 class="h2-three">Scholarship system</h2>
        </div>
        <div class="controlForm">
          <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">

            <div class="control-input">
              <UFormGroup label="Email" name="email">
                <UInput
                    v-model="state.email"
                    color="rgb(28, 100, 188)"
                    variant="outline"
                    id="emailAdmin"
                    placeholder="Enter your email"
                    size="md"
                    required
                    icon="mdi-email"
                />
              </UFormGroup>
            </div>
            <div class="control-input">
              <UFormGroup
                  label="Password"
                  name="password"
              >
                <UInput
                    v-model="state.password"
                    type="password"
                    color="rgb(28, 100, 188)"
                    variant="outline"
                    id="Admminpassword"
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

.dic-color-two .info-container .h2-one {
  font-size: 4rem;
  color: var(--main-color);
  margin-left: 2rem;
  font-weight: lighter;
}

.dic-color-two .info-container .h2-two {
  font-size: 4rem;
  color: var(--main-color);
  margin-top: -3rem;
  margin-left: 3rem;
}

.dic-color-two .info-container .h2-three {
  font-size: 2rem;
  color: var(--main-color);
  margin-top: -2.5rem;
  margin-left: 0;
  font-weight: normal;
}

@media (max-width: 600px) {
  .dic-color-two .info-container .h2-one {
    font-size: 30px;
    color: var(--main-color);
    margin-left: 30px;
  }

  .dic-color-two .info-container .h2-two {
    font-size: 50px;
    color: var(--main-color);
    margin-top: -32px;
    margin-left: 50px;
  }

  .dic-color-two .info-container .h2-three {
    font-size: 30px;
    color: var(--main-color);
    margin-top: -25px;
    margin-left: 0;
    font-weight: normal;
  }

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


.login-page label{
  font-size: 18px;
  font-weight: normal;
  color: var(--main-color);
}


</style>