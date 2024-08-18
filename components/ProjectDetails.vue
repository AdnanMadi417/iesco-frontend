<script setup lang="ts">

</script>

<template>
  <div class="main-container">
    <div class="container">
      <div class="adminSettingDiv">
        <img src="../public/images/isco-logo.png" alt="">
        <h2>Admin Setting </h2>
        <div class="adminSettingDetails">
          <div class="adminInfo">
            <img src="../public/images/adminphoto.png" alt="">
            <div class="info">
              <h4><span>Admin Name:</span> Mohammed</h4>
              <h4><span>Email:</span> Mohammed</h4>
              <h4><span>Phone Number:</span> Mohammed</h4>
            </div>
          </div>
          <div class="adminInfo">
            <img src="../public/images/adminphoto.png" alt="">
            <div class="info">
              <h4><span>Admin Name:</span> Mohammed</h4>
              <h4><span>Email:</span> Mohammed</h4>
              <h4><span>Phone Number:</span> Mohammed</h4>
            </div>
          </div>
          <div class="adminInfo">
            <img src="../public/images/adminphoto.png" alt="">
            <div class="info">
              <h4><span>Admin Name:</span> Mohammed</h4>
              <h4><span>Email:</span> Mohammed</h4>
              <h4><span>Phone Number:</span> Mohammed</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="DashboardDiv">
        <div class="dashboardContainer">
          <div class="adminPhoto">
            <img src="../public/images/adminphoto.png" alt="">
          </div>
          <div class="adminDetails">
            <h2> Welcome back to Iesco ScholarShip Admin Page</h2>
          </div>
        </div>
        <hr class="border-b-cyan-950">
        <div class="dashboardDetails">
          <div>
            <h2>Admin Setting </h2>
          </div>
          <div>
            <h2> Students </h2>
          </div>
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
  flex: 35%;
  background-color: var(--main-color);
}
.container .DashboardDiv{
  flex: 65%;
  background-color: #eeeeee;
}
.dashboardContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.dashboardContainer .adminPhoto{
  flex: 30%;
  margin: 20px;
}
.dashboardContainer .adminPhoto > img{
  border: 2px solid  var(--main-color);
  border-radius: 30px 0;
}
.dashboardContainer .adminDetails{
  flex: 60%;
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
  .dashboardContainer .adminPhoto{
    flex: 100%;
    margin: 0;
  }
  .dashboardContainer .adminDetails{
    flex: 100%;
  }
  .container .DashboardDiv .dashboardContainer  h2{
    font-size: 18px;
  }
}
.dashboardDetails{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
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
  display: flex;
  justify-content: space-around;
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
  .adminSettingDiv > img{
    text-align: center;
  }
}
.adminSettingDiv .adminInfo img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1.5px solid var(--main-color);
}
.adminSettingDiv .adminInfo .info{
  margin-left: 15px;
  display: block;
  justify-items: start;
  text-align: start;
}
.dashboardContainer {
}
</style>