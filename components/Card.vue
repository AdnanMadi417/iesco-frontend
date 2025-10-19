<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">IESCO Scholarship Application</h1>
      <p class="hero-subtitle">
        Empowering international students from less fortunate backgrounds to
        pursue advanced education in Malaysia through the IESCO Scholarship.
      </p>
    </div>
  </section>

  <section class="scholarship-section">
    <div class="scholarship-card">
      <p>
        <strong>IESCO Scholarship in Malaysia (ISM)</strong> is an initiative by the
        International Educational Scientific and Cultural Organization (IESCO) to attract
        students from less fortunate places to pursue advanced academic studies in
        Malaysia. International students are welcomed to apply for this scholarship and
        further their studies in the selected Malaysian universities.
      </p>
    </div>
  </section>

</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #0e68b3 0%, #1a6ed9 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 1rem;
  min-height: 60vh;
  margin: 1rem;
}

.hero-content {
  max-width: 900px;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  color: #e3e9f0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}


.scholarship-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.scholarship-card {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 2rem 2.5rem;
  max-width: 900px;
  line-height: 1.8;
  color: #333;
  font-size: 1.05rem;
}

.scholarship-card strong {
  color: black;
  font-weight: 700;
}

@media (max-width: 768px) {
  .scholarship-card {
    padding: 1.5rem;
    font-size: 1rem;
  }
}

</style>
