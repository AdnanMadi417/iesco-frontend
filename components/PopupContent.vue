<script setup lang="ts">

const props = defineProps(['studentInfo'])
console.log(props)

const studentInfo = Object.entries(props.studentInfo)

console.log(studentInfo);

</script>

<template>
  <div class="main-container">
    <div class="control-popup" v-for="(student, index) in studentInfo" :key="index">
      <div class="item-one">
        <label>
          {{ index + 1 }}.
          {{ student[0] }}
        </label>
      </div>
      <div class="item-two">
        <label>

          {{ student[1] }}
        </label>
      </div>
    </div>
    <div class="control-botton">
      <a id="reject" style="background-color: red">Reject</a>
      <a id="accept" style="background-color: #39701d">Accept</a>
    </div>
  </div>
</template>

<style scoped>

main-container {
  display: block;
}

.control-popup {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: start;
  font-size: 16px;
  padding: 0 5px;
  text-transform: capitalize;
  border-bottom: 2px solid #eeeeee;
}

.control-popup div {
  flex: 40%;
}

.item-one {
  width: 100%;
  padding: 5px 5px 5px 10px;
}

@media (max-width: 800px) {
  .control-popup {
    flex-direction: column;
    padding: 0;
  }

  .control-popup div {
    flex: 1;
    margin: 0;
    padding: 5px;
  }
}

.item-two {
  padding-left: 20px;
  margin-right: 20px;
}

.control-botton {
  width: 100%;
  padding: 5px 5px 5px 10px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.control-botton a {
  width: fit-content;
  padding: 5px 10px;
  margin: 5px;
  color: white;
  border: none;
  border-radius: 10px 0;
  background-color: var(--main-color);
}

</style>