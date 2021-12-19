<template lang="pug">
  .settings
      .settings-image
        nuxt-link(to="/profile")
          AppImg(:src="user.image" alt="user")
      .settings-controls
        button.btn.btn-danger.btn-sm.rounded-circle(@click="logOut()"): svgIcon(name="logout")

</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "UserSettings",
  computed: {
    ...mapGetters({
      user: "user/GET_USER"
    })
  },
  methods: {
    logOut() {
      this.$cookies.remove("token");
      this.$store.commit("user/SET_TOKEN", null);
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss">
.settings {
  position: fixed;
  top: 0rem;
  left: 0rem;
  padding: 1rem;
  z-index: 999;
  display: flex;
  align-items: center;
  &-image {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;
  }
  &-controls {
    margin: 0rem 0.5rem;
    button {
      width: 2rem;
      height: 2rem;
      padding: 0rem;
    }
  }
}
</style>
