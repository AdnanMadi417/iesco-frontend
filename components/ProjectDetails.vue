<script setup lang="ts">
import axios from "axios";

const columns = [
  {
    key: "id",
    label: "ID",
  },
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
  },
  {
    key: "state",
    label: "State",
  },
  {
    key: "allStudentInfo",
    label: "Student Info"
  }
]

const detailsToShow = [
  "passport",
  "name",
  "educationLevel",
  "email",
  "nationality",
  "whatsAppNumber",
  "gender",
  "uniName",
]


const studentDetails = [
  {
    passport: "87698983",
    name: 'Tom Cook',
    educationLevel: 'Director of Product',
    email: 'tom.cook@example.com',
    nationality: 'Palestinian',
    whatsAppNumber: "d34567897",
    gender: 'Male',
    uniName: "AIU",
  },
  {
    passport: "87698983",
    name: 'Tom Cook',
    educationLevel: 'Director of Product',
    email: 'tom.cook@example.com',
    nationality: 'Palestinian',
    whatsAppNumber: "d34567897",
    gender: 'Male',
    uniName: "AIU",
  },
  {
    passport: "87698983",
    name: 'Tom Cook',
    educationLevel: 'Director of Product',
    email: 'tom.cook@example.com',
    nationality: 'Palestinian',
    whatsAppNumber: "d34567897",
    gender: 'Male',
    uniName: "AIU",
  },
  {
    passport: "87698983",
    name: 'Tom Cook',
    educationLevel: 'Director of Product',
    email: 'tom.cook@example.com',
    nationality: 'Palestinian',
    whatsAppNumber: "d34567897",
    gender: 'Male',
    uniName: "AIU",
  },
  {
    passport: "87698983",
    name: 'Tom Cook',
    educationLevel: 'Director of Product',
    email: 'tom.cook@example.com',
    nationality: 'Palestinian',
    whatsAppNumber: "d34567897",
    gender: 'Male',
    uniName: "AIU",
  }
]


onMounted(async () => {
  const response = await axios.get("https://66c21796f83fffcb587b22a8.mockapi.io/api/v1/students ")
  console.log(response.data)

  for (let i = 0; i < response.data.length; i++) {
    const studentDetails = response.data[i]
    for (let j = 0; j < detailsToShow.length; j++) {
      const keyStudentDetails = detailsToShow[j]
      if (keyStudentDetails in studentDetails) {
        console.log(response.data[i]);
      } else {
        continue;
      }
    }
  }
})

</script>

<template>
  <div class="main-container">
    <dashboard-analysts/>

    <div class="container">
      <div class="DashboardDiv">
        <div class="headerAdminPage">
          <div class="projectName">
            <h2>Welcome back to IESCO Scholarship System</h2>
          </div>
          <div>
            <UInput
                color="rgb(28, 100, 188)"
                variant="outline"
                icon="iconoir-doc-search"
                placeholder="Search..."
            />
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
.main-container {
  margin: 50px;
}

@media (max-width: 600px) {
  .main-container {
    margin: 10px;
    justify-items: center;
  }
}

.main-container .container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.container .DashboardDiv {
  flex: 70%;
  background-color: #eeeeee;
}

.headerAdminPage {
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
  padding: 20px 0 10px 0;
}

@media (max-width: 600px) {
  .headerAdminPage {
    display: block;
  }

  .headerAdminPage .projectName {
    display: none;
  }
}

.headerAdminPage div h2 {
  font-weight: bold;
  font-size: 20px;
  color: var(--main-color);
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

.dashboardContainer .adminPhoto > img {
  border: 2px solid var(--main-color);
  border-radius: 30px 0;
}

.container .DashboardDiv .dashboardContainer h2 {
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

  .container .DashboardDiv {
    flex: 100%;
  }

  .container .DashboardDiv .dashboardContainer h2 {
    font-size: 18px;
  }
}

.adminSettingDiv > img {
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

.adminSettingDiv span {
  font-weight: bold;
}

.adminSettingDiv .adminInfo img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid var(--main-color);
}

</style>
