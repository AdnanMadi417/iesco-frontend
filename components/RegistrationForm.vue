<script setup lang="ts">
import {ref} from 'vue';

const showPopup = ref(false);

watchEffect(() => {
  if (showPopup.value) {
    navigateTo('/congrats')
  }
})

</script>
<template>
  <div>
    <Header/>
    <Requirement/>
    <div class="registrationForm">
      <div class="container">
        <div class="description">
          <img src="../public/images/isco-logo.png" alt="">
          <h2>{{ $t('registration') }}</h2>
          <p>{{ $t('paragraph') }}</p>
          <ul class="">
            <li class="">
              <UIcon name="line-md-check-all" class="w-5 h-5" style="color: white"/>
              {{ $t('first_point') }}
            </li>
            <li class="">
              <UIcon name="line-md-check-all" class="w-5 h-5" style="color: white"/>
              <h1>{{ $t('online_system') }}</h1>
            </li>
          </ul>
        </div>
        <div class="registerationQuestions">
          <h1>{{ $t('online_system') }}</h1>
          <RegistrationFromValidation @show-success="showPopup=true"/>
        </div>
      </div>
    </div>
    <FooterView/>
  </div>
</template>

<style scoped lang="scss">
.registrationForm {
  margin: 0 50px;
}

.registrationForm .container {
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
}

.registrationForm .container .description {
  flex: 30%;
  background-color: var(--main-color);
  padding: 40px 20px;
}

.registrationForm .container .registerationQuestions {
  flex: 70%;
}

@media (max-width: 800px) {
  .registrationForm {
    margin: 0;
  }
  registrationForm .container {
    margin: 0;
    padding: 0;
  }
  .registrationForm .container .description,
  .registrationForm .container .registerationQuestions {
    flex: 100%;
    max-width: 100%;
    padding: 20px;
  }
}

.registrationForm .container .description .form-group-file {
  display: flex;
  flex: 100%;
}

.registrationForm .container .description h2 {
  font-size: 30px;
  color: #eeeeee;
  text-align: center;
}

.registrationForm .container .description p {
  font-size: 16px;
  text-align: justify;
}

.registrationForm .container .description ul {
  list-style: none;
  font-size: 16px;
  text-align: justify;
  padding-top: 40px;
}

.registerationQuestions {
  padding-left: 50px;
}

.registrationForm .container .form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.registrationForm .container .form-group {
  flex: 1;
  min-width: calc(50% - 15px);
}

.registrationForm .container .form-group-file {
  flex: 1;
  min-width: 100%;
}

@media (max-width: 768px) {
  .registrationForm .container .form-group {
    min-width: 100%;
  }
}

.registrationForm .container label {
  display: block;
}

.registrationForm .container input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.registrationForm .registerationQuestions > h1 {
  color: var(--main-color);
  font-size: 30px;
  font-weight: bolder;
  text-align: center;
}

.registrationForm .container button {
  padding: 10px 20px;
  background-color: var(--main-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.registrationForm .container button:hover {
  background-color: #eeeeee;
  color: var(--main-color);
  border: 1px solid var(--main-color);
  transition: .3s;
}

.registrationForm .container .subBotton {
  text-align: center;
  margin-top: 20px;
}
</style>