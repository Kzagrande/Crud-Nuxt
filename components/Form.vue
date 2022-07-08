<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Formulário de Foto</p>

      <button type="button" class="delete" @click="$emit('close')" />
    </header>
    <section class="modal-card-body">
      <b-field label="Título da Foto">
        <b-input v-model="info.title"></b-input>
      </b-field>

      <b-field label="Título da thumbnail" type="">
        <b-input v-model="info.thumbnailUrl" maxlength="30"></b-input>
      </b-field>

      <b-field label="Url" type="">
        <b-input v-model="info.url"></b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Fechar" @click="$emit('close')" />
      <b-button
        v-if="Object.keys(info).length > 0"
        label="Atualizar"
        @click="updatePhoto()"
        type="is-primary"
      />
      <b-button v-else label="Criar" @click="savePhoto()" type="is-primary" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "Form",

  props: {
    info: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      titulo: "",
    };
  },

  created() {},

  methods: {
    savePhoto() {
      this.$store
        .dispatch("photos/sendPhotos")
        .then(() => {
          this.$buefy.notification.open("Sua foto foi salva");
        })
        .catch(() => {
          this.$buefy.notification.open(
            "Erro ao enviar, tente novamente mais tarde"
          );
        });
    },
    updatePhoto() {
      this.$store
        .dispatch("photos/updatePhotos")
        .then(() => {
          this.$buefy.notification.open("Sua foto foi atualizada");
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
