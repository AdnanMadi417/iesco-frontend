<script setup lang="ts">
const adminInfo = [
  {
    key: "adminName",
    label: "Admin Name"
  },
  {
    key: "adminEmail",
    label: "Admin Email"
  },
  {
    key: "adminphoneNumber",
    name: "admin phone Number"
  }
]
const adminsInfo = [
  {
    adminName: "mohammed 1",
    adminEmail: "admin@email.com",
  },
  {
    adminName: "mohammed 1",
    adminEmail: "admin@email.com",
  },
  {
    adminName: "mohammed 1",
    adminEmail: "admin@email.com",
  },
]
</script>

<template>
  <div class="container">
    <div class="adminSettingDiv">
      <img src="../public/images/isco-logo.png" alt="">
      <h2>Admin Setting </h2>
      <div class="adminSettingDetails">
        <div class="adminInfo">
          <div class="info">
            <UTable
                :columns="adminInfo"
                :rows="adminsInfo"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="dashboardContainer">
      <div>
        <div>
          <span>12312</span>
          <span>+</span>
        </div>
        <h5>Total Students</h5>
      </div>
      <div>
        <div>
          <span>12312</span>
          <span>+</span>
        </div>
        <h5>Current Students</h5>
      </div>
      <div>
        <div>
          <span>12312</span>
          <span>+</span>
        </div>
        <h5>Countries</h5>
      </div>
      <div>
        <div>
          <span>12312</span>
          <span>+</span>
        </div>
        <h5>Appending Students</h5>
      </div>
      <div>
        <div>
          <span>12312</span>
          <span>+</span>
        </div>
        <h5>Current Students</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.dashboardContainer {
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 1px 5px;
  border-radius: 20px;
}

.dashboardContainer > div {
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  color: var(--main-color);
  text-transform: capitalize;
  border-radius: 10px;
}

.dashboardContainer div > div {
  padding: 10px;
  text-align: center;
}

.dashboardContainer div > div span {
  font-size: 25px;
  font-weight: bold;
  color: var(--main-color);
}

.dashboardContainer {
  padding: 10px;
}
</style>