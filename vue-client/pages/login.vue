<template lang="pug">
.login
  .container
    .row.justify-content-center
      .text-center.mb-4
        h3 Login
      .col-lg-6.col-md-7
        no-ssr
          ValidationObserver( v-slot="{ handleSubmit }")
            form(@submit.prevent="handleSubmit(onSubmit)")
              .row
                .col-12.mb-3
                  TextInput(v-model='form.email' label="" name="Email" placeholder="Email..."  rules="required|email")
                .col-12.mb-4
                  TextInput(v-model='form.password' label="" type="password" name="Password" placeholder="password" rules="required")

                .col-12
                  .d-flex.align-items-center
                    button.btn.btn-primary.btn-md.text-white.d-flex.align-items-center
                      span Login
                      Loading(v-if="loginLoading").mx-1
                    nuxt-link.mx-2(to="/register") Register

</template>
<script>
import { ValidationObserver } from "vee-validate";

export default {
  components: { ValidationObserver },
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      loginLoading: false
    };
  },
  middleware: ["notAuth"],
  methods: {
    async onSubmit() {
      try {
        this.loginLoading = true;
        const {
          data: { success, message, data }
        } = await this.$axios.post("/user/login", this.form);

        if (success) {
          this.$cookies.set("token", data.token);
          this.$store.commit("user/SET_TOKEN", data.token);
          this.$store.commit("user/SET_USER", data.user);
          this.loginLoading = false;

          this.$router.push("/");
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
<style lang="scss">
.login {
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
