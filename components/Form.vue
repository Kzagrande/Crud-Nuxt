<template>
  <section class="box">
    <b-field label="Título do Post">
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

  created() {},

  methods: {
    clickMe() {
      this.$store
        .dispatch("posts/sendPost")
        .then(() => {
          this.$buefy.notification.open("Seu Post foi salvo");
        })
        .catch(() => {
          this.$buefy.notification.open(
            "Erro ao enviar, tente novamente mais tarde"
          );
        });
    },
  },
};
</script>

<style></style>
