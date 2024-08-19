<script setup lang="ts">

</script>

<template>
  <div class="dashbordAnastsContainer">
    <div class="divOne">
      <div class="icon">
        <UIcon name="clarity-users-line" class="icon-Dashboard"/>
      </div>
      <div>
        <h2>total applied students.</h2>
        <h1>100</h1>
      </div>
    </div>
    <div class="divTwo">
      <div class="icon">
        <UIcon name="clarity-users-line" class="icon-Dashboard"/>
      </div>
      <div>
        <h2>total appending students.</h2>
        <h1>100</h1>
      </div>
    </div>
    <div class="divThree">
      <div class="icon">
        <UIcon name="clarity-users-line" class="icon-Dashboard"/>
      </div>
      <div>
        <h2>total accepted students</h2>
        <h1>1012</h1>
      </div>
    </div>
    <div class="divFour">
      <div class="icon">
        <UIcon name="clarity-users-line" class="icon-Dashboard"/>
      </div>
      <div>
        <h2>total rejected students.</h2>
        <h1>100</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashbordAnastsContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 30px 0;
  text-transform: capitalize;
  font-size: 12px;
  font-weight: bolder;
  color: #eeeeee;
}

.dashbordAnastsContainer div {
  padding: 10px;
  text-align: center;
  flex: 25%;
}

@media (max-width: 600px) {
  .dashbordAnastsContainer {
    flex-direction: column;
  }

  .dashbordAnastsContainer div {
    flex: 100%;
  }
}

.dashbordAnastsContainer .divOne,
.dashbordAnastsContainer .divTwo,
.dashbordAnastsContainer .divThree,
.dashbordAnastsContainer .divFour {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.icon-Dashboard {
  width: 50px;
  height: 50px;
}

@media (max-width: 800px) {
  .icon-Dashboard {
    width: 20px;
    height: 20px;
  }
}


.dashbordAnastsContainer .divOne div:first-child,
.dashbordAnastsContainer .divTwo div:first-child,
.dashbordAnastsContainer .divThree div:first-child,
.dashbordAnastsContainer .divFour div:first-child {
  flex: 30%;
}

.dashbordAnastsContainer .divOne div:last-child,
.dashbordAnastsContainer .divTwo div:last-child,
.dashbordAnastsContainer .divThree div:last-child,
.dashbordAnastsContainer .divFour div:last-child {
  flex: 70%;
}

.dashbordAnastsContainer h1 {
  font-size: 20px;
  margin: 10px 0;
}

.dashbordAnastsContainer .divOne div,
.dashbordAnastsContainer .divThree div {
  background-color: rgb(28, 100, 188, .7);
}

.dashbordAnastsContainer .divTwo div,
.dashbordAnastsContainer .divFour div {
  background-color: rgb(109, 147, 40, .7);
}

</style>