export default {
    sendPost(context) {
        return this.$axios
            .$post("https://jsonplaceholder.typicode.com/posts").then((response) => {
                context.commit('STORE', response)
            })
    }
}