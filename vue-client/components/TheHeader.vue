<template lang="pug">
    .theHeader
        ul.theHeader-menu
            li: AppLink(to="/" title="home") home
            li: AppLink(to="/about" title="about") About
            li: AppLink(to="#" title="") Services
</template>
<script>
export default {};
</script>
<style lang="scss">
.theHeader {
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: auto;
  padding: 1rem 0rem;
  z-index: 9999;
  transition: all 0.2s ease-in-out;
  &-menu {
    list-style: none;
    padding: 0rem;
    margin: 0rem;
    text-align: center;
    li {
      display: inline-block;
      a {
        padding: 0.5rem;
        text-decoration: none;
      }
    }
  }
  &--fixed {
    transition: transform 0.25s ease-in-out, background 0.25s ease-in-out,
      top 0.25s ease-in-out;
    will-change: transform;
  }
  &--unpinned {
    transform: translateY(-100%);
  }
  &--pinned {
    transform: translateY(0);
  }
  &--not-top {
    box-shadow: $box-shadow;
    background-color: $white;
  }
}
</style>
