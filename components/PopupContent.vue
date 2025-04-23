<script setup lang="ts">
const toast = useToast()
const props = defineProps(['studentInfo'])
let {$axios} = useNuxtApp()
const api = $axios()

const studentInfo = Object.entries(props.studentInfo)

const getFormattedValue = (val: string | unknown) => {
  if (!val) {
    return ['text', 'Undefined']
  }

  if (typeof val !== 'string' || !val.includes('http')) {
    return ['text', val]
  }

  return ['file', val]
}

const downloadFile = (fileUrl: string) => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = '';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const changeApplicationStatus = async (status: string) => {
  const payload = {
    application_status: status == 'accept' ? 'successful' : 'failed'
  }

  const response = await api.patch(`/applications/${props.studentInfo.id}/`, payload)
  console.log(response)
  toast.add({title: `Application ${status}ed successfully.`})
}

const deleteApplication = async () => {
  try {
    await api.delete(`/applications/${props.studentInfo.id}/`)
    toast.add({ title: 'Application deleted successfully.' })
  } catch (error) {
    console.error(error)
    toast.add({ title: 'Failed to delete application.', color: 'red' })
  }
}


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
        <label v-if="getFormattedValue(student[1])[0] == 'text'">{{ getFormattedValue(student[1])[1] }}</label>
        <div v-else class='file-download' @click="downloadFile(getFormattedValue(student[1])[1])">
          <UIcon name="ri:mail-download-fill" class="educationIcon" styles="color: #F00;"/>
          Download File
        </div>
      </div>
    </div>
    <div class="control-botton">
      <a id="reject" style="background-color: red" @click="changeApplicationStatus('reject')">Reject</a>
      <a id="accept" style="background-color: #39701d" @click="changeApplicationStatus('accept')">Accept</a>
      <a id="delete" style="background-color: #8b0000" @click="deleteApplication">Delete</a>

    </div>
  </div>
</template>

<style scoped lang="scss">

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
  padding-top: 5px;
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
  cursor: pointer;
}

.file-download {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  span {
    margin-right: 8px;
  }

  &:hover {
    color: var(--main-color);
  }
}

</style>