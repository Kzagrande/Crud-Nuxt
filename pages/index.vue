<template>
  <div class="containter">
    <Carousel :items="filteredPhotos" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Carousel from "@/components/Carousel";
export default {
  name: "index",

  components: {
    Carousel,
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
  },
};
</script>

<style></style>
