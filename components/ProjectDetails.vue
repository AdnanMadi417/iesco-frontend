<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import PopupContent from "~/components/PopupContent.vue";

let { $axios } = useNuxtApp();
const api = $axios();

const columns = [
  { key: "english_name", label: "Name", sortable: true },
  { key: 'passport_number', label: 'Passport Number' },
  { key: 'email', label: 'Email', sortable: true, direction: 'desc' as const },
  { key: 'whats_app_number', label: 'WhatsApp Number' },
  { key: 'school_name', label: 'University', sortable: true },
  { key: "application_status", label: "State", sortable: true },
  { label: "Extend", key: "extend" }
];

const studentDetails = ref([]);
const showDetailsPopup = ref(false);
const currentStudentToShow = ref();
const q = ref('');
const currentPage = ref(1);
const pageSize = 15;

const showStudentDetails = (row: any) => {
  currentStudentToShow.value = row;
  showDetailsPopup.value = true;
};

const filteredStudentDetails = computed(() => {
  if (!q.value) return studentDetails.value;
  return studentDetails.value.filter(student =>
      Object.keys(student).some(key =>
          String(student[key]).toLowerCase().includes(q.value.toLowerCase())
      )
  );
});

const paginatedStudentDetails = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredStudentDetails.value.slice(start, end);
});

onMounted(async () => {
  const response = await api.get("/applications/");
  studentDetails.value = response.data;
});

</script>

<template>
  <div class="main-container">
    <div class="inter-container">

      <UModal v-model="showDetailsPopup" :ui="{ width: 'w-full'}">
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100' }">
          <template #header>
            <div class="project-name">
              <h2>Welcome back to IESCO Scholarship System</h2>
            </div>
          </template>
          <Placeholder class="popup-content">
            <PopupContent :student-info="currentStudentToShow" />
          </Placeholder>
          <template #footer>
            <div class="popup-footer">
              <h2>Thank you</h2>
            </div>
          </template>
        </UCard>
      </UModal>

      <div class="project-name">
        <h2>Welcome back !!</h2>
      </div>

      <div class="dashboard">
        <div class="search-container">
          <UInput
              color="blue"
              variant="outline"
              icon="iconoir-doc-search"
              v-model="q"
              placeholder="Search..."
          />
        </div>

        <div class="table-container">
          <UTable
              class="data-table"
              :columns="columns"
              :rows="paginatedStudentDetails"
          >
            <template #extend-data="{ row }">
              <div class="action-button">
                <a class="button" @click="showStudentDetails(row)">Extend</a>
              </div>
            </template>
          </UTable>

          <UPagination
              v-model="currentPage"
              :total="filteredStudentDetails.length"
              :page-count="pageSize"
              class="pagination"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.main-container {
  padding: 2rem;
}

.inter-container {
  max-width: 1200px;
  margin: 0 auto;
}

.project-name h2 {
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1.25rem;
  color: var(--main-color);
  margin: 1rem 0;
  text-align: center;
}

.dashboard {
  background-color: #eeeeee;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
}

.search-container {
  padding: 1rem 0;
  margin: 0 1.5rem;
}


.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  margin: 0 auto;
}

.button {
  display: inline-block;
  font-size: 0.875rem;
  padding: 0.375rem 0.75rem;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 1.25rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.button:hover {
  background: var(--main-color);
  color: #eeeeee;
}

.action-button {
  text-align: center;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem auto;
  padding: 1rem;
}

.popup-content {
  min-height: 8rem;
}

.popup-footer h2 {
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: capitalize;
  color: var(--main-color);
  text-align: center;
}

@media (max-width: 768px) {
  .main-container {
    padding: 1rem;
  }

  .search-container {
    margin: 0 0.5rem;
  }
}

@media (max-width: 480px) {
  .project-name h2 {
    font-size: 1.1rem;
  }

  .button {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
}
</style>