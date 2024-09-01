<script setup lang="ts">
import {z} from "zod";
import {reactive, ref} from "vue";
import type {FormSubmitEvent} from '#ui/types';
import {nationalities} from "~/utils/nationalties";

const schema = z.object({
  arabicName: z.string()
      .regex(/^[\u0600-\u06FF\s]+$/, 'Must contain only Arabic characters')
      .min(8, 'Must be at least 8 characters'),
  englishName: z.string()
      .regex(/^[a-zA-Z\s]+$/, 'Must contain only English characters')
      .min(8, 'Must be at least 8 characters'),
  passportNumber: z.string(),
  emailAddress: z.string().email('Invalid email'),
  localNumber: z.string().regex(/^\d{8,}$/, "Must be at least 8 numbers"),
  whatsAppNumber: z.string().regex(/^\d{8,}$/, "Must be at least 8 numbers"),
  malaysiainAddress: z.string().min(12, 'Must be at least 8 characters'),
  dateOfBirth: z.string().refine(val => {
    const date = new Date(val);
    return !isNaN(date.getTime());
  }, {
    message: 'Invalid date format'
  }),
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
    id: "arabicName",
    color: "rgb(28, 100, 188)",
    icon: "ph-user",
    placeholder: "Enter your Arabic name",
  },
  {
    label: "Student's name in English",
    type: "text",
    id: "englishName",
    color: "rgb(28, 100, 188)",
    icon: "ph-user",
    placeholder: "Enter your English name",
  },
  {
    label: "Passport Number in English",
    type: "text",
    id: "passportNumber",
    color: "rgb(28, 100, 188)",
    icon: "mdi-passport",
    placeholder: "23432125",
  },
  {
    label: "Passport Number in English",
    type: "date",
    id: "dateOfBirth",
    color: "rgb(28, 100, 188)",
    icon: "uiw-date",
    placeholder: "MM/dd/yyyy",
  },
  {
    label: "Student's Email address ",
    type: "email",
    id: "email",
    color: "rgb(28, 100, 188)",
    icon: "ic-outline-email",
    placeholder: "emailAddress@gmail.com",
  },
  {
    label: "Local Number",
    type: "text",
    id: "localNumber",
    color: "rgb(28, 100, 188)",
    icon: "ph-phone",
    placeholder: "Enter your local Number",
  },
  {
    label: "WhatsApp Number",
    type: "text",
    id: "whatsAppNumber ",
    color: "rgb(28, 100, 188)",
    icon: "ph-phone",
    placeholder: "Enter your whatsApp Number",
  },
  {
    label: "Address in Malaysia",
    type: "address",
    id: "malaysiainAddress",
    color: "rgb(28, 100, 188)",
    icon: "tabler-world",
    placeholder: "Kuala Lapmur Ampang",
  }
]

let previousSelectQuestions = [
  {
    label: "Gender",
    type: "select",
    id: "gender",
    color: "rgb(28, 100, 188)",
    icon: "ph-user",
    placeholder: "Male Or Female",
    options: [
      "Male", "Female"
    ]
  },
  {
    label: "Marital Status ",
    type: "select",
    id: "maritalStatus ",
    color: "rgb(28, 100, 188)",
    icon: "ph-user",
    options: [
      "Single", "Married", "Widower", "Divorced"
    ],
    placeholder: "Marital Status ",
  },
  {
    label: "Your Nationality",
    type: "select",
    id: "maritalStatus ",
    color: "rgb(28, 100, 188)",
    icon: "tabler-world",
    options: filteredNationalities.value,
    placeholder: "Select Nationality"
  }
]


const state = reactive({
  email: undefined,
  password: undefined,
  arabicName: undefined,
  englishName: undefined,
  passportNumber: undefined,
  localNumber: undefined,
  whatsAppNumber: undefined,
  malaysiainAddress: undefined,
  maritalStatus: undefined,
  gender: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}

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
      label: "school Name University Name",
      type: "text",
      id: "schoolName",
      color: "rgb(28, 100, 188)",
      icon: "fa-solid-university",
      placeholder: "Enter your University Name",
    },
    {
      label: "Passport 1st page",
      type: "file",
      id: "passportFile",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
      placeholder: "Passport 1st page (1 MB max) :"
    },
    {
      label: "Certified Original Copy of High School Academic Certificate ",
      type: "file",
      id: "highSchoolFile",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
      placeholder: "Certified Original Copy of High School Academic Certificate :"
    },
    {
      label: "Certified Original Copy of English Proficiency Qualification (MUET, TOEFL, IELTS, or Equivalent, if available)",
      type: "file",
      id: "englishQualificationFile",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
      placeholder: "(MUET, TOEFL, IELTS, or Equivalent, if available):",
      required: false,
    },
    {
      label: "Other supporting document",
      type: "file",
      id: "OtherSupportingFile",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
      placeholder: "Other supporting document"
    }
  ],
  Ba: [
    {
      label: "Current University Name",
      type: "text",
      id: "currentUniversityName",
      color: "rgb(28, 100, 188)",
      icon: "fa-solid-university",
      placeholder: "Enter your Current University Name",
    },
    {
      label: "Number of Semesters Remaining Until Graduation",
      type: "text",
      id: "numSemToGraduation",
      color: "rgb(28, 100, 188)",
      icon: "system-uicons:book",
      placeholder: "Number of Semesters Remaining Until Graduation",
    },
    {
      label: "Fees per Semester",
      type: "text",
      id: "feesPerSemester",
      color: "rgb(28, 100, 188)",
      icon: "solar-money-bag-broken",
      placeholder: "Fees per Semester",
    },
    {
      label: "Passport 1st page",
      type: "file",
      id: "passportFile",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
      placeholder: "Passport 1st page (1 MB max) :"
    },
    {
      label: "Candidate Progress Report (for postgraduate students)",
      type: "file",
      id: "candidateProgressReport",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
    },
    {
      label: "Tuition Fees Statement (latest from university) :",
      type: "file",
      id: "tuitionFeesStatement",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
    },
    {
      label: "Confirmation Letter from University (latest date)",
      type: "file",
      id: "confirmationLetter",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
    },
    {
      label: "Offer Letter",
      type: "file",
      id: "OfferLetterFile",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
    },
    {
      label: "Other supporting document ",
      type: "file",
      id: "OtherSupportingFile",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
      placeholder: "Other supporting document"
    }
  ],
  MaPHD: [
    {
      label: "Current University Name",
      type: "text",
      id: "CurrentUniversityName",
      color: "rgb(28, 100, 188)",
      icon: "fa-solid-university",
      placeholder: "Enter your Current University Name",
    },
    {
      label: "Name of Graduate University",
      type: "text",
      id: "nameGraduateUniversity",
      color: "rgb(28, 100, 188)",
      icon: "fa-solid-university",
      placeholder:"Name of Graduate University"
    },
    {
      label: "Academic Specialization",
      type: "text",
      id: "academicSpecializationFile",
      color: "rgb(28, 100, 188)",
      icon: "system-uicons:book",
      placeholder: "Academic Specialization",
    },
    {
      label: "Fees per Semester",
      type: "text",
      id: "feesperSemester",
      color: "rgb(28, 100, 188)",
      icon: "solar-money-bag-broken",
      placeholder: "Fees per Semester",
    },
    {
      label: "Passport 1st page",
      type: "file",
      id: "passportFile",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
    },
    {
      label: "A Paper from the Supervisor (for Master’s and Doctoral levels)",
      type: "file",
      id: "paperFromSupervisor",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
    },
    {
      label: "Tuition Fees Statement (latest from university) ",
      type: "file",
      id: "tuitionFeesStatement",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
    },
    {
      label: "Confirmation Letter from University (latest date)",
      type: "file",
      id: "confirmationLetter",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
    },
    {
      label: "Offer Letter",
      type: "file",
      id: "OfferLetterFile",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
    },
    {
      label: "Other supporting document",
      type: "file",
      id: "otherSupportingFile",
      color: "rgb(28, 100, 188)",
      icon: "i-heroicons-folder",
    }
  ],
})

const educationLevelSelected = ref("EL");

const showSunmiition = ref(true);

const notificationPopup = ref(false);

const showStudentDetails = (row) => {
  showSunmiition.value = false;

  notificationPopup.value = true;
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
                  :color="student.color"
                  variant="outline"
                  :icon="student.icon"
                  :placeholder="student.placeholder"
                  v-model="state[student.id]"
                  required
              />
            </UFormGroup>
          </div>
          <div v-for="student in previousSelectQuestions" :key="student.id">
            <UFormGroup class="form-group" :label="student.label" :name="student.id">
              <USelect
                  :type="student.type"
                  size="md"
                  :color="student.color"
                  variant="outline"
                  :icon="student.icon"
                  :placeholder="student.placeholder"
                  v-model="state[student.id]"
                  :options="student.options"
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
                color=rgb(28, 100, 188)
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
                    :color="question.color"
                    variant="outline"
                    :icon="question.icon"
                    :placeholder="question.placeholder"
                    required
                />
              </div>
            </div>
          </div>
        </div>
        <UButton type="submit">
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
