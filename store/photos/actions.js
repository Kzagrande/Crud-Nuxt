export default {
    getPhotos(context) {
        return this.$axios
            .$get("https://jsonplaceholder.typicode.com/photos").then((response) => {
                context.commit('STORE', response)
            }).catch(() => {
                this.$buefy.toast.open("Não foi possível carregar fotos, tente novamente mais tarde");
            });
    }
}