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

const selectedStudent = computed(() => {
  return studentDetails.value.find(student => student.id === selectedStudentId.value);
});
</script>

<template>
  <div>
    <!-- Extend Button -->
    <div v-for="student in studentDetails" :key="student.id">
      <span>{{ student.name }}</span>
      <span> _ </span>
      <span>{{ student.id }}</span>
      <button class="button" @click="extendDetails(student.id)">Extend</button>
    </div>

    <!-- Popup for Student Details -->
    <div :class="['popupStudentInfo', { hidden: !isVisible }]" v-if="selectedStudent">
      <div class="StudentInfoContainer">
        <div>
          <h2>Details for {{ selectedStudent.name }}</h2>
          <a class="close-btn close" @click="hidePopup" href="#">&times;</a>
          <hr class="borderHR">
        </div>
        <div class="content"> <!-- this is popup -->
          <div v-for="question in levelsQuestions" :key="question.key">
            <label>{{ question.label }}:</label>
            <span>{{ selectedStudent[question.key] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.popupStudentInfo.hidden {
  opacity: 0;
  visibility: hidden;
}

.popupStudentInfo:not(.hidden) {
  visibility: visible;
  opacity: 1;
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
  transition: all 0.3s ease-in-out;
}

.button {
  font-size: 1em;
  padding: 5px;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 20px/50px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.button:hover {
  background: var(--main-color);
  color: #eeeeee;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 30px;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: var(--main-color);
}

.content {
  margin-top: 20px;
}

.content label {
  font-weight: bold;
}

.content span {
  padding-left: 10px;
}

.borderHR {
  border-bottom: 1px solid var(--main-color);
}
</style>
