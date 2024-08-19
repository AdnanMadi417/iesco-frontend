<script setup lang="ts">
import {ref} from "vue";

let levelsQuestions = ref([
  {
    label: "University Name",
    id: "universityName",
    color: "rgb(28, 100, 188)",
    icon: "fa-solid-university",
    placeholder: "Enter your University Name",
  },
  {
    label: "Number of Semesters Remaining Until Graduation",
    type: "text",
    id: "NumSemToGraduation",
    color: "rgb(28, 100, 188)",
    icon: "system-uicons:book",
    placeholder: "Number ",
  },
  {
    label: "Fees per Semester",
    id: "FeesperSemester",
    color: "rgb(28, 100, 188)",
    icon: "solar-money-bag-broken",
    placeholder: "Fees per Semester",
  },
  {
    label: "Passport  1st page",
    id: "passportFile",
    color: "rgb(28, 100, 188)",
    icon: "i-heroicons-folder",
    placeholder: "Passport 1st page"
  },
  {
    label: "High School Academic Certificate ",
    id: "highSchoolFile",
    color: "rgb(28, 100, 188)",
    icon: "i-heroicons-folder",
    placeholder: "High School Academic Certificate"
  },
  {
    label: "English Proficiency Qualification ",
    id: "EnglishQualificationFile",
    color: "rgb(28, 100, 188)",
    icon: "i-heroicons-folder",
    placeholder: "(MUET, TOEFL, IELTS, or Equivalent)",
  },
  {
    label: "Other supporting document",
    id: "OtherSupportingFile",
    color: "rgb(28, 100, 188)",
    icon: "i-heroicons-folder",
    placeholder: "Other supporting document"
  },
  {
    label: "University Name",
    id: "universityName",
    color: "rgb(28, 100, 188)",
    icon: "fa-solid-university",
    placeholder: "Enter your University Name",
  },
  {
    label: "Number of Semesters Remaining Until Graduation",
    type: "text",
    id: "NumSemToGraduation",
    color: "rgb(28, 100, 188)",
    icon: "system-uicons:book",
    placeholder: "Number ",
  },
  {
    label: "Fees per Semester",
    id: "FeesperSemester",
    color: "rgb(28, 100, 188)",
    icon: "solar-money-bag-broken",
    placeholder: "Fees per Semester",
  },
  {
    label: "Passport  1st page",
    id: "passportFile",
    color: "rgb(28, 100, 188)",
    icon: "i-heroicons-folder",
    placeholder: "Passport 1st page"
  },
  {
    label: "High School Academic Certificate ",
    id: "highSchoolFile",
    color: "rgb(28, 100, 188)",
    icon: "i-heroicons-folder",
    placeholder: "High School Academic Certificate"
  },
  {
    label: "English Proficiency Qualification ",
    id: "EnglishQualificationFile",
    color: "rgb(28, 100, 188)",
    icon: "i-heroicons-folder",
    placeholder: "(MUET, TOEFL, IELTS, or Equivalent)",
  },
  {
    label: "Candidate Progress Report (for postgraduate students)",
    id: "candidateProgressReport",
    color: "rgb(28, 100, 188)",
    icon: "i-heroicons-folder",
  },
  {
    label: "Other supporting document",
    id: "OtherSupportingFile",
    color: "rgb(28, 100, 188)",
    icon: "i-heroicons-folder",
    placeholder: "Other supporting document"
  }
])

const educationLevelSelected = ref("EL");

</script>

<template>
  <div>
    <div class="box">
      <a class="button" href="#popup1">Extend</a>
    </div>

    <div id="popup1" class="StudentInfo">
      <div class="StudentInfoContainer">
        <div>
          <h2>Welcome to {{}}</h2>
          <h2><a class="close" href="#">&times;</a></h2>
          <hr class="borderHR">
        </div>
        <div class="content" v-for="question in levelsQuestions">
          <div class="info">
            <label>{{ question.lable }}</label>
            <label>{{ question.placeholder }}</label>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.box {
  width: 40%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  padding: 35px;
  border: 2px solid #fff;
  border-radius: 20px/50px;
  background-clip: padding-box;
  text-align: center;
}

.button {
  font-size: 1em;
  padding: 5px;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 20px/50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.button:hover {
  background: var(--main-color);
  color: #eeeeee;
}

.StudentInfo {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}

.StudentInfo:target {
  visibility: visible;
  opacity: 1;
}

.StudentInfoContainer {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 40%;
  position: relative;
  transition: all 5s ease-in-out;
}

.StudentInfoContainer div .close {
  position: absolute;
  top: 10px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: var(--main-color);
}

.StudentInfoContainer .StudentInfoContainer:hover {
  color:#eeeeee;
}

.StudentInfoContainer .content {
  max-height: 50%;
  overflow: auto;
}

@media screen and (max-width: 700px) {
  .box {
    width: 70%;
  }

  .popup {
    width: 70%;
  }
}

.StudentInfoContainer .content .info{
  padding: 20px 0;
}
.borderHR {
  border: 1px solid var(--main-color);
}
</style>