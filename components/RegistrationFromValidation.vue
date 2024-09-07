<script setup lang="ts">
import {z} from "zod";
import {reactive, ref} from "vue";
import {nationalities} from "~/utils/nationalties";

const schema = z.object({
  arabic_name: z.string()
      .regex(/^[\u0600-\u06FF\s]+$/, 'Must contain only Arabic characters')
      .min(8, 'Must be at least 8 characters'),
  english_name: z.string()
      .regex(/^[a-zA-Z\s]+$/, 'Must contain only English characters')
      .min(8, 'Must be at least 8 characters'),
  passport_number: z.string(),
  email: z.string().email('Invalid email'),
  local_number: z.string().regex(/^\d{8,}$/, "Must be at least 8 numbers"),
  whats_app_number: z.string().regex(/^\d{8,}$/, "Must be at least 8 numbers"),
  malaysian_address: z.string().min(12, 'Must be at least 8 characters'),
  school_name: z.string()
      .min(8, 'Must be at least 8 characters'),
  current_university_name: z.string()
      .min(8, 'Must be at least 8 characters'),
  name_graduate_university: z.string()
      .min(8, 'Must be at least 8 characters'),
});

const userNationalityInput = ref('');

const filteredNationalities = computed(() => {
  if (!userNationalityInput.value) {
    return nationalities;
  }
  return nationalities.filter(n => n.toLowerCase().startsWith(userNationalityInput.value.toLowerCase()));
});

type Schema = z.output<typeof schema>;

let previousLevelsQuestions = [
  {
    label: "Student's name in Arabic",
    type: "text",
    id: "arabic_name",
    icon: "ph-user",
    placeholder: "Enter your Arabic name",
  },
  {
    label: "Student's name in English",
    type: "text",
    id: "english_name",
    icon: "ph-user",
    placeholder: "Enter your English name",
  },
  {
    label: "Passport Number in English",
    type: "text",
    id: "passport_number",
    icon: "mdi-passport",
    placeholder: "23432125",
  },
  {
    label: "date Of Birth",
    type: "date",
    id: "date_of_birth",
    icon: "uiw-date",
    placeholder: "MM/dd/yyyy",
  },
  {
    label: "Student's Email address ",
    type: "email",
    id: "email",
    icon: "ic-outline-email",
    placeholder: "emailAddress@gmail.com",
  },
  {
    label: "Local Number",
    type: "text",
    id: "local_number",
    icon: "ph-phone",
    placeholder: "Enter your local Number",
  },
  {
    label: "WhatsApp Number",
    type: "text",
    id: "whats_app_number",
    icon: "ph-phone",
    placeholder: "Enter your whatsApp Number",
  },
  {
    label: "Address in Malaysia",
    type: "address",
    id: "malaysian_address",
    icon: "tabler-world",
    placeholder: "Kuala Lapmur Ampang",
  }
]

let previousSelectQuestions = [
  {
    label: "Gender",
    type: "select",
    id: "gender",
    icon: "ph-user",
    placeholder: "Male Or Female",
    options: [
      "Male", "Female"
    ]
  },
  {
    label: "Marital Status ",
    type: "select",
    id: "marital_status",
    icon: "ph-user",
    options: [
      "Single", "Married", "Widower", "Divorced"
    ],
    placeholder: "Marital Status ",
  },
  {
    label: "Your Nationality",
    type: "select",
    id: "nationality",
    icon: "tabler-world",
    options: filteredNationalities.value,
    placeholder: "Select Nationality"
  }
]

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

type Question = {
  label: string;
  type: "text";
  id: string;
  icon: string;
  placeholder: string;
  required?: boolean;
};


const educationLevel = [
  {
    name: "Education level",
    value: "EL",
    disabled: true,
  },
  {
    name: "High School",
    value: "HS",
  },
  {
    name: "Bachelor",
    value: "Ba",
  },
  {
    name: "Master",
    value: "MaPHD",
  },
  {
    name: "Doctorate ",
    value: "MaPHD",
  }
]

let levelsQuestions = ref({
  HS: [
    {
      label: "University Name",
      type: "text",
      id: "school_name",
      icon: "fa-solid-university",
      placeholder: "Enter your University Name",
    },
    {
      label: "Passport 1st page",
      type: "file",
      id: "passport_file",
      icon: "i-heroicons-folder",
      placeholder: "Passport 1st page (1 MB max) :"
    },
    {
      label: "Certified Original Copy of High School Academic Certificate ",
      type: "file",
      id: "high_school_file",
      icon: "i-heroicons-folder",
      placeholder: "Certified Original Copy of High School Academic Certificate :"
    },
    {
      label: "Certified Original Copy of English Proficiency Qualification (MUET, TOEFL, IELTS, or Equivalent, if available)",
      type: "file",
      id: "english_qualification_file",
      icon: "i-heroicons-folder",
      placeholder: "(MUET, TOEFL, IELTS, or Equivalent, if available):",
      required: false,
    },
    {
      label: "Other supporting document",
      type: "file",
      id: "other_supporting_file",
      icon: "i-heroicons-folder",
      placeholder: "Other supporting document"
    }
  ],
  Ba: [
    {
      label: "Current University Name",
      type: "text",
      id: "current_university_name",
      icon: "fa-solid-university",
      placeholder: "Enter your Current University Name",
    },
    {
      label: "Number of Semesters Remaining Until Graduation",
      type: "text",
      id: "num_sem_graduation",
      icon: "system-uicons:book",
      placeholder: "Number of Semesters Remaining Until Graduation",
    },
    {
      label: "Fees per Semester",
      type: "text",
      id: "feesPerSemester",
      icon: "solar-money-bag-broken",
      placeholder: "Fees per Semester",
    },
    {
      label: "Passport 1st page",
      type: "file",
      id: "passport_file",
      icon: "i-heroicons-folder",
      placeholder: "Passport 1st page (1 MB max) :"
    },
    {
      label: "Candidate Progress Report (for postgraduate students)",
      type: "file",
      id: "candidate_progress_report",
      icon: "i-heroicons-folder",
    },
    {
      label: "Tuition Fees Statement (latest from university) :",
      type: "file",
      id: "tuition_fees_statement_file",
      icon: "i-heroicons-folder",
    },
    {
      label: "Confirmation Letter from University (latest date)",
      type: "file",
      id: "confirmation_letter",
      icon: "i-heroicons-folder",
    },
    {
      label: "Offer Letter",
      type: "file",
      id: "offer_letter_file",
      icon: "i-heroicons-folder",
    },
    {
      label: "Other supporting document ",
      type: "file",
      id: "other_supporting_file",
      icon: "i-heroicons-folder",
      placeholder: "Other supporting document"
    }
  ],
  MaPHD: [
    {
      label: "Current University Name",
      type: "text",
      id: "current_university_name",
      icon: "fa-solid-university",
      placeholder: "Enter your Current University Name",
    },
    {
      label: "Name of Graduate University",
      type: "text",
      id: "name_graduate_university",
      icon: "fa-solid-university",
      placeholder: "Name of Graduate University"
    },
    {
      label: "Academic Specialization",
      type: "text",
      id: "academic_specialization_file",
      icon: "system-uicons:book",
      placeholder: "Academic Specialization",
    },
    {
      label: "Passport 1st page",
      type: "file",
      id: "passport_file",
      icon: "i-heroicons-folder",
    },
    {
      label: "A Paper from the Supervisor (for Master’s and Doctoral levels)",
      type: "file",
      id: "paper_from_supervisor_file",
      icon: "i-heroicons-folder",
    },
    {
      label: "Tuition Fees Statement (latest from university) ",
      type: "file",
      id: "tuition_fees_statement_file",
      icon: "i-heroicons-folder",
    },
    {
      label: "Confirmation Letter from University (latest date)",
      type: "file",
      id: "confirmation_letter",
      icon: "i-heroicons-folder",
    },
    {
      label: "Offer Letter",
      type: "file",
      id: "offer_letter_file",
      icon: "i-heroicons-folder",
    },
    {
      label: "Other supporting document",
      type: "file",
      id: "other_supporting_file",
      icon: "i-heroicons-folder",
    }
  ],
})

const educationLevelSelected = ref("EL");

const showSunmiition = ref(true);

const notificationPopup = ref(false);

const showStudentDetails = () => {
  showSunmiition.value = false;
  notificationPopup.value = true;
}

async function onSubmit() {
  console.log(state);
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
                  :type="student.type"
                  size="md"
                  variant="outline"
                  :icon="student.icon"
                  :placeholder="student.placeholder"
                  v-model=state[student.id]
                  :options="student.options"
                  color=blue
                  required
              />
            </UFormGroup>
          </div>
          <div class="form-group-file" id="educationLevelDiv">
            <label for="conformationFile">Education Level </label>
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
        <UButton style="background-color: rgb(28, 100, 188)" type="submit">
          Submit
        </UButton>
      </UForm>
    </div>
  </div>
</template>

<style scoped>

.control-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.control-container .form-group {
  flex: 1 1 50%;
  min-width: 370px;
}

@media (max-width: 600px) {
  .control-container .form-group {
    flex: 1 1 100%;
  }
}

.form-group-file {
  flex: 1 1 100%;
}

</style>
