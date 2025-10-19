<script setup lang="ts">
const navLinks = [
  { name: "Home", link: "https://iesco.my/" },
  { name: "About Us", link: "https://iesco.my/about-us/" },
  { name: "Programs", link: "https://iesco.my/scholarships-and-grants-program/" },
  { name: "Scholarships", link: "https://iesco.my/how-to-apply-for-scholarships/" },
  { name: "FAQ", link: "https://iesco.my/faq/" },
  { name: "Privacy Policy", link: "https://iesco.my/privacy-policy/" }
];
</script>

<template>
  <footer class="footer">
    <div class="footer-container">

      <div class="footer-logo">
        <img src="/images/isco-logo.png" alt="IESCO Logo" class="logo" />
      </div>

      <div class="footer-links">
        <h2>Useful Links</h2>
        <ul>
          <li v-for="(item, index) in navLinks" :key="index">
            <UIcon name="mdi-chevron-right" />
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-social">
        <h2>Follow Us</h2>
        <ul class="social-icons">
          <li>
            <a href="https://www.facebook.com/IESCOMALAYSIA/" target="_blank">
              <UIcon name="mingcute-facebook-line" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/iescomalaysia/" target="_blank">
              <UIcon name="mdi-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@iescomalaysia7383" target="_blank">
              <UIcon name="hugeicons-youtube" />
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-contact">
        <h2>Contact Us</h2>

        <div class="contact-item">
          <UIcon name="mdi-map-marker" />
          <span>
            E-3A-07, Pusat Komersial Setapak,<br />
            Jln Taman Ibu Kota, Taman Danau Kota,<br />
            53300 Kuala Lumpur
          </span>
        </div>

        <div class="contact-item">
          <UIcon name="mdi-phone" />
          <a href="tel:+60341442894">+(60) 3-4144 2894</a>
        </div>

        <div class="contact-item">
          <UIcon name="mdi-email" />
          <a href="mailto:info@iesco.my">info@iesco.my</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>Copyright 2025, IESCO. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(to bottom, #1e67b1, #0e8e71);
  color: #fff;
  font-family: "Inter", sans-serif;
  padding: 3rem 1rem 1rem;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
}

.footer-logo img.logo {
  width: 220px;
  margin-bottom: 1rem;
}

.footer-logo p {
  font-size: 0.95rem;
  color: #e5e5e5;
  line-height: 1.5;
  max-width: 260px;
}

.footer-links h2,
.footer-social h2,
.footer-contact h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
}

.footer-links a {
  color: #e8e8e8;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #fff;
}

.footer-links svg {
  font-size: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icons a {
  color: #fff;
  font-size: 1.4rem;
  transition: transform 0.3s, color 0.3s;
}

.social-icons a:hover {
  color: #c2ffe4;
  transform: translateY(-3px);
}

.footer-contact .contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
  color: #e8e8e8;
  font-size: 0.95rem;
  line-height: 1.4;
}

.footer-contact .contact-item a {
  color: #e8e8e8;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact .contact-item a:hover {
  color: #fff;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  padding-top: 1rem;
  margin-top: 2rem;
}

.footer-bottom p {
  font-size: 0.9rem;
  color: #f0f0f0;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1rem;
  }

  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-logo img.logo {
    margin: 0 auto 1rem;
  }

  .footer-links li {
    justify-content: center;
  }

  .footer-contact .contact-item {
    justify-content: center;
  }
}
</style>
