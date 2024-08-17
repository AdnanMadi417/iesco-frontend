<script setup lang="ts">

const items = [{
  label: 'Requierment 1',
  icon: 'i-heroicons-square-3-stack-3d',
  content: 'Apply at one of the selected universities for the programme of your choice and get the offer letter and VISA approval letter (VAL).',
  style:{
    color:'rgb(28, 100, 188)',
    backgroundColor:'rgb(28, 100, 188,.5)'
  }
},
  {
  label: 'Requierment 2',
  icon: 'i-heroicons-square-3-stack-3d',
  content: 'Once you receive your Letter of Offer, proceed to IESCO  Scholarship in Malaysia (ISM) website and register yourself.',
    style:{
      color:'rgb(28, 100, 188)',
      backgroundColor:'rgb(28, 100, 188,.5)'
    }
},
  {
    label: 'Requierment 3',
    icon: 'i-heroicons-square-3-stack-3d',
    content: 'Wait for the reply of approval or disapproval of your application.',
    style:{
      color:'rgb(28, 100, 188)',
      backgroundColor:'rgb(28, 100, 188,.5)'
    }
  },
  {
    label: 'Requierment 4',
    icon: 'i-heroicons-square-3-stack-3d',
    content: 'Once you are approved, the International Educational Scientific and Cultural Organization will contact you for further details.',
    style:{
      color:'rgb(28, 100, 188)',
      backgroundColor:'rgb(28, 100, 188,.5)'
    }
  }
]
</script>

<template>
  <div class="container">
    <div></div>
    <div class="requirement">
      <h1>HOW DO NEW STUDENTS APPLY FOR ISM ?</h1>
      <h5>Application need to :</h5>
      <UAccordion :items="items" />
    </div>
    <div></div>
  </div>
</template>

<style  scoped>
.container h1{
  text-align: center;
  padding: 30px 0;
  font-size: 26px;
  font-weight: bold;
  color: var(--main-color);
}
.container h5{
  padding: 0 0 20px ;
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.54);
}
.container {
  display: flex;
  justify-content: center;
  padding: 50px;
}

.container div {
  flex: 20%;
}
.container .requirement{
  flex: 60%;
}
@media (max-width: 800px) {
  .container {
  flex-direction: column;
    padding: 10px;
};
  .container div {
    flex: 0;
  }
  .container .requirement{
    flex: 100%;
  }
}
</style>

