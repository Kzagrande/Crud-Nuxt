<template>
  <div class="containter">
    <div class="columns section">
      <div class="column">
        <Table :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Table from "@/components/Table";

export default {
  name: "index",

  components: {
    Table,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
    }),

    /* filteredPhotos() {
      return this.photos.filter((item) => {
        if (item.albumId == 2) return item;
      });
    }, */
  },

  created() {
    this.loadPosts();
  },

  methods: {
    loadPosts() {
      this.$store.dispatch("posts/getPosts");
    },
  },
};
</script>

<style></style>
