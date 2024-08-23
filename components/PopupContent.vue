<script setup lang="ts">
const props = defineProps(['studentInfo'])
console.log("welcome")
console.log(props)

</script>

<template>
  <div class="controlPopup">
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="mdi-user-outline" class="w-5 h-5" />
          Student ID
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.id}}
        </label>
      </div>
    </div>
      <!-- student Id    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="mdi-user-outline" class="w-5 h-5" />
          Arabic Name
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.ArabicName}}
        </label>
      </div>
    </div>
    <!-- student arabic name     -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="mdi-user-outline" class="w-5 h-5" />
          Eglish Name
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.englishName}}
        </label>
      </div>
    </div>
    <!-- student english name -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="mdi-passport" class="w-5 h-5" />
          Passport Number
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.passportNumber}}
        </label>
      </div>
    </div>
    <!-- student Passport Number    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="mdi-email" class="w-5 h-5" />
          Email Address
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.emailAddress}}
        </label>
      </div>
    </div>
    <!-- student email Address    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="basil-location-outline" class="w-5 h-5" />
          Address In Malaysia
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.malaysiainAddress}}
        </label>
      </div>
    </div>
    <!-- student malaysiain Address   -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="mdi-world" class="w-5 h-5" />
          Nationality
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.nationality}}
        </label>
      </div>
    </div>
    <!-- student nationality    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="ic-outline-phone" class="w-5 h-5" />
          Local Number
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.localNumber}}
        </label>
      </div>
    </div>
    <!-- student  localNumber   -->
    <div class="controlPopupContent">
    <div >
      <label>
        <UIcon name="ic-outline-phone" class="w-5 h-5" />
        WhatsApp Number
      </label>
    </div>
    <div>
      <label>
        {{studentInfo.whatsAppNumber}}
      </label>
    </div>
  </div>
    <!-- student  whatsappNumber   -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="teenyicons-id-outline" class="w-5 h-5" />
          Marital Status
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.maritalStatus}}
        </label>
      </div>
    </div>
    <!-- student marital Status    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="mdi-user-outline" class="w-5 h-5" />
          Gender
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.gender}}
        </label>
      </div>
    </div>
    <!-- student Gender    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="uil-university" class="w-5 h-5" />
          <span class="importantInfo"> Education Level</span>
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.educationLevel}}
        </label>
      </div>
    </div>
    <!-- student Education Level    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="uil-university" class="w-5 h-5" />
          School Name
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.schoolName}}
        </label>
      </div>
    </div>
    <!-- student school Name    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="uil-university" class="w-5 h-5" />
          <span class="importantInfo">Current University Name</span>
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.currentUniversityName}}
        </label>
      </div>
    </div>
    <!-- student University Name    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="uil-university" class="w-5 h-5" />
          Name of Graduate University
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.nameofGraduateUniversity}}
        </label>
      </div>
    </div>
    <!-- student Name of Graduate University    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="uil-university" class="w-5 h-5" />
          Semesters Remaining Until Graduation
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.numSemToGraduation}}
        </label>
      </div>
    </div>
    <!-- student number Semester To Graduation    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="uil-university" class="w-5 h-5" />
          Fees Per Semester
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.feesPerSemester}}
        </label>
      </div>
    </div>
    <!-- student fees Per Semester    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="uil-university" class="w-5 h-5" />
          Tuition Fees Statement
        </label>
      </div>
      <div>
        <label>
          {{studentInfo.tuitionFeesStatement}}
        </label>
      </div>
    </div>
    <!-- student Tuition Fees Statement -->
    <!-- Student Files    -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          Passport File
        </label>
      </div>
      <div>
        <label>
          <span>
            <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          </span>
          {{studentInfo.passportFile}}
        </label>
      </div>
    </div>
    <!-- Passport File   -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          High School Academic Certificate
        </label>
      </div>
      <div>
        <label>
          <span>
            <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          </span>
          {{studentInfo.highSchoolFile}}
        </label>
      </div>
    </div>
    <!-- Passport High School Academic Certificate   -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          English Qualification  File
        </label>
      </div>
      <div>
        <label>
          <span>
            <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          </span>
          {{studentInfo.englishQualificationFile}}
        </label>
      </div>
    </div>
    <!-- Passport english Qualification File   -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          Candidate Progress Report
        </label>
      </div>
      <div>
        <label>
          <span>
            <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          </span>
          {{studentInfo.candidateProgressReport}}
        </label>
      </div>
    </div>
    <!-- Passport Candidate Progress Report   -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          Confirmation Letter from University
        </label>
      </div>
      <div>
        <label>
          <span>
            <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          </span>
          {{studentInfo.confirmationLetter}}
        </label>
      </div>
    </div>
    <!-- Passport Confirmation Letter from University   -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          Offer Letter File
        </label>
      </div>
      <div>
        <label>
          <span>
            <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          </span>
          {{studentInfo.OfferLetterFile}}
        </label>
      </div>
    </div>
    <!-- Passport Offer Letter File   -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          Academic Specialization File
        </label>
      </div>
      <div>
        <label>
          <span>
            <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          </span>
          {{studentInfo.academicSpecializationFile}}
        </label>
      </div>
    </div>
    <!-- Passport academic Specialization File   -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          A Paper from the Supervisor File
        </label>
      </div>
      <div>
        <label>
          <span>
            <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          </span>
          {{studentInfo.paperFromSupervisor}}
        </label>
      </div>
    </div>
    <!-- Passport paper From Supervisor   -->
    <div class="controlPopupContent">
      <div>
        <label>
          <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          Other supporting document Files
        </label>
      </div>
      <div>
        <label>
          <span>
            <UIcon name="i-heroicons-folder" class="w-5 h-5" />
          </span>
          {{studentInfo.otherSupportingFile}}
        </label>
      </div>
    </div>
    <!-- Passport paper From Supervisor   -->
  </div>
</template>

<style scoped>
.controlPopup {
  display: block;
}

.controlPopupContent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 16px;
}

.controlPopup .controlPopupContent > div:first-child{
  flex: 50%;
  padding: 10px ;
}
.controlPopup .controlPopupContent > div:last-child{
  flex: 20%;
  padding: 10px ;
}

.controlPopup .controlPopupContent > div label{
  padding: 10px 0;
  font-size: 1em;
  font-weight: normal;
  margin: 0 15px;
}

.importantInfo {
  font-weight:bold;
  color:red ;
}

.controlPopup .controlPopupContent > div:first-child {
  background-color: #eeeeee;
}

</style>