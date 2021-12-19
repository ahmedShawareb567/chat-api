<template lang="pug">
  div
    ValidationProvider(:vid='vid' :name='$attrs.name ? $attrs.name : label' :rules='rules' v-slot='{ valid, errors }' ref="validator")
      b-form-group.imageInput__wrapper(v-bind='$attrs' :invalid-feedback="errors[0]" :label="label" )
        .imageInput( @click="$refs.thumb.click()" :class="{ 'imageInput--empty': !thumb , 'imageInput--profile' : profile, [`imageInput--ratio imageInput--ratio-${ratio}`]: ratio }" )
          input(type="file" name="thumb" ref="thumb" style="display: none;" @change="preview" accept="image/*")
          img.imageInput__img(:src="thumb || defaultSrc" ref="preview" style="cursor: pointer;" v-show="thumb")
          p.imageInput__message(v-show="!thumb || thumb === defaultSrc" :class="{ 'imageInput--danger': !valid }") {{ message }}
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: "ImageInput",
  components: {
    ValidationProvider
  },
  props: {
    vid: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: "Click to select an image"
    },
    value: {
      type: String,
      default: null
    },
    rules: {
      type: [String, Object],
      default: ""
    },
    label: {
      type: String,
      required: true
    },
    profile: {
      type: Boolean,
      default: false
    },
    ratio: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    thumb: "",
    defaultSrc:
      "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
  }),
  computed: {
    files: {
      cache: false,
      get() {
        return this.$refs.thumb.files;
      }
    }
  },
  watch: {
    value(val) {
      this.thumb = val;
    }
  },
  created() {
    if (this.value) {
      this.thumb = this.value;
    }
  },
  mounted() {
    if (this.thumb) {
      this.$refs.validator.value = this.thumb;
      this.$refs.validator.validate().then(this.$refs.validator.applyResult);
    }
  },
  methods: {
    async preview() {
      const file = this.files[0];
      this.thumb = file ? URL.createObjectURL(file) : "";
      this.$refs.validator.value = this.thumb;
      await this.$refs.validator
        .validate()
        .then(this.$refs.validator.applyResult);
      this.$refs.preview.src = this.thumb || this.defaultSrc;
      this.$emit("input", this.thumb);
      this.$emit("getFile", file);
    }
  }
};
</script>

<style lang="scss">
.imageInput {
  border: 1px solid $gray-400;
  color: $body-color;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 300px;
  max-width: 300px;
  position: relative;
  text-align: center;
  background: url("https://via.placeholder.com/100");
  background-size: cover;
  outline: 0.2rem solid $success;
  transition: all 0.2s ease-in-out;
  img {
    width: 100%;
  }

  &:hover {
    border-color: transparent;
  }

  &__message {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.4rem;
    font-size: 0.8rem;
    margin: 0;
  }

  &--danger {
    width: 100%;
    height: 100%;
  }

  &--empty {
    height: 300px;
    outline-color: transparent;
  }
  &--profile {
    width: 100px;
    height: 100px;
    border-radius: 20rem;
    overflow: hidden;

    .imageInput {
      &__img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  &__wrapper {
    .invalid-feedback {
      display: block;
    }
  }
  &--ratio {
    width: auto;
    max-width: 100%;
    height: auto;
    .imageInput {
      &__img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    &-1-1 {
      padding-top: aspectRatio(1, 1);
    }
    &-4-1 {
      padding-top: aspectRatio(4, 1);
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
}
</style>
