<template lang="pug">
.loading
</template>
<script>
export default {
  name: "Loading"
};
</script>
<style lang="scss">
.loading {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 0.15rem solid rgba(0, 0, 0, 0.05);
  border-bottom-color: $dark;
  animation: rotateAnimation 1s linear infinite;
}

@keyframes rotateAnimation {
  to {
    transform: rotate(360deg);
  }
}
</style>
