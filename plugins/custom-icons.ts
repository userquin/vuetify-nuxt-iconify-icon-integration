import { aliases, iconify } from '../iconify'

// import { Icon, disableCache } from '@iconify/vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:before-create', ({ vuetifyOptions }) => {
    vuetifyOptions.icons = {
      defaultSet: 'iconify',
      aliases,
      sets: { iconify },
    }
  })
})
