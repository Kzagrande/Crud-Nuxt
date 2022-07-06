<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sao_Paulo_Metro_Logo.svg/1280px-Sao_Paulo_Metro_Logo.svg.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>

      <template #start>
        <nuxt-link to="/">
          <b-navbar-item>Página Principal</b-navbar-item>
        </nuxt-link>

        <nuxt-link to="new-post">
          <b-navbar-item>Crir um novo Post</b-navbar-item>
        </nuxt-link>

        <nuxt-link to="posts">
          <b-navbar-item>Posts</b-navbar-item>
        </nuxt-link>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Entre</strong>
            </a>
            <a class="button is-light">Cadastre-se </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
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
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
};
</script>
