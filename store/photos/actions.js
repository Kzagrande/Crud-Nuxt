export default {
    getPhotos(context) {
        return this.$axios
            .$get("https://jsonplaceholder.typicode.com/photos").then((response) => {
                context.commit('STORE', response)
            }).catch(() => {
                this.$buefy.toast.open("Não foi possível carregar fotos, tente novamente mais tarde");
            });
    },

    sendPhotos(context) {

        return {}
        /* return this.$axios
            .$post("https://jsonplaceholder.typicode.com/photos").then((response) => {
                context.commit('STORE', response)
            }) */
    },

    updatePhotos(context) {
        return {}
        /*  return this.$axios
             .$put("https://jsonplaceholder.typicode.com/photos").then((response) => {
                 context.commit('STORE', response)
             }) */
    },

    deletePhotos(context) {

        return {}
        /* return this.$axios
            .$("https://jsonplaceholder.typicode.com/photos").then((response) => {
                context.commit('STORE', response)
            }) */
    },


}