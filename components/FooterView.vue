<template>
  <footer class="">
    <div class="footer-section">
      <div class="container">
        <div class="img-logo">
          <a href="https://iesco.my/">
            <img
                class="logo"
                src="../public/images/isco-logo.png"
                alt="https://iesco.my/"
            />
          </a>
        </div>
        <div class="cantact-detail">
          <h2>{{ $t('contactUs') }}</h2>
          <div class="whatsappNum">
          <span>
            <UIcon name="ic-baseline-whatsapp" class=""/>
          </span>
            <span> <a href=""> +(60) 3-4144 2894</a></span>
          </div>
        </div>
        <div class="location-detail">
          <h2>{{ $t('location') }}</h2>
          <div>
            <a class="text-decoration-none address"
               href="https://www.google.com/maps/place/IESCO+MALAYSIA/@3.2046512,101.7219557,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc381168cf8e6f:0xfd29cb7efe012fd4!8m2!3d3.2046512!4d101.7219557!16s%2Fg%2F11bzsgc_qv?entry=ttu"
            >
              <p class="address">
              <UIcon name="mdi-location" class="w-5 h-5"/>
              {{ $t('address') }}</p>
            </a>
          </div>
        </div>
        <div class="scoial-media">
          <h2>{{ $t('followIesco') }}</h2>
          <div class="container">
            <ul class="scoial-media-icon">
              <li>
                <a href="https://www.instagram.com/iescomalaysia/">
                  <UIcon name="mdi-instagram"/>
                </a>

              </li>
              <li>
                <a class="" href="https://www.youtube.com/@iescomalaysia7383">
                  <UIcon name="hugeicons-youtube"/>
                </a>
              </li>
              <li>
                <a class="" href="https://www.facebook.com/IESCOMALAYSIA/">
                  <UIcon name="mingcute-facebook-line"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyrights">
      {{ $t('copyright') }}
    </div>
  </footer>
</template>
<script>
</script>
<style scoped lang="scss">
footer {
  background-color: var(--main-hovor-color);
}

footer .footer-section {
  justify-items: center;
  text-align: center;
  margin: 50px;
}

@media (max-width: 800px) {
  footer .footer-section {
    justify-items: center;
    margin: 10px;
  }
}

footer .container {
  display: flex;
  flex-direction: row;
  text-align: start;
  padding-top: 30px;
  padding-bottom: 30px;
}

footer .container div {
  flex: 25%;
}

@media (max-width: 800px) {
  footer .container {
    flex-direction: column;
    text-align: center;

    h2,
    div {
      text-align: start;
      padding-bottom: 10px;
    }
  }
  footer .container div {
    flex: 100%;
  }
}

footer .img-logo {
  max-width: 100%;
  display: block;
  margin-top: -5rem;
}

footer .container .cantact-detail div {
  font-size: 20px;
  color: white;
}

footer .container .cantact-detail div {
  font-size: 20px;
}

footer .container .cantact-detail > h2 {
  color: white;
  font-size: 28px;
}

footer .container .cantact-detail div span:first-child {
  padding: 0;
  font-size: 22px;
}

footer .container .cantact-detail div span:nth-child(2) {
  padding: 10px;
}

footer .container .location-detail > h2 {
  color: white;
  font-size: 28px;
}

footer .container .location-detail div span {
  padding: 0;
  font-size: 16px;
  color: #eeeeee;
}

footer .container .location-detail .address{
  max-width: 15rem;
  padding: 0;
  font-size: 16px;
  color: #eeeeee;
  text-align:justify ;
}

footer .container .location-detail div span:nth-child(2) {
  padding: 10px;
}

footer .scoial-media h2 {
  font-size: 28px;
  color: #eeeeee;
}

footer .scoial-media .scoial-media-icon {
  list-style: none;
  display: flex;
}

footer .scoial-media .scoial-media-icon li {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px;
}

footer .scoial-media li a {
  font-size: 30px;
  color: white;
}

footer .copyrights {
  font-size: 16px;
  width: 100%;
  text-align: center;
  color: white;
}
</style>
