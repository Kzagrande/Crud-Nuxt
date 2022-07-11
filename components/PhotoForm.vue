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
    <b-loading v-model="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>
export default {
  name: "PhotoForm",

  props: {
    info: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },

  created() {},

  methods: {
    savePhoto() {
      this.isLoading = true;
      this.$store
        .dispatch("photos/sendPhotos")
        .then(() => {
          setTimeout(() => {
            this.isLoading = false;
            this.$buefy.toast.open("Foto salva com sucesso!"),
              this.$emit("close");
          }, 3 * 1000);
        })
        .catch(() => {
          this.$buefy.notification.open(
            "Erro ao enviar, tente novamente mais tarde"
          );
        });
    },
    updatePhoto() {
      this.isLoading = true;
      this.$store
        .dispatch("photos/updatePhotos")

        .then(() => {
          setTimeout(() => {
            this.isLoading = false;
            this.$buefy.toast.open("Foto atualizada com sucesso!"),
              this.$emit("close");
          }, 3 * 1000);
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
