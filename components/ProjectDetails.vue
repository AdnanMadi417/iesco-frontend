<script setup lang="ts">
import axios from "axios";
import {computed, onMounted, ref} from 'vue';
import PopupContent from "~/components/PopupContent.vue";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Name",
    sortable: true
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
    label: 'University',
    sortable: true
  },
  {
    key: "state",
    label: "State",
    sortable: true
  },
  {
    label: "Extend",
    key: "extend"
  }
]

const studentDetails = ref([])

const showDetailsPopup = ref(false)
const currentStudentToShow = ref()

const showStudentDetails = (row) => {
  currentStudentToShow.value = row;
  showDetailsPopup.value = true
}

const q = ref('');

const filteredStudentDetails = computed(() => {
  if (!q.value) return studentDetails.value;
  return studentDetails.value.filter(student => {
    return Object.keys(student).some(key =>
        String(student[key]).toLowerCase().includes(q.value.toLowerCase())
    );
  });
});

onMounted(async () => {
  const response = await axios.get("https://66c21796f83fffcb587b22a8.mockapi.io/api/v1/students ")
  studentDetails.value = response.data;
})

const isOpen = ref(false)

</script>

<template>
  <div class="main-container">
    <div class="interContainer">
      <UModal v-model="showDetailsPopup">
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <div class="popupHedaer h-8" >
              <h2>
                Welcome to the IESCO Scholarship.
              </h2>
            </div>
          </template>

          <Placeholder class="h-32" >
            <PopupContent :student-info="currentStudentToShow"/>
          </Placeholder>

          <template #footer>
            <div class="popupFooter h-8 " >
              <h2>
                Thank you
                <span>
                  <UIcon name="circum-face-smile" width="1.2em" height="1.2em" />
                </span>
              </h2>
            </div>
          </template>
        </UCard>
      </UModal>
      <dashboard-analysts/>
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
                v-model="q"
                placeholder="Search..."
            />
          </div>
        </div>
        <div class="studentDetailsTable">
          <UTable
              class="table"
              :columns="columns"
              :rows="filteredStudentDetails"
          >
            <template #extend-data="{ row }">
              <div class="popupButtonExted">
                <a class="button" @click="showStudentDetails(row)">Extend</a>
              </div>
            </template>
          </UTable>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.main-container {
  margin: 50px;
}

@media (max-width: 600px) {
  .main-container {
    margin: 10px;
    justify-items: center;
  }
}

.interContainer .DashboardDiv {
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

.container .DashboardDiv {
  flex: 100%;
}

.container .DashboardDiv .dashboardContainer h2 {
  font-size: 18px;
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

.DashboardDiv .studentDetailsTable .table {
  display: block;
  width: calc(100% - 100px);
  overflow-x: auto;
}

.popupFooter {
  font-size: 20px ;
  font-weight: bold;
  text-transform: capitalize;
  color: var(--main-color);
  text-align: center;
}

.popupHedaer {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: var(--main-color);
}


.popupFooter  span{
  width: 1.5rem;
  height: 1.5rem;
}
</style>
