import 'iconify-icon'
import { aliases, iconify } from '../iconify'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:before-create', ({ vuetifyOptions }) => {
    vuetifyOptions.icons = {
      defaultSet: 'iconify',
      aliases,
      sets: { iconify },
    }
  })
})
