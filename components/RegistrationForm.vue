<script setup lang="ts">
import {ref} from 'vue';
import Design from "~/components/Design.vue";


const showSunmiition = ref(true);

const notificationPopup = ref(false);

const showStudentDetails = () => {
  showSunmiition.value = false;
  notificationPopup.value = true;
}


</script>
<template>
  <div>
    <div v-if="showSunmiition">
      <Header/>
      <Requirement/>
      <Design/>
      <div class="registrationForm">
        <div class="container">
          <div class="description">
            <img src="../public/images/isco-logo.png" alt="">
            <h2>Registration</h2>
            <p>IESCO Scholarship in Malaysia (ISM) is an initiative by
              International Educational Scientific and Cultural Organization
              (IESCO) to attract students from less fortunate places to pursue
              advanced academic studies in Malaysia. International students are
              welcomed to apply for this scholarship and further their studies in
              the selected Malaysian universities.</p>
            <ul class="">
              <li class="">
                <UIcon name="line-md-check-all" class="w-5 h-5" style="color: white"/>
                ISM Scholarship covers bachelor’s, master’s, and PhD programmes.
              </li>
              <li class="">
                <UIcon name="line-md-check-all"  class="w-5 h-5" style="color: white"/>
                ISM Scholarship is for students who come from conflict zones;
                namely: Palestine, Yemen, Lebanon, Syria and Rohingya
              </li>
            </ul>
          </div>
          <div class="registerationQuestions">
            <h1>IESCO Online Application System</h1>
            <RegistrationFromValidation/>
          </div>
        </div>
      </div>
      <FooterView/>
    </div>
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