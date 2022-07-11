export default {
    sendPost(context) {
        return this.$axios
            .$post("https://jsonplaceholder.typicode.com/posts").then((response) => {
                context.commit('STORE', response)
            })
    },


    getPosts(context) {
        return this.$axios
            .$get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                context.commit('STORE', response)

            })



    },

    updatePosts(context) {

        return {}
        /*  return this.$axios
             .$put("https://jsonplaceholder.typicode.com/posts").then((response) => {
                 context.commit('STORE', response)
             }) */
    },

    deletePosts(context) {

        return {}
        /* return this.$axios
            .$("https://jsonplaceholder.typicode.com/posts").then((response) => {
                context.commit('STORE', response)
            }) */
    },


}

