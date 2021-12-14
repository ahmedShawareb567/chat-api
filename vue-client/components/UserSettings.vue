<template lang="pug">
  .settings
      .settings-image
        nuxt-link(to="/profile")
          AppImg(src="/images/user.jpg" alt="user")
      .settings-controls
        button.btn.btn-danger.btn-sm.rounded-circle: svgIcon(name="logout")

</template>
<script>
export default {
  name: "UserSettings"
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
