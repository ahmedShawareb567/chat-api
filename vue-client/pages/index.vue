<template lang="pug">
  .chat-main
    .chat-content
      .container.pt-5.pb-5
        .chat-title.d-flex.justify-content-center.pb-5
          span: svgIcon(name="chat")
        .row
          .col-lg-3.col-md-4.col-12
            //- .chat-rooms
            //-   .chat-rooms-header.d-flex.align-items-center.justify-content-between.p-3.bg-secondary
            //-     span: svgIcon(name="members")
            //-     p.mb-0 Rooms
            //-   .chat-rooms-content
            //-     ul
            //-       li: p.mb-0 Room 1
            //-       li: p.mb-0 Room 2
            //-       li: p.mb-0 Room 3
            //-       li: p.mb-0 Room 4

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
.icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: currentColor;
}

.chat {
  &-main {
    position: fixed;
    top: 0rem;
    left: 0rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @include media-breakpoint-down(md) {
      position: relative;
    }
  }
  &-content {
    min-height: 80%;
    width: 100%;
  }
  &-rooms,
  &-members {
    &-header {
      border-radius: 0.4rem;
    }
    &-content {
      ul {
        padding: 1rem;
        list-style: none;
        li {
          padding: 0.5rem 0rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .icon {
            color: rgba(0, 0, 0, 0.1);
          }
          &.is-active {
            .icon {
              color: $success;
            }
          }
        }
        p {
          font-weight: 500;
          font-size: 0.9rem;
        }
      }
      &-image {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    &-search {
      input {
        border: 0.2rem solid rgba(0, 0, 0, 0.1);
      }
    }
  }
  &-title {
    .icon {
      width: 3rem;
      height: 3rem;
    }
  }
  &-inbox {
    position: relative;
    background-color: rgba(0, 0, 0, 0.02);
    &-header {
      padding: 1rem;
      background-color: $secondary;
      border-radius: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-image {
        width: 2.5rem;
        height: 2.5rem;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        overflow: hidden;
      }
      &-icons {
        span {
          .icon {
            position: relative;
            z-index: 2;
            width: 1.5rem;
            height: 1.5rem;
          }
          position: relative;
          cursor: pointer;
          padding: 0.5rem;
          &::after {
            content: " ";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: 1.5rem;
            height: 1.5rem;
            background-color: $danger;
            opacity: 0.7;
            border-radius: 50%;
            z-index: 1;
            transition: transform 0.2s ease-in-out;
          }
          &:hover {
            &::after {
              transform: translate(-50%, -50%) scale(1);
            }
          }
          &:last-child {
            &::after {
              opacity: 0;
            }
          }
        }
      }
    }
    &-content {
      max-height: 28rem;
      padding: 2rem 1rem;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.01);
        border-radius: 0.5rem;
      }

      &::-webkit-scrollbar-thumb {
        background: $secondary;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: $secondary;
        border-radius: 0.5rem;
      }
    }
    &-send {
      padding: 1rem;
      background-color: $secondary;
      border-radius: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      &-input {
        width: 90%;
        input {
          border: 0.2rem solid rgba(0, 0, 0, 0.05);
          &:focus {
            background-color: $white;
          }
        }
      }
      &-button {
        button {
          background-color: transparent;
          border: none;
          outline: none;
          .icon {
            width: 2rem;
            height: 2rem;
          }
        }
      }
    }
  }
}
</style>
