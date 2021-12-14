<template lang="pug">
    div
      UserSettings
      nuxt
</template>
<script>
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    return {
      htmlAttrs: {
        dir: i18nSeo.htmlAttrs.lang.includes("ar") ? "rtl" : "ltr",
        ...i18nSeo.htmlAttrs
      },
      meta: [...i18nSeo.meta],
      link: [...i18nSeo.link]
    };
  }
};
</script>
<style lang="scss"></style>
