export { default as FooterHome } from '../../components/footer/Home.vue'
export { default as HeaderHome } from '../../components/header/Home.vue'
export { default as IconsBook } from '../../components/Icons/Book.vue'
export { default as IconsReader } from '../../components/Icons/Reader.vue'
export { default as IconsTeacher } from '../../components/Icons/Teacher.vue'
export { default as MenuLang } from '../../components/menu/Lang.vue'
export { default as LogoFooter } from '../../components/logo/Footer.vue'
export { default as LogoMainBlack } from '../../components/logo/MainBlack.vue'
export { default as LogoMainWhite } from '../../components/logo/MainWhite.vue'
export { default as IconsSocialLinkedin } from '../../components/Icons/social/linkedin.vue'
export { default as IconsSocialMedium } from '../../components/Icons/social/medium.vue'
export { default as IconsSocialTelegram } from '../../components/Icons/social/telegram.vue'
export { default as IconsSocialTwitter } from '../../components/Icons/social/twitter.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
