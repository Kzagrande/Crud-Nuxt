<template>
  <section class="box">
    <b-field label="Título">
      <b-input v-model="titulo"></b-input>
    </b-field>

    <b-field label="Título da Foto" type="">
      <b-input type="email" value="" maxlength="30"> </b-input>
    </b-field>

    <b-field label="Url" type="">
      <b-input maxlength="30"></b-input>
    </b-field>

    <b-field label="Descrição">
      <b-input maxlength="200" type="textarea"></b-input>
    </b-field>

    <b-button type="is-success" @click="clickMe">Click Me</b-button>
  </section>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      titulo: "",
    };
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open("Clicked!!");
    },
  },
};
</script>

<style></style>
