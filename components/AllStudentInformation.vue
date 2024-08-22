<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import axios from 'axios';

const levelsQuestions = ref([
  {label: 'Passport Number', key: 'passport'},
  {label: 'Name', key: 'name'},
  {label: 'Age', key: 'age'},
  {label: 'Email', key: 'email'},
]);

const studentDetails = ref([]);
const selectedStudentId = ref<number | null>(null);
const isVisible = ref(false);

onMounted(async () => {
  const response = await axios.get("https://66c21796f83fffcb587b22a8.mockapi.io/api/v1/students");
  studentDetails.value = response.data;
});

function hidePopup() {
  isVisible.value = false;
}

function extendDetails(studentId: number) {
  selectedStudentId.value = studentId;
  isVisible.value = true;
}
computed(() => {
  return studentDetails.value.find(student => student.id === selectedStudentId.value);
});
</script>

<template>
  <div :class="['popup', { hidden: !isVisible }]" @click="hidePopup">
    <div v-for="student in studentDetails">
      <button @click="extendDetails()" class="button">Extend</button>
    </div>
    <div id="allStudentInfo" class="popupStudentInfo">
      <div class="StudentInfoContainer">
        <div>
          <h2>Welcome back</h2>
          <h2><a class="close-btn close" @click="hidePopup" id="closeBtn" href="#">&times;</a></h2>
          <hr class="borderHR">
        </div>
        <div class="content" v-for="question in levelsQuestions">
          <div class="info">
            <label>{{ question.label }}</label>
          </div>
          <div class="info">
            <span v-if="studentDetails.length > 0">: {{ studentDetails[0][question.key] }}</span>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.popup {
  position: relative;
  z-index: 1000;
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

.popupStudentInfo {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}

.popupStudentInfo {
  visibility: visible;
  opacity: 1;
}

.popup .hidden {
  opacity: 0;
  visibility: hidden;
}

.StudentInfoContainer {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  width: 70%;
  height: calc(100% - 140px);
  overflow-y: auto;
  position: relative;
  transition: all 5s ease-in-out;
}

@media (max-width: 800px) {
  .StudentInfoContainer {
    width: 90%;
  }
}

.StudentInfoContainer div .close {
  position: absolute;
  top: 0;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: var(--main-color);
}

.StudentInfoContainer .StudentInfoContainer:hover {
  color: #eeeeee;
}

.StudentInfoContainer .content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: auto;
}

.StudentInfoContainer .content div:first-child {
  flex: 70%;
}

.StudentInfoContainer .content div:last-child {
  flex: 30%;
}

.StudentInfoContainer .content .info span {
  padding: 10px 10px;
  background-color: var(--main-color);
  border-radius: 5px;
  color: #eeeeee;
  text-transform: capitalize;
}

@media screen and (max-width: 700px) {
  .StudentInfoContainer {
    width: 70%;
  }
}

.StudentInfoContainer .content .info {
  padding: 15px 0;
}

.borderHR {
  border-bottom: 1px solid var(--main-color);
}
</style>