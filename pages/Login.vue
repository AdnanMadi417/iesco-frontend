<script setup lang="ts">

</script>

<template>
  <div class="login-page" id="login">
    <div class="main-container">
      <div class="dic-color-one">
        <div class="info"><img src="../public/images/isco-logo.png" alt="">
          <h2>IESCO Scholarship in Malaysia (ISM)</h2>
          <UIcon name="cil-education" class="educationIcon" style="color: white"/>
        </div>
      </div>
      <div class="dic-color-two">
        <div class="info-container">
          <h2 class="h2-one">Welcome</h2>
          <h2 class="h2-two">IESCO</h2>
          <h2 class="h2-three">Scholarship system</h2>
        </div>
        <div class="controlForm">
          <form>
            <div class="control-input">
              <div class="input-group">
                <label for="email">Your email</label>
                <UInput
                    color="rgb(28, 100, 188)"
                    variant="outline"
                    id="Admminemail"
                    placeholder="Enter your email"
                    required
                    size="md"
                    icon="mdi-email"
                />
              </div>
              <div class="input-group">
                <label for="password">Password</label>
                <UInput
                    type="password"
                    color="rgb(28, 100, 188)"
                    variant="outline"
                    id="Admminpassword"
                    placeholder="Enter your password"
                    size="md"
                    required
                    icon="mdi-password"
                />
              </div>
              <div class="input-group">
                <div class="options">
                  <div>
                    <div>
                      <label>
                        <input type="checkbox"> Remember me
                      </label>
                    </div>
                    <div>
                      <a href="#">
                        <UIcon
                            name="ri-device-recover-line"
                            class="w-5 h-5"
                        />
                        Recover password
                      </a>
                    </div>
                    <div>
                      <NuxtLink to="/registeration">
                        <UIcon
                            name="material-symbols-tv-signin-outline-sharp"
                            class="w-5 h-5"
                        />
                        Sign Up
                      </NuxtLink>
                    </div>
                  </div>
                </div>
                <button type="submit">SIGN IN</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  height: 1000px;
}

.login-page .main-container {
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 3% 15%;
  box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;
}

@media (min-device-width: 768px) and (max-device-width: 1024px) {
  .login-page .main-container {
    display: block;
    margin: 15px 10%;
    width: 80%;
  }
}

@media (max-width: 600px) {
  .login-page .main-container {
    display: block;
    margin: 0;
    width: 100%;
  }
}

.login-page .main-container .dic-color-one {
  background-color: var(--main-color);
  flex: 30%;
}

.login-page .main-container .info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.login-page .main-container .info img {
  width: 200px;
  height: 120px;
  margin: 50px auto;
}

.login-page .main-container .info h2 {
  font-size: 24px;
  font-weight: normal;
  color: #eeeeee;
}

.login-page .main-container .info .educationIcon {
  font-size: 15rem;
}

.login-page .main-container .dic-color-two {
  background-color: #eeeeee;
  flex: 40%;
  height: 600px;
}

.dic-color-two .info-container {
  font-weight: bold;
}

.dic-color-two .info-container {
  margin-left: 30px;
}

.dic-color-two .info-container .h2-one {
  font-size: 4rem;
  color: var(--main-color);
  margin-left: 2rem;
  font-weight: lighter;
}

.dic-color-two .info-container .h2-two {
  font-size: 4rem;
  color: var(--main-color);
  margin-top: -3rem;
  margin-left: 3rem;
}

.dic-color-two .info-container .h2-three {
  font-size: 2rem;
  color: var(--main-color);
  margin-top: -2.5rem;
  margin-left: 0;
  font-weight: normal;
}

@media (max-width: 600px) {
  .dic-color-two .info-container .h2-one {
    font-size: 30px;
    color: var(--main-color);
    margin-left: 30px;
  }

  .dic-color-two .info-container .h2-two {
    font-size: 50px;
    color: var(--main-color);
    margin-top: -32px;
    margin-left: 50px;
  }

  .dic-color-two .info-container .h2-three {
    font-size: 30px;
    color: var(--main-color);
    margin-top: -25px;
    margin-left: 0;
    font-weight: normal;
  }

}

.login-page .main-container .controlForm {
  display: block;
  text-align: start;
  align-items: center;
  margin: 40px auto;
}

.login-page .main-container .control-input {
  width: 70%;
  align-items: center;
  margin: 5% auto 0;
}

@media (max-width: 600px) {
  .login-page .main-container .controlForm {
    margin: 50px auto;
    padding: 0 20px;
  }

  .login-page .main-container .control-input {
    width: 80%;
  }
}

.login-page .main-container .input-group .options {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.login-page label,
.login-page a {
  font-size: 18px;
  font-weight: normal;
  color: var(--main-color);
}

.login-page button {
  padding: 7px;
  font-weight: normal;
  border-radius: 15px;
  margin-top: 30px;
  border: 2px solid var(--main-color);
  color: var(--main-color);
}

.login-page button:hover {
  background-color: var(--main-color);
  color: #eeeeee;
}
</style>