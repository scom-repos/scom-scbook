import { Styles } from '@ijstech/components'
const Theme = Styles.Theme.ThemeVars

Styles.cssRule('i-the-ijs-sc-network', {
  display: 'block',

  $nest: {
    p: {
      lineHeight: '22px',
    },
  },
})
