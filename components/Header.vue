<script setup lang="ts">
import { ref } from "vue";

const navItems = ref([
  { name: "About Us", link: "https://iesco.my/about-us/" },
  { name: "Campaigns", link: "https://donate.iesco.my/" },
  { name: "Blog", link: "https://iesco.my/blog/" },
  { name: "Programs", link: "https://iesco.my/scholarships-and-grants-program/" },
  { name: "Scholarships", link: "https://iesco.my/how-to-apply-for-scholarships/" },
  { name: "Media", link: "https://iesco.my/news/" },
  { name: "Contact", link: "https://iesco.my/contact-us/" },
]);

const isMenuOpen = ref(false);
</script>

<template>
  <header class="header">
    <div class="header-container">

      <a href="https://iesco.my/" class="logo-container">
        <img src="/images/iesco-logo.png" alt="IESCO Logo" class="logo" />
      </a>

      <nav class="nav">
        <ul class="nav-list">
          <li v-for="(item, index) in navItems" :key="index">
            <a :href="item.link">{{ item.name }}</a>
          </li>
        </ul>
      </nav>

      <a href="https://donate.iesco.my/" class="donate-btn">Donate Now</a>

      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>
    </div>

    <transition name="slide">
      <div v-if="isMenuOpen" class="mobile-menu">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <a :href="item.link" @click="isMenuOpen = false">{{ item.name }}</a>
          </li>
          <li>
            <a href="https://donate.iesco.my/" class="donate-btn-mobile">Donate Now</a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--main-color);
  color: white;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1000;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  height: 80px;
  text-align: center;
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.logo {
  width: 100px;
  height: auto;
  margin-right: 0.5rem;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-list li a:hover {
  color: #cde9ff;
}

.donate-btn {
  background-color: #fff;
  color: var(--main-color);
  padding: 0.6rem 1.4rem;
  border-radius: 0 2rem 2rem 2rem ;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
}

.menu-toggle span.open:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}
.menu-toggle span.open:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.mobile-menu {
  background-color: var(--main-color);
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu li {
  margin-bottom: 1rem;
}

.mobile-menu li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.mobile-menu li a:hover {
  color: #cde9ff;
}

.donate-btn-mobile {
  display: inline-block;
  color: white;
  border-radius: 0 ;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 992px) {
  .nav {
    display: none;
  }

  .donate-btn {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .header-container {
    padding: 1rem;
  }
}


.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
