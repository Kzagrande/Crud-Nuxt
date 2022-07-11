<template>
  <div class="containter">
    <div class="columns section">
      <div class="column">
        <ListPost :posts="posts" @open-modal="openModal" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListPost from "@/components/ListPost";
import PostForm from "@/components/PostForm";

export default {
  name: "index",

  components: {
    ListPost,
    PostForm,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
    }),
  },

  created() {
    this.loadPosts();
  },

  methods: {
    openModal(info) {
      this.$buefy.modal.open({
        parent: this,
        component: PostForm,
        hasModalCard: false,
        trapFocus: true,
        props: {
          info: info,
        },
      });
    },

    loadPosts() {
      this.$store.dispatch("posts/getPosts");
    },
  },
};
</script>

<style></style>
