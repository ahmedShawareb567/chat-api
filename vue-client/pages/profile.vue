<template lang="pug">
.profile
  .container
    .row.justify-content-center
      .col-lg-6.col-md-8
        no-ssr
          ValidationObserver( v-slot="{ handleSubmit }")
            form(@submit.prevent="handleSubmit(onSubmit)")
              .row
                .col-12.mb-5
                  .profile-picture.d-flex.justify-content-center
                    ImageInput(profile label="" name="Image" message="" rules="required"  @getFile="file = $event")
                    p {{file}}
                    a(@click="upload()") upload
                .col-md-6.mb-3
                  TextInput(v-model='form.email' label="" name="Email" placeholder="Email..."  rules="required|email")

                .col-md-6.mb-3
                  TextInput(v-model='form.username' label="" name="Username" placeholder="Username..."  rules="required")

                .col-md-6.mb-3.mb-md-4
                  TextInput(v-model='form.phone' label="" name="Phone" placeholder="Phone..."  rules="required")

                .col-md-6.mb-3.mb-md-4
                  TextInput(v-model='form.password' label="" name="Password" placeholder="Password..."  rules="required")

                .col-12
                  button.btn.btn-danger.btn-md.text-white Update

</template>
<script>
import { ValidationObserver } from "vee-validate";
export default {
  components: { ValidationObserver },
  data() {
    return {
      form: {
        file: null,
        email: null,
        username: null,
        phone: null
      },
      file: null
    };
  },
  middleware: ["auth"],
  methods: {
    onSubmit() {},
    async upload() {
      try {
        const fileUpload = await this.$upload(this.file, "users");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
<style lang="scss">
.profile {
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
