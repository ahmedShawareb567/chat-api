export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Chat Application",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/headroom.client.js",
    "~/plugins/vee-validate.js",
    "~/plugins/global.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/svg-sprite", "@nuxtjs/style-resources"],
  styleResources: {
    scss: ["~/assets/scss/app.scss"]
  },
  svgSprite: {
    input: "~/assets/icons/svg/",
    output: "~/assets/icons/sprites/"
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
    [
      "nuxt-i18n",
      {
        vueI18nLoader: true,
        detectBrowserLanguage: false,
        locales: [
          {
            code: "en",
            iso: "en",
            name: "english",
            alpha2: "en",
            file: "en.js",
            dir: "ltr",
            lang: "en"
          },
          {
            code: "ar",
            iso: "ar",
            name: "arabic",
            alpha2: "ar",
            file: "ar.js",
            dir: "rtl",
            lang: "ar"
          }
        ],
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
          silentFallbackWarn: true
        },
        lazy: true,
        langDir: "lang/",
        seo: false
      }
    ]
  ],
  bootstrapVue: {
    componentPlugins: [
      "ButtonPlugin",
      "InputGroupPlugin",
      "FormPlugin",
      "FormGroupPlugin",
      "FormInputPlugin",
      "FormTextareaPlugin",
      "FormSelectPlugin",
      "FormFilePlugin",
      "FormCheckboxPlugin",
      "FormRadioPlugin",
      "AlertPlugin",
      "ToastPlugin",
      "ModalPlugin",
      "TooltipPlugin",
      "CollapsePlugin",
      "SpinnerPlugin",
      "PaginationPlugin",
      "AvatarPlugin",
      "ProgressPlugin",
      "TablePlugin",
      "PopoverPlugin",
      "BadgePlugin"
    ],
    directivePlugins: ["VBTooltipPlugin", "VBPopoverPlugin"],
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  axios: {
    baseURL: "http://localhost:5000/api/"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate"]
  }
};
