<template lang="pug">
  .chat-main
    .chat-content
      .container.pt-5.pb-5
        .chat-title.d-flex.justify-content-center.pb-5
          span: svgIcon(name="chat")
        .row
          .col-lg-3.col-md-4.col-12

            .chat-members
              .chat-members-header.d-flex.align-items-center.justify-content-between.p-3.bg-secondary
                span: svgIcon(name="members")
                p.mb-0 members
              .chat-members-search.pt-4
                input.form-control(type="text" placeholder="Search ...")
              .chat-members-content
                ul
                  li(v-for="i in 4" :key="i" :class="{'is-active': i == '1'}")
                    .d-flex.align-items-center
                      .chat-members-content-image
                        AppImg(src="/images/user.jpg" alt="user")
                      p.mb-0.px-2 user-{{i}}
                    span: svgIcon(name="user-status")

          .col-lg-9.col-md-8.col-12
            .chat-inbox
              .chat-inbox-header
                .chat-inbox-header-image
                  AppImg(src="/images/user.jpg" alt="user" )

                .chat-inbox-header-icons.d-flex.align-items-center
                  span: svgIcon(name="call")
                  span: svgIcon(name="video")
                  span.text-success: svgIcon(name="user-status")


              .chat-inbox-content

                Message(v-for="i in 10" :key="i" :direction="i % 2 !='0' ? false : true")
                Typing

              .chat-inbox-send
                .chat-inbox-send-input
                  input.form-control(type="text" placeholder="Message ...")
                .chat-inbox-send-button
                  button: svgIcon(name="send")


</template>

<script>
export default {
  computed: {}
};
</script>

<style lang="scss">
@import "../assets/scss/pages/index";
</style>
