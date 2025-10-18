<template>
  <footer class="footer">
    <div class="footer-section">
      <div class="footer-container">

        <div class="footer-logo">
          <a href="https://iesco.my/" target="_blank" rel="noopener">
            <img class="logo" src="/images/isco-logo.png" alt="IESCO Logo"/>
          </a>
        </div>

        <div class="footer-contact">
          <h2>{{ $t('contactUs') }}</h2>
          <div class="footer-item">
            <UIcon name="ic-baseline-whatsapp"/>
            <a href="https://wa.me/60341442894" target="_blank">+(60) 3-4144 2894</a>
          </div>
        </div>

        <div class="footer-location">
          <h2>{{ $t('location') }}</h2>

          <div class="footer-item">
            <a
                href="https://www.google.com/maps/place/IESCO+MALAYSIA/"
                target="_blank">
              {{ $t('address') }}
            </a>
          </div>

        </div>

        <div class="footer-social">
          <h2>{{ $t('followIesco') }}</h2>
          <ul class="social-icons">
            <li><a href="https://www.instagram.com/iescomalaysia/" target="_blank">
              <UIcon name="mdi-instagram"/>
            </a></li>
            <li><a href="https://www.youtube.com/@iescomalaysia7383" target="_blank">
              <UIcon name="hugeicons-youtube"/>
            </a></li>
            <li><a href="https://www.facebook.com/IESCOMALAYSIA/" target="_blank">
              <UIcon name="mingcute-facebook-line"/>
            </a></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="footer-bottom">
      <p>{{ $t('copyright') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(to top, #0e8e71, var(--main-hovor-color));
  color: #fff;
  padding: 3rem 1rem 1rem;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  text-align: start;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.footer-section {
  text-align: start;
  width: 100%;
}

.footer h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-item {
  display: flex;
  align-items: start;
  gap: 0.6rem;
  color: #e8e8e8;
  font-size: 1rem;
  transition: all 0.3s ease;
  flex-wrap: wrap;
}

.footer-item a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-item a:hover {
  color: #fff;
}

.footer-item svg {
  font-size: 1.3rem;
}

.footer-logo {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.footer-logo .logo {
  width: 200px;
  height: auto;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.footer-logo .logo:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.footer-social .social-icons {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0;
  flex-wrap: wrap;
}

.footer-social .social-icons li a {
  font-size: 1.6rem;
  color: #fff;
  transition: all 0.3s ease;
}

.footer-social .social-icons li a:hover {
  color: #c2ffe4;
  transform: translateY(-4px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
  padding-top: 1rem;
  width: 100%;
  text-align: start;
}

.footer-bottom p {
  font-size: 0.9rem;
  color: #f0f0f0;
  margin: 0;
}

/* Tablet */
@media (max-width: 992px) {
  .footer h2 {
    font-size: 1.15rem;
  }

  .footer-logo .logo {
    width: 180px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .footer {
    padding: 2rem 1rem 1rem;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer h2 {
    font-size: 1rem;
  }

  .footer-item {
    font-size: 0.95rem;
    gap: 0.5rem;
  }

  .footer-logo .logo {
    width: 140px;
  }

  .footer-social .social-icons li a {
    font-size: 1.4rem;
  }
}
</style>
<script setup lang="ts">
</script>