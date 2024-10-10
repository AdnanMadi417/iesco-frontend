<script setup lang="ts">
import {z} from "zod";
import {ref, computed} from "vue";
import {nationalities} from "~/utils/nationalties";
import {useI18n} from 'vue-i18n';

const emit = defineEmits(['showSuccess'])
const {t} = useI18n()

let {$axios} = useNuxtApp()
const api = $axios()

const schema = computed(() => z.object({
      arabic_name: z.string()
          .regex(/^[\u0600-\u06FF\s]+$/, t('arabic_characters'))
          .min(8, t('min_characters_8')),
      english_name: z.string()
          .regex(/^[a-zA-Z\s]+$/, t('english_characters'))
          .min(8, t('min_characters_8')),
      passport_number: z.string(),
      email: z.string().email(t('invalid_email')),
      local_number: z.string().regex(/^\d{8,}$/, t('min_8_numbers')),
      whats_app_number: z.string().regex(/^\d{8,}$/, t('min_8_numbers')),
      malaysian_address: z.string().min(12, t('invalid_address')),
      school_name: z.string()
          .min(8, t('min_characters_8')),
      current_university_name: z.string()
          .min(8, t('min_characters_8')),
      name_graduate_university: z.string()
          .min(8, t('min_characters_8')),
    })
);

const userNationalityInput = ref('');

const filteredNationalities = computed(() => {
  if (!userNationalityInput.value) {
    return nationalities;
  }
  return nationalities.filter(n => n.toLowerCase().startsWith(userNationalityInput.value.toLowerCase()));
});

const previousLevelsQuestions = computed(() => [
  {
    label: t('arabicStudentName'),
    type: "text",
    id: "arabic_name",
    icon: "ph-user",
    placeholder: t('enterArabicName'),
  },
  {
    label: t("studentNameInEnglish"),
    type: "text",
    id: "english_name",
    icon: "ph-user",
    placeholder: t("enterEnglishName"),
  },
  {
    label: t("passportNumberInEnglish"),
    type: "text",
    id: "passport_number",
    icon: "mdi-passport",
    placeholder: t("passportNumberPlaceholder"),
  },
  {
    label: t("dateOfBirth"),
    type: "date",
    id: "date_of_birth",
    icon: "uiw-date",
    placeholder: t("dateOfBirthPlaceholder"),
  },
  {
    label: t("studentEmailAddress"),
    type: "email",
    id: "email",
    icon: "ic-outline-email",
    placeholder: t("studentEmailAddressPlaceholder"),
  },
  {
    label: t("localNumber"),
    type: "text",
    id: "local_number",
    icon: "ph-phone",
    placeholder: t("enterLocalNumber"),
  },
  {
    label: t("whatsappNumber"),
    type: "text",
    id: "whats_app_number",
    icon: "ph-phone",
    placeholder: t("enterWhatsAppNumber"),
  },
  {
    label: t("addressInMalaysia"),
    type: "address",
    id: "malaysian_address",
    icon: "tabler-world",
    placeholder: t("addressPlaceholder"),
  }
]);

const previousSelectQuestions = computed(() => [
  {
    label: t("gender"),
    type: "select",
    id: "gender",
    icon: "ph-user",
    placeholder: t("maleOrFemale"),
    options: [
      {
        name: t("male"),
        value: "male",
      },
      {
        name: t("female"),
        value: "female",
      },
    ],
  },
  {
    label: t("maritalStatus"), // Use translation key
    type: "select",
    id: "marital_status",
    icon: "ph-user",
    options: [
      {
        name: t("single"),
        value: "single",
      },
      {
        name: t("married"),
        value: "married",
      },
      {
        name: t("widower"),
        value: "widower",
      },
      {
        name: t("divorced"),
        value: "divorced",
      },
    ],
    placeholder: t("maritalStatusPlaceholder"),
  },
  {
    label: t("yourNationality"),
    type: "select",
    id: "nationality",
    icon: "tabler-world",
    options: filteredNationalities.value,
    placeholder: t("selectNationality"),
  }
]);

const state = reactive<{ [key: string]: any }>({
  arabic_name: '',
  english_name: '',
  passport_number: '',
  date_of_birth: '',
  email: '',
  local_number: '',
  whats_app_number: '',
  malaysian_address: '',
  gender: '',
  marital_status: '',
  nationality: '',
  school_name: null,
  current_university_name: null,
  num_sem_graduation: null,
  name_graduate_university: null,
  passport_file: null,
  high_school_file: null,
  english_qualification_file: null,
  other_supporting_file: null,
  candidate_progress_report: null,
  tuition_fees_statement_file: null,
  confirmation_letter: null,
  offer_letter_file: null,
  academic_specialization_file: null,
  paper_from_supervisor_file: null,
});

const educationLevel = computed(() => [
  {
    name: t("educationLevelPlaceholder"),
    value: "EL",
    disabled: true,
  },
  {
    name: t("highSchool"),
    value: "HS",
  },
  {
    name: t("bachelor"),
    value: "Ba",
  },
  {
    name: t("master"),
    value: "MaPHD",
  },
  {
    name: t("doctorate"),
    value: "MaPHD",
  }
]);

const levelsQuestions = computed<{ [key: string]: any }>(() => {
  return {
    HS: [
      {
        label: t("universityName"),
        type: "text",
        id: "school_name",
        icon: "fa-solid-university",
        placeholder: t("universityName"),
      },
      {
        label: t("passportFirstPage"),
        type: "file",
        id: "passport_file",
        icon: "i-heroicons-folder",
        placeholder: t("passportFirstPage") + " (1 MB max) :",
      },
      {
        label: t("highSchoolCertificate"),
        type: "file",
        id: "high_school_file",
        icon: "i-heroicons-folder",
        placeholder: t("highSchoolCertificate") + " :",
      },
      {
        label: t("englishProficiencyQualification"),
        type: "file",
        id: "english_qualification_file",
        icon: "i-heroicons-folder",
        placeholder: t("englishProficiencyQualification") + " :",
        required: false,
      },
      {
        label: t("otherSupportingDocument"),
        type: "file",
        id: "other_supporting_file",
        icon: "i-heroicons-folder",
        placeholder: t("otherSupportingDocument"),
      },
    ],
    Ba: [
      {
        label: t("currentUniversityName"),
        type: "text",
        id: "current_university_name",
        icon: "fa-solid-university",
        placeholder: t("currentUniversityName"),
      },
      {
        label: t("numberOfSemesters"),
        type: "text",
        id: "num_sem_graduation",
        icon: "system-uicons:book",
        placeholder: t("numberOfSemesters"),
      },
      {
        label: t("feesPerSemester"),
        type: "text",
        id: "feesPerSemester",
        icon: "solar-money-bag-broken",
        placeholder: t("feesPerSemester"),
      },
      {
        label: t("passportFirstPage"),
        type: "file",
        id: "passport_file",
        icon: "i-heroicons-folder",
        placeholder: t("passportFirstPage") + " (1 MB max) :",
      },
      {
        label: t("candidateProgressReport"),
        type: "file",
        id: "candidate_progress_report",
        icon: "i-heroicons-folder",
      },
      {
        label: t("tuitionFeesStatement"),
        type: "file",
        id: "tuition_fees_statement_file",
        icon: "i-heroicons-folder",
      },
      {
        label: t("confirmationLetter"),
        type: "file",
        id: "confirmation_letter",
        icon: "i-heroicons-folder",
      },
      {
        label: t("offerLetter"),
        type: "file",
        id: "offer_letter_file",
        icon: "i-heroicons-folder",
      },
      {
        label: t("otherSupportingDocument"),
        type: "file",
        id: "other_supporting_file",
        icon: "i-heroicons-folder",
        placeholder: t("otherSupportingDocument"),
      },
    ],
    MaPHD: [
      {
        label: t("currentUniversityName"),
        type: "text",
        id: "current_university_name",
        icon: "fa-solid-university",
        placeholder: t("currentUniversityName"),
      },
      {
        label: t("nameGraduateUniversity"),
        type: "text",
        id: "name_graduate_university",
        icon: "fa-solid-university",
        placeholder: t("nameGraduateUniversity"),
      },
      {
        label: t("academicSpecialization"),
        type: "text",
        id: "academic_specialization_file",
        icon: "system-uicons:book",
        placeholder: t("academicSpecialization"),
      },
      {
        label: t("passportFirstPage"),
        type: "file",
        id: "passport_file",
        icon: "i-heroicons-folder",
      },
      {
        label: t("paperFromSupervisor"),
        type: "file",
        id: "paper_from_supervisor_file",
        icon: "i-heroicons-folder",
      },
      {
        label: t("tuitionFeesStatement"),
        type: "file",
        id: "tuition_fees_statement_file",
        icon: "i-heroicons-folder",
      },
      {
        label: t("confirmationLetter"),
        type: "file",
        id: "confirmation_letter",
        icon: "i-heroicons-folder",
      },
      {
        label: t("offerLetter"),
        type: "file",
        id: "offer_letter_file",
        icon: "i-heroicons-folder",
      },
      {
        label: t("otherSupportingDocument"),
        type: "file",
        id: "other_supporting_file",
        icon: "i-heroicons-folder",
      },
    ],
  }
})

const educationLevelSelected = ref("EL");
const toast = useToast()

async function onSubmit() {
  const formData = new FormData();

  for (const key in state) {
    const value = state[key];

    if (value === null || value === undefined) {
      continue;
    }

    formData.append(key, value);
  }

  try {
    await api.post("/applications/", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    emit('showSuccess')
  } catch (error) {
    console.error('Error submitting the form:', error);
    toast.add({title: t('failedApplicationMessage')})
  }
}

const handleFileInput = (inputValue: any, question: any) => {
  if (question.type == 'file') {
    state[question.id] = inputValue[0]
    return;
  }

  state[question.id] = inputValue
}

</script>

<template>
  <div>
    <div class="registrationForm">
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <div class="control-container">
          <div v-for="student in previousLevelsQuestions" :key="student.id">
            <UFormGroup class="form-group" :label="student.label" :name="student.id">
              <UInput
                  :type="student.type"
                  size="md"
                  variant="outline"
                  :icon="student.icon"
                  :placeholder="student.placeholder"
                  v-model="state[student.id]"
                  color="blue"
                  required
              />
            </UFormGroup>
          </div>
          <div v-for="student in previousSelectQuestions" :key="student.id">
            <UFormGroup class="form-group" :label="student.label" :name="student.id">
              <USelect
                  size="md"
                  variant="outline"
                  :icon="student.icon"
                  :placeholder="student.placeholder"
                  v-model=state[student.id]
                  :options="student.options"
                  color=blue
                  option-attribute="name"
                  required
              />
            </UFormGroup>
          </div>
          <div class="form-group-file" id="educationLevelDiv">
            <label for="conformationFile">{{ t('educationLevelLabel') }} </label>
            <USelect
                id="educationLevel"
                :options="educationLevel"
                option-attribute="name"
                size="md"
                color=blue
                variant="outline"
                icon="fa-solid-university"
                required
                v-model="educationLevelSelected"
            />
            <div class="form-group-file">
              <div class="form-group-file" v-for="question in levelsQuestions[educationLevelSelected]">
                <label for="conformationFile">{{ question.label }}</label>
                <UInput
                    :type="question.type"
                    @change="(inputValue) => handleFileInput(inputValue, question)"
                    size="md"
                    variant="outline"
                    :icon="question.icon"
                    :placeholder="question.placeholder"
                    color="blue"
                />
              </div>
            </div>
          </div>
        </div>
        <UButton style="background-color: rgb(28, 100, 188)" type="submit" @click="onSubmit">
          Submit
        </UButton>
      </UForm>
    </div>
  </div>
</template>

<style scoped lang="scss">

.registrationForm {
  margin-top: 20px;
}

.control-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  > div {
    width: 49%;
  }
}

.control-container .form-group {
  flex: 1 1 50%;
  min-width: 370px;
}

@media (max-width: 600px) {
  .control-container {
    > div {
      width: 100%;

      .form-group {
        width: 100%;
        min-width: 100%;
      }
    }
  }
}

.form-group-file {
  flex: 1 1 100%;
}

</style>
