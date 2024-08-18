<script setup lang="ts">
const columns = [
    {
      key: 'passport',
      label: 'Passport Number'
    },
    {
      key: 'educationLevel',
      label: 'Education Level',
      sortable: true
      },
    {
    key: 'gender',
    label: 'Gender',
    sortable: true
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
      direction: 'desc' as const
    },
    {
      key: 'whatsAppNumber',
      label: 'WhatsApp Number'
    },
    {
    key: 'uniName',
    label: 'University'
  }
]
const studentDetails = [
  {
    passport: "87698983",
    name: 'Tom Cook',
    educationLevel: 'Director of Product',
    email: 'tom.cook@example.com',
    nationality: 'Palestinian',
    whatsAppNumber:"d34567897",
    gender: 'Male',
    uniName:"AIU",
  },
  {
    passport: "87698983",
    name: 'Tom Cook',
    educationLevel: 'Director of Product',
    email: 'tom.cook@example.com',
    nationality: 'Palestinian',
    whatsAppNumber:"d34567897",
    gender: 'Male',
    uniName:"AIU",
  },
  {
    passport: "87698983",
    name: 'Tom Cook',
    educationLevel: 'Director of Product',
    email: 'tom.cook@example.com',
    nationality: 'Palestinian',
    whatsAppNumber:"d34567897",
    gender: 'Male',
    uniName:"AIU",
  },
  {
    passport: "87698983",
    name: 'Tom Cook',
    educationLevel: 'Director of Product',
    email: 'tom.cook@example.com',
    nationality: 'Palestinian',
    whatsAppNumber:"d34567897",
    gender: 'Male',
    uniName:"AIU",
  },
  {
    passport: "87698983",
    name: 'Tom Cook',
    educationLevel: 'Director of Product',
    email: 'tom.cook@example.com',
    nationality: 'Palestinian',
    whatsAppNumber:"d34567897",
    gender: 'Male',
    uniName:"AIU",
  }
]
const adminInfo=[
  {
    key :"adminName",
    label:"Admin Name"
  },
  {
    key :"adminEmail",
    label:"Admin Email"
  },
  {
    key :"adminphoneNumber",
    name:"admin phone Number"
  }
]
const adminsInfo=[
  {
    adminName:"mohammed 1",
    adminEmail:"admin@email.com",
  },
  {
    adminName:"mohammed 1",
    adminEmail:"admin@email.com",
  },
  {
    adminName:"mohammed 1",
    adminEmail:"admin@email.com",
  },
]
</script>

<template>
  <div class="main-container">
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
      <div class="DashboardDiv">
        <div class="headerAdminPage">
          <div>
            <UInput
              color="rgb(28, 100, 188)"
              variant="outline"
              icon="iconoir-doc-search"
              placeholder="Search..."
          />
          </div>
          <div class="projectName">
            <h2>Welcome back to IESCO Scholarship System</h2>
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
        <div class="studentDetailsTable">
          <UTable
              :columns="columns"
              :rows="studentDetails"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container{
  margin: 50px ;
}
@media (max-width: 600px){
  .main-container{
    margin: 10px;
    justify-items: center;
  }
}
.main-container .container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.container .adminSettingDiv{
  flex: 30%;
  background-color: var(--main-color);
}
.container .DashboardDiv{
  flex: 70%;
  background-color: #eeeeee;
}
.headerAdminPage{
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
  padding: 20px 0 10px 0;
}
@media (max-width: 600px){
  .headerAdminPage{
    display: block;
  }
  .headerAdminPage .projectName{
    display: none;
  }
}
.headerAdminPage div h2{
  font-weight: bold;
  font-size: 20px;
  color: var(--main-color);
}
.dashboardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
@media (max-width: 800px) {
  .dashboardContainer{
    display: block;
  }
}
.dashboardContainer{
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 1px 5px;
  border-radius: 20px;
}
.dashboardContainer > div{
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
.dashboardContainer div > div span{
  font-size: 25px;
  font-weight: bold;
  color: var(--main-color);
}
.dashboardContainer{
  padding: 10px;
}
.dashboardContainer .adminPhoto > img{
  border: 2px solid  var(--main-color);
  border-radius: 30px 0;
}
.container .DashboardDiv .dashboardContainer  h2{
  text-align: center;
  text-transform: capitalize;
  font-size: 26px;
  font-weight: normal;
  padding: 30px 0;
}
@media (max-width: 600px) {
  .main-container .container {
    flex-direction: column;
  }
  .container .adminSettingDiv{
    flex: 100%;
  }
  .container .DashboardDiv{
    flex: 100%;
  }
  .dashboardContainer {
    flex-direction: column;
  }
  .container .DashboardDiv .dashboardContainer  h2{
    font-size: 18px;
  }
}
.adminSettingDiv > img{
  position: relative;
  padding: 25px;
  width: calc(100% - 50px);
  text-align: center;
}
.adminSettingDiv h2 {
  font-size: 25px;
  color: #eeeeee;
  font-weight: normal;
  padding: 30px 0;
  text-align: center;
}
.adminSettingDiv span{
  font-weight: bold;
}
.adminSettingDiv .adminInfo{
  display: block;
  background-color: #eeeeee;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 5px 15px;
  padding: 10px;
  border-radius: 10px;
}
@media (max-width: 600px) {
  .adminSettingDiv .adminInfo{
    display: block;
  }
}
.adminSettingDiv .adminInfo img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid var(--main-color);
}
.adminSettingDiv .adminInfo {
  display: block;
  justify-items: start;
  text-align: start;
}

</style>