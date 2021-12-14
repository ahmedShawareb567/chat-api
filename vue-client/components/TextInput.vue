<template lang="pug">
  div
    ValidationProvider(:vid='vid' :name='$attrs.name ? $attrs.name : label' :rules='rules' v-slot='{ valid, errors }')
      b-form-group(v-bind='$attrs' :invalid-feedback="errors[0]" :label="label")
        b-form-input(v-model='innerValue' :type="type" v-bind='$attrs' :state='errors[0] ? false : (valid&&rules ? true : null)' )


</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'TextInput',
  components: {
    ValidationProvider
  },
  props: {
    vid: {
      type: String,
      default: null
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    // must be included in props
    value: {
      type: null,
      default: ''
    },
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data: () => ({
    innerValue: ''
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal
    }
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  }
}
</script>
