<template lang="pug">
.appImage(:class="{'appImage--loaded': loaded , [`appImage--ratio-${ratio}`]: ratio , 'appImage--radius': radius}")
  .appImage-bg
  img.appImage-img(ref="image" :src="src" v-if="src && src.length != 2" :alt="alt")
  .appImage-placeholder(v-if="src && src.length == 2") {{src}}
</template>

<script>
let observer;

const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.$notifyInView();
    }
  });
};

export default {
  name: "AppImg",
  props: {
    src: {
      type: String,
      required: true
    },
    ratio: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    radius: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      srcset: null,
      loaded: false
    };
  },
  mounted() {
    if (!observer) {
      observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: "0px 0px 200px 0px"
      });
    }
    if (this.src && this.src.length === 2) {
      this.loaded = true;
    } else {
      this.$refs.image.$notifyInView = () => {
        this.$emit("inView");
      };
      this.$once("inView", () => {
        this.srcset = this.src;
        observer.unobserve(this.$refs.image);
      });
      this.$refs.image.onload = () => {
        this.loaded = true;
      };
      observer.observe(this.$refs.image);
    }
    this.srcset = null;
  }
};
</script>

<style lang="scss">
.appImage {
  position: relative;
  animation: shimmer 1.2s ease-in-out infinite;
  height: 100%;
  width: 100%;
  padding-top: aspectRatio(1, 1);
  transition: transform 0.2s ease-in-out;
  &--ratio {
    &-3-2 {
      padding-top: aspectRatio(3, 2);
    }
    &-4-1 {
      padding-top: aspectRatio(4, 1);
    }
    &-6-5 {
      padding-top: aspectRatio(66, 53);
    }
    &-7-2 {
      padding-top: aspectRatio(7, 2);
    }
    &-11-15 {
      padding-top: aspectRatio(11, 15);
    }
    &-5-2 {
      padding-top: aspectRatio(5, 2);
    }
    &-5-1 {
      padding-top: aspectRatio(5, 1);
    }
  }
  &-placeholder {
    background: $primary;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 1;
  }
  &-bg {
    background: $danger;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 500ms;
    transform-origin: bottom;
    z-index: 2;
  }
  &-img {
    opacity: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
  }
  &--radius {
    border-radius: $border-radius-lg;
    overflow: hidden;
  }
  &--loaded {
    animation: none;

    .appImage {
      &-img {
        opacity: 1;
      }

      &-bg {
        opacity: 0;
      }
    }
  }
}
@keyframes shimmer {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.8;
  }
}
</style>
