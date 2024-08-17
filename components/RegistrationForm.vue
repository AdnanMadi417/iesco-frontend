<script setup>
import { ref } from 'vue';

const formData = ref({
  arabicName: '',
  englishName:'',
  passportNumber:'',
  email: '',
  phone: '',
});

const handleSubmit = () => {
  alert(`Name: ${formData.value.arabicName}, Name: ${formData.value.englishName},
  passport Number: ${formData.value.passportNumber}`);
  // You can also send the data to a server here
};

const nationality = [ "Algerian", "Egyptian", "Libyan", "Moroccan", "Sudanese", "Tunisian", "Mauritanian", "Bahraini",
  "Kuwaiti",  "Omani", "Qatari", "Saudi Arabian", "Emirati",
  "Yemeni", "Jordanian", "Lebanese", "Palestinian", "Syrian", "Somali",
  "Djiboutian", "Comorian"]

const selected = ref(nationality[0])

const maritalStatus=["Single", "married"]
const selectedmaritalStatus = ref(maritalStatus[0])
</script>
<template>
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
            <UButton icon="i-heroicons-magnifying-glass" />
            ISM Scholarship covers bachelor’s, master’s, and PhD programmes.
          </li>
          <li class="">
            <UButton icon="i-heroicons-magnifying-glass" />
            ISM Scholarship is for students who come from conflict zones;
            namely: Palestine, Yemen, Lebanon, Syria and Rohingya
          </li>
        </ul>
      </div>
      <div class="registerationQuestions">
        <div class="container">
          <form @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group " id="arabicName">
                <label for="arabicName">Student's name in Arabic:</label>
                <UInput
                    type="text"
                    id="arabicName"
                    v-model="formData.arabicName"
                    color="primary"
                    variant="outline"
                    required
                    placeholder="Enter your Arabic name"
                />
              </div>
              <div class="form-group" id="englishName">
                <label for="Englishname">Student's name in English:</label>
                <UInput
                    type="text"
                    id="englishName"
                    v-model="formData.englishName"
                    color="primary"
                    variant="outline"
                    required
                    placeholder="Enter your English name"
                />
              </div>
              <div class="form-group" id="passportNumber">
                <label for="passportNumber">Passport Number in English:</label>
                <UInput
                    type="text"
                    id="passportNumber"
                    v-model="formData.passportNumber"
                    color="primary"
                    variant="outline"
                    required
                    placeholder="67710323"
                />
              </div>
              <div class="form-group" id="emailAddress">
                <label for="emailAddress">Student's email address:</label>
                <UInput
                    type="email"
                    id="emailAddress"
                    v-model="formData.emailAddress"
                    color="primary"
                    variant="outline"
                    required
                    placeholder="emailAddress@gmail.com"
                />
              </div>
              <div class="form-group" id="malaysiainAddress">
                <label for="malaysiainAddress">Address in Malaysia</label>
                <UInput
                    type="address"
                    id="malaysiainAddress"
                    v-model="formData.malaysiainAddress"
                    color="primary"
                    variant="outline"
                    required
                    icon="wpf:name"
                    placeholder="Kuala Lapmur Ampang"
                />
              </div>
              <div class="form-group" id="nationality" >
                <label for="nationality">Your Nationality:</label>
                <UInputMenu
                    id="nationality "
                    :options="nationality"
                    v-model="selected"
                    color="primary"
                    variant="outline"
                    required
                    placeholder="Palestinian"
                />
              </div>
              <div class="form-group" id ="localNumber">
                <label for="localNumber">Local Number :</label>
                <UInput
                    type="text"
                    id="localNumber"
                    v-model="formData.localNumber"
                    color="primary"
                    variant="outline"
                    required
                    placeholder="Enter your local Number"
                />
              </div>
              <div class="form-group" id ="whatsAppNumber">
                <label for="whatsAppNumber">whatsApp Number :</label>
                <UInput
                    type="text"
                    id="whatsAppNumber"
                    v-model="formData.whatsAppNumber"
                    color="primary"
                    variant="outline"
                    required
                    placeholder="Enter your whatsApp Number"
                />
              </div>
              <div class="form-group">
              <div class="form-group" id ="maritalStatus">
                <label for="maritalStatus ">Marital Status :</label>
                <UInput
                    type="text"
                    id="maritalStatus"
                    v-model="formData.maritalStatus"
                    color="primary"
                    variant="outline"
                    required
                    placeholder="Marital Status"
                />
              </div>
            </div>
              <div class="form-group" id ="localNumber">
                <label for="localNumber">Local Number :</label>
                <UInput
                    type="text"
                    id="localNumber"
                    v-model="formData.localNumber"
                    color="primary"
                    variant="outline"
                    required
                    placeholder="Enter your local Number"
                />
              </div>
              <div class="form-group-file">
                <label for="passportFile"> Passport 1st page (1 MB max) :</label>
                <UInput
                    type="file"
                    id="passportFile"
                    size="md"
                    color="primary"
                    variant="outline"
                    required
                    icon="i-heroicons-folder"
                />
              </div>
              <div class="form-group-file">
                <label for="conformationFile"> Certified original copy of High School Academic Certificate :</label>
                <UInput
                    type="file"
                    id="highSchoolFile"
                    size="md"
                    color="primary"
                    variant="outline"
                    required
                    icon="i-heroicons-folder"
                />
              </div>
              <div class="form-group-file">
                <label for="conformationFile"> Confirmation letter from your university (latest date) :</label>
                <UInput
                    type="file"
                    id="conformationFile"
                    size="md"
                    color="primary"
                    variant="outline"
                    required
                    icon="i-heroicons-folder"
                />
              </div>
              <div class="form-group-file">
                <label for="conformationFile"> Offer Letter :</label>
                <UInput
                    type="file"
                    id=" OfferLetterFile"
                    size="md"
                    color="primary"
                    variant="outline"
                    required
                    icon="i-heroicons-folder"
                />
              </div>
              <div class="form-group-file">
                <label for="conformationFile"> Confirmation letter from your university (latest date) :</label>
                <UInput
                    type="file"
                    id="conformationFile"
                    size="md"
                    color="primary"
                    variant="outline"
                    required
                    icon="i-heroicons-folder"
                />
              </div>
              <div class="form-group-file">
                <label for="conformationFile"> Other supporting document  (1 MB max) :</label>
                <UInput
                    type="file"
                    id="supportingFiles"
                    size="md"
                    color="primary"
                    variant="outline"
                    required
                    icon="i-heroicons-folder"
                />
              </div>
            </div>
            <button class="subBotton" type="submit">Submit</button>
          </form>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
  .registrationForm {
    margin: 0 50px ;
  }
  .registrationForm .container{
    display: flex;
    flex-wrap: wrap;
    padding: 30px 0;
  }
  .registrationForm .container .description{
    flex: 30%;
    background-color: var(--main-color);
    padding: 40px 20px;
  }
  .registrationForm .container .registerationQuestions{
    flex: 70%;
  }
  @media (max-width: 800px) {
    .registrationForm {
      margin: 0 ;
    }
    registrationForm .container {
      margin: 0;
      padding: 0;
    }
    .registrationForm .container .description,
    .registrationForm .container .registerationQuestions{
      flex: 100%;
      max-width: 100%;
      padding: 20px;
    }
  }
  .registrationForm .container .description .form-group-file{
    display: flex;
    flex: 100%;
  }
  .registrationForm .container .description h2{
    font-size: 30px;
    color: #eeeeee;
    text-align: center;
  }
  .registrationForm .container .description p{
    font-size: 16px;
    text-align: justify;
  }
  .registrationForm .container .description ul{
    list-style: none;
    font-size: 16px;
    text-align: justify;
    padding-top: 40px;
  }
  .registerationQuestions{
    padding-left: 50px;
  }
  .registrationForm .container  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .registrationForm .container  .form-group {
    flex: 1;
    min-width: calc(50% - 15px);
  }
  .registrationForm .container .form-group-file{
    flex: 1;
    min-width: 100%;
  }
  @media (max-width: 768px) {
    .registrationForm .container .form-group {
      min-width: 100%;
    }
  }
  .registrationForm .container  label {
    display: block;
  }
  .registrationForm .container  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  .registrationForm .container  button {
    padding: 10px 20px;
    background-color: var(--background-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .registrationForm .container  button:hover {
    background-color: var(--main-color);
  }
  .registrationForm .container .subBotton{
    text-align: center;
    margin: 10px;
  }
</style>