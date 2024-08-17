<template>
  <div class="heder">
    <nav class="navbar navbar-expand-lg">
      <div class="container" id="">
        <a href="https://iesco.my/">
          <img
            class="logo"
            style="width: 100px; height: 60px"
            src="../public/images/isco-logo.png"
            alt="https://iesco.my/"
          />
        </a>
        <div class="">
          <h3 class="fs-4 ms-5 me-5">IESCO Scholarship in Malaysia (ISM)</h3>
        </div>
      </div>
    </nav>
    <div>
      <h1>Welcome to the homepage</h1>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.navbar {
  background-color: var(--main-color);
}

.navbar .social-icon ul li {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.navbar .social-icon ul li a,
.navbar div h3 {
  color: #eee;
}

.navbar .social-icon ul li a:hover {
  color: var(--background-color);
  transition: 0.3s;
}

.navbar h3 {
  color: var(--main-color);
}
</style>
