

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: true,
  locales: [{"code":"en","file":"en-GB.js","name":"English","country":"United Kingdom","emoji":"🇬🇧"},{"code":"fr","file":"fr-FR.js","name":"Français","country":"France","emoji":"🇫🇷"}],
  defaultLocale: "fr",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/Users/ialgen/Desktop/Prog/EDK/edk-org-app/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"en","onlyOnNoPrefix":false,"onlyOnRoot":true,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","file":"en-GB.js","name":"English","country":"United Kingdom","emoji":"🇬🇧"},{"code":"fr","file":"fr-FR.js","name":"Français","country":"France","emoji":"🇫🇷"}],
  localeCodes: ["en","fr"],
}

export const localeMessages = {
  'en-GB.js': () => import('../../lang/en-GB.js' /* webpackChunkName: "lang-en-GB.js" */),
  'fr-FR.js': () => import('../../lang/fr-FR.js' /* webpackChunkName: "lang-fr-FR.js" */),
}
