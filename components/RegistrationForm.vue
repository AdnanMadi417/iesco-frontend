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
  alert(`arabicName: ${formData.value.arabicName}, Name: ${formData.value.englishName},
  passport Number: ${formData.value.passportNumber}`);
};

const nationality = [ "Algerian", "Egyptian", "Libyan", "Moroccan", "Sudanese", "Tunisian", "Mauritanian", "Bahraini",
  "Kuwaiti",  "Omani", "Qatari", "Saudi Arabian", "Emirati", "Yemeni", "Jordanian", "Lebanese", "Palestinian", "Syrian", "Somali",
  "Djiboutian", "Comorian"];

const selected = ref(nationality[0])

const educationLevel=[
  {
    name:"Education level",
    value:"EL",
    disabled:true,
  },
  {
    name:"High School",
    value:"HS",
  },
  {
    name:"Bachelor",
    value:"Ba",
  },
  {
    name:"Master",
    value:"MaPHD",
  },
  {
    name:"Doctorate ",
    value:"MaPHD",
  }
]

let levelsQuestions = ref({
  HS:[
      {
        label:"University Name or School Name",
        type:"text",
        id:"localNumber",
        color:"rgb(28, 100, 188)",
        icon:"fa-solid-university",
        placeholder:"Enter your University Name",
      },
    {
      label:"Passport 1st page",
      type:"file",
      id:"passportFile",
      color:"rgb(28, 100, 188)",
      icon:"i-heroicons-folder",
      placeholder: "Passport 1st page (1 MB max) :"
    },
    {
      label:"Certified Original Copy of High School Academic Certificate ",
      type:"file",
      id:"highSchoolFile",
      color:"rgb(28, 100, 188)",
      icon:"i-heroicons-folder",
      placeholder: "Certified Original Copy of High School Academic Certificate :"
    },
    {
      label:"Certified Original Copy of English Proficiency Qualification (MUET, TOEFL, IELTS, or Equivalent, if available)",
      type:"file",
      id:"EnglishQualificationFile",
      color:"rgb(28, 100, 188)",
      icon:"i-heroicons-folder",
      placeholder: "(MUET, TOEFL, IELTS, or Equivalent, if available):",
      required:false,
    },
    {
      label: "Other supporting document",
      type:"file",
      id:"OtherSupportingFile",
      color:"rgb(28, 100, 188)",
      icon:"i-heroicons-folder",
      placeholder: "Other supporting document"
    }
  ],
  Ba:[
    {
      label:"Current University Name",
      type:"text",
      id:"CurrentUniversityName",
      color:"rgb(28, 100, 188)",
      icon:"fa-solid-university",
      placeholder:"Enter your Current University Name",
    },
    {
      label:"Number of Semesters Remaining Until Graduation",
      type:"text",
      id:"NumSemToGraduation",
      color:"rgb(28, 100, 188)",
      icon:"system-uicons:book",
      placeholder:"Number of Semesters Remaining Until Graduation",
    },
    {
      label:"Fees per Semester",
      type:"text",
      id:"FeesperSemester",
      color:"rgb(28, 100, 188)",
      icon:"solar-money-bag-broken",
      placeholder:"Fees per Semester",
    },
    {
      label:"Passport 1st page",
      type:"file",
      id:"passportFile",
      color:"rgb(28, 100, 188)",
      icon:"i-heroicons-folder",
      placeholder: "Passport 1st page (1 MB max) :"
    },
    {
      label:"Candidate Progress Report (for postgraduate students)",
      type:"file",
      id:"candidateProgressReport",
      color:"rgb(28, 100, 188)",
      icon:"i-heroicons-folder",
    },
    {
      label:"Tuition Fees Statement (latest from university) :",
      type:"file",
      id:"tuitionFeesStatement",
      color:"rgb(28, 100, 188)",
      icon:"i-heroicons-folder",
      placeholder: "Tuition Fees Statement (latest from university) :"
    },
    {
      label:"Confirmation Letter from University (latest date)",
      type:"file",
      id:"confirmationLetter",
      color:"rgb(28, 100, 188)",
      icon:"i-heroicons-folder",
      placeholder: "Confirmation Letter from University (latest date)"
    },
    {
      label:"Offer Letter",
      type:"file",
      id:"OfferLetterFile",
      color:"rgb(28, 100, 188)",
      icon:"i-heroicons-folder",
      placeholder: "Offer Letter "
    },
    {
      label: "Other supporting document ",
      type:"file",
      id:"OtherSupportingFile",
      color:"rgb(28, 100, 188)",
      icon:"i-heroicons-folder",
      placeholder: "Other supporting document"
    }
  ],
  MaPHD:[
      {
        label:"Current University Name",
        type:"text",
        id:"CurrentUniversityName",
        color:"rgb(28, 100, 188)",
        icon:"fa-solid-university",
        placeholder:"Enter your Current University Name",
      },
      {
        label:"Name of Graduate University",
        type:"text",
        id:"NameGraduateUniversity",
        color:"rgb(28, 100, 188)",
        icon:"fa-solid-university",
        placeholder:"Name of Graduate University",
      },
      {
        label:"Academic Specialization",
        type:"text",
        id:"academicSpecializationFile",
        color:"rgb(28, 100, 188)",
        icon:"system-uicons:book",
        placeholder:"Academic Specialization",
      },
      {
        label:"Fees per Semester",
        type:"text",
        id:"FeesperSemester",
        color:"rgb(28, 100, 188)",
        icon:"solar-money-bag-broken",
        placeholder:"Fees per Semester",
      },
      {
        label:"Passport 1st page",
        type:"file",
        id:"passportFile",
        color:"rgb(28, 100, 188)",
        icon:"i-heroicons-folder",
        placeholder: "Passport 1st page "
      },
      {
        label:"A Paper from the Supervisor (for Master’s and Doctoral levels)",
        type:"file",
        id:"paperFromSupervisor",
        color:"rgb(28, 100, 188)",
        icon:"i-heroicons-folder",
      },
      {
        label:"Tuition Fees Statement (latest from university) ",
        type:"file",
        id:"tuitionFeesStatement",
        color:"rgb(28, 100, 188)",
        icon:"i-heroicons-folder",
      },
      {
        label:"Confirmation Letter from University (latest date)",
        type:"file",
        id:"confirmationLetter",
        color:"rgb(28, 100, 188)",
        icon:"i-heroicons-folder",
      },
      {
        label:"Offer Letter",
        type:"file",
        id:"OfferLetterFile",
        color:"rgb(28, 100, 188)",
        icon:"i-heroicons-folder",
      },
      {
        label: "Other supporting document",
        type:"file",
        id:"OtherSupportingFile",
        color:"rgb(28, 100, 188)",
        icon:"i-heroicons-folder",
      }
      ],
  })

const educationLevelSelected=ref("EL");

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
            <UIcon name="bxs-down-arrow" class="w-5 h-5" style="color: white" />
            ISM Scholarship covers bachelor’s, master’s, and PhD programmes.
          </li>
          <li class="">
            <UIcon name="bxs-down-arrow" class="w-5 h-5" style="color: white"  />
            ISM Scholarship is for students who come from conflict zones;
            namely: Palestine, Yemen, Lebanon, Syria and Rohingya
          </li>
        </ul>
      </div>
      <div class="registerationQuestions">
        <h1>IESCO Online Application System</h1>
        <div class="container">
          <form @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group " id="arabicName">
                <label for="arabicName">Student's name in Arabic</label>
                <UInput
                    id="arabicName"
                    v-model="formData.arabicName"
                    color= rgb(28, 100, 188)
                    variant="outline"
                    icon="ph-user"
                    required
                    placeholder="Enter your Arabic name"
                />
              </div>
              <div class="form-group" id="englishName">
                <label for="Englishname">Student's name in English</label>
                <UInput
                    type="text"
                    id="englishName"
                    v-model="formData.englishName"
                    color= rgb(28, 100, 188)
                    variant="outline"
                    icon="ph-user"
                    required
                    placeholder="Enter your English name"
                />
              </div>
              <div class="form-group" id="passportNumber">
                <label for="passportNumber">Passport Number in English</label>
                <UInput
                    type="text"
                    id="passportNumber"
                    v-model="formData.passportNumber"
                    color= rgb(28, 100, 188)
                    variant="outline"
                    icon="mdi-passport"
                    required
                    placeholder="67710323"
                />
              </div>
              <div class="form-group" id="emailAddress">
                <label for="emailAddress">Student's email address</label>
                <UInput
                    type="email"
                    id="emailAddress"
                    v-model="formData.emailAddress"
                    color= rgb(28, 100, 188)
                    variant="outline"
                    icon="ic-outline-email"
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
                    color= rgb(28, 100, 188)
                    variant="outline"
                    icon="tabler-world"
                    required
                    placeholder="Kuala Lapmur Ampang"
                />
              </div>
              <div class="form-group" id="nationality" >
                <label for="nationality">Your Nationality:</label>
                <UInputMenu
                    id="nationality "
                    :options="nationality"
                    v-model="selected"
                    color= rgb(28, 100, 188)
                    variant="outline"
                    icon="tabler-world"
                    required
                    placeholder="Palestinian"
                />
              </div>
              <div class="form-group" id ="localNumber">
                <label for="localNumber">Local Number </label>
                <UInput
                    type="text"
                    id="localNumber"
                    v-model="formData.localNumber"
                    variant="outline"
                    color= rgb(28, 100, 188)
                    icon="ic-outline-phone"
                    required
                    placeholder="Enter your local Number"
                />
              </div>
              <div class="form-group" id ="whatsAppNumber">
                <label for="whatsAppNumber">whatsApp Number </label>
                <UInput
                    type="text"
                    id="whatsAppNumber"
                    v-model="formData.whatsAppNumber"
                    color= rgb(28, 100, 188)
                    variant="outline"
                    icon="ic-outline-phone"
                    required
                    placeholder="Enter your whatsApp Number"
                />
              </div>
              <div class="form-group">
              <div class="form-group" id ="maritalStatus">
                <label for="maritalStatus ">Marital Status </label>
                <UInput
                    id="maritalStatus"
                    color= rgb(28, 100, 188)
                    variant="outline"
                    icon="solar-user-id-linear"
                    size="sm"
                    required
                    v-model="selectedMaritalStatus"
                    placeholder="Marital Status"
                />
              </div>
            </div>
              <div class="form-group" id ="gender">
                <label for="gender">Gender </label>
                <UInput
                    type="text"
                    id="gender"
                    v-model="formData.gender"
                    color= rgb(28, 100, 188)
                    variant="outline"
                    icon="solar-user-id-linear"
                    required
                    placeholder="Male or Female "
                />
              </div>
              <div class="form-group-file" id="educationLevelDiv">
                <label for="conformationFile">Education Level </label>
                <USelect
                    id="educationLevel"
                    :options="educationLevel"
                    option-attribute="name"
                    size="md"
                    color= rgb(28, 100, 188)
                    variant="outline"
                    icon="fa-solid-university"
                    required
                    v-model="educationLevelSelected"
                />
                <div class="form-group-file">
                  <div class="form-group-file" v-for="question in levelsQuestions[educationLevelSelected]">
                    <label  for="conformationFile">{{question.label}}</label>
                    <UInput
                        :type="question.type"
                        size="md"
                        :color="question.color"
                        variant="outline"
                        :icon="question.icon"
                        :placeholder="question.placeholder"
                        required
                    />
                  </div>
                </div>
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
  .registrationForm .registerationQuestions > h1{
    color:var(--main-color);
    font-size: 30px;
    font-weight: bolder;
    text-align: center;
  }
  .registrationForm .container  button {
    padding: 10px 20px;
    background-color: var(--main-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .registrationForm .container  button:hover {
    background-color: #eeeeee;
    color: var(--main-color);
    border: 1px solid var(--main-color);
    transition: .3s;
  }
  .registrationForm .container .subBotton{
    text-align: center;
    margin-top: 20px;
  }
</style>