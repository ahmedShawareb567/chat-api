<template lang="pug">
.message(:class="{'reverse-direction': direction}")
  .message-user
    AppImg(src="/images/user.jpg" alt="user" )
  .message-content
    p.message-text.mb-0 hello !
    p.message-date.mb-0.pt-1 12-12-2021 9:00 pm
</template>
<script>
export default {
  name: "Message",
  props: {
    direction: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
.message {
  position: relative;
  display: flex;
  padding: 0.5rem 0rem;
  &-user {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
  }
  &-content {
    padding: 0rem 1rem;
  }
  &-date {
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.5);
  }
  &-text {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: $primary;
    border-radius: 3rem;
  }
  &.reverse-direction {
    flex-direction: row-reverse;
    .message {
      &-text {
        background-color: #ffa6a4;
      }
    }
  }
}
</style>
