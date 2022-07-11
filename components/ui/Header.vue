<template>
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

      <nuxt-link to="posts">
        <b-navbar-item>Posts</b-navbar-item>
      </nuxt-link>
    </template>

    <template #end> </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style></style>
