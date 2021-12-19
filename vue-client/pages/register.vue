<template lang="pug">
.login
  .container
    .row.justify-content-center
      .text-center.mb-4
        h3 Register
      .col-lg-7.col-md-8
        no-ssr
          ValidationObserver( v-slot="{ handleSubmit }")
            form(@submit.prevent="handleSubmit(onSubmit)")
              .row
                .col-md-6.mb-3
                  TextInput(v-model='form.email' label="" name="Email" placeholder="Email..."  rules="required|email")
                .col-md-6.mb-3
                  TextInput(v-model='form.username' label="" name="Username" placeholder="Username..."  rules="required")
                .col-md-6.mb-3.mb-md-4
                  TextInput(v-model='form.phone' label="" name="Phone" placeholder="Phone..."  rules="required|min:11")
                .col-md-6.mb-3.mb-md-4
                  TextInput(v-model='form.password' label="" type="password" name="Password" placeholder="password" rules="required")

                .col-12
                  .d-flex.align-items-center
                    button.btn.btn-primary.bt-md.text-white Register
                    nuxt-link.mx-2(to="/login") Login

</template>
<script>
import { ValidationObserver } from "vee-validate";

export default {
  components: { ValidationObserver },
  data() {
    return {
      form: {
        email: null,
        username: null,
        password: null
      }
    };
  },
  middleware: ["notAuth"],

  methods: {
    async onSubmit() {
      try {
        const {
          data: { success, token }
        } = await this.$axios.post("/user/register", this.form);

        this.$cookies.set("token", token);

        this.$store.commit("user/SET_TOKEN", token);

        if (success) {
          const user = await this.$axios.post("/user/me", { token });

          this.$store.commit("user/SET_USER", user);

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
