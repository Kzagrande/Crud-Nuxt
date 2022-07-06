<template>
  <div>
    <Header />
    <section class="hero is-link is-small">
      <div class="hero-body">
        <p class="title">Qual a Boa SP ?</p>
        <p class="subtitle">
          Descubra o que rola de melhor em são paulo pra hoje <br />
          E o melhor, sempre próximo a um metro
        </p>
      </div>
    </section>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
export default {
  components: {
    Header,
    Footer,
  },

  name: "DefaultLayout",
  data() {
    return {};
  },
};
</script>
