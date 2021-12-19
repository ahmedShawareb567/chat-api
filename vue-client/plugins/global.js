import Vue from "vue";
Vue.mixin({
  methods: {
    async $upload(file, destination = "/") {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("destination", destination);

        const upload = await this.$axios.post("/user/upload", formData, {
          headers: {
            authorization: `Bearer ${this.$store.getters["user/GET_TOKEN"]}`,
            destination
          }
        });
        return upload;
      } catch (e) {
        console.log(e);
      }
    }
  }
});
