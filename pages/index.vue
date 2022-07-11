<template>
  <div class="containter">
    <div class="columns section">
      <div class="column">
        <b-button type="is-link" @click="openModal({})">Criar Photo</b-button>
      </div>
    </div>
    <Carousel :items="filteredPhotos" @open-modal="openModal" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Carousel from "@/components/Carousel";
import PhotoForm from "@/components/PhotoForm";

export default {
  name: "index",

  components: {
    Carousel,
    PhotoForm,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      photos: (state) => state.photos.photos,
    }),

    filteredPhotos() {
      return this.photos.filter((item) => {
        if (item.albumId == 2) return item;
      });
    },
  },

  created() {
    this.loadPhotos();
  },

  methods: {
    loadPhotos() {
      this.$store.dispatch("photos/getPhotos");
    },

    openModal(info) {
      this.$buefy.modal.open({
        parent: this,
        component: PhotoForm,
        hasModalCard: false,
        trapFocus: true,
        props: {
          info: info,
        },
      });
    },
  },
};
</script>

<style></style>
