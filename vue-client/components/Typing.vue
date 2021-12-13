<template lang="pug">
.typing-loading
  span
  span
  span
</template>
<script>
export default {
  name: "Typing"
};
</script>
<style lang="scss">
.typing-loading {
  position: absolute;
  bottom: 6rem;
  z-index: 999;
  right: 1rem;
  text-align: center;
  background-color: $gray-400;
  border-radius: 2rem;
  padding: 0.2rem 0.5rem;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: $primary;
    margin: 0rem 0.1rem;
    &:first-of-type {
      animation: l-anim 0.8s linear infinite;
      animation-delay: 0.1s;
    }
    &:nth-of-type(2) {
      animation: l-anim 0.8s linear infinite;
      animation-delay: 0.2s;
    }
    &:last-of-type {
      animation: l-anim 0.8s linear infinite;
      animation-delay: 0.3s;
    }
  }
}

@keyframes l-anim {
  0%,
  100% {
    transform: translateY(0px);
  }
  65% {
    transform: translateY(-5px);
  }
}
</style>
