<script setup lang="ts">

</script>

<template>
  <div>
    <div>
      <button>Extend</button>
    </div>
    <div id="allStudentInfo" class="popupStudentInfo">
      <div class="StudentInfoContainer">
        <div>
          <h2>Welcome back</h2>
          <h2><a class="close-btn close" href="#">&times;</a></h2>
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

.popupStudentInfo {
  //position: absolute ;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 500ms;
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
    width: 100%;
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
    width: 95%;
  }
}

.StudentInfoContainer .content .info {
  padding: 15px 0;
}

.borderHR {
  border-bottom: 1px solid var(--main-color);
}
</style>