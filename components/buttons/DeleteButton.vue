<template>
  <b-button
    @click="deletePhoto"
    type="is-danger is-medium"
    icon-right="delete"
    class="container"
    >Remover</b-button
  >
</template>

<script>
export default {
  name: "DeleteButton",

  methods: {
    deletePhoto() {
      this.$store
        .dispatch("photos/deletePhotos")
        .then(() => {
          this.$buefy.notification.open("Sua foto foi deletada");
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
