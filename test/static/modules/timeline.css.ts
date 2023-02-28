import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('i-panel', {
  $nest: {
    '.mt-10': {
      marginTop: '10rem'
    },
    'i-icon': {
      display: 'inline-block'
    },
    '.mb-1': {
      marginBottom: '1rem'
    },
    '.progress-label': {
      fontSize: '.75rem'
    },
    '.lb-red': {
      color: Theme.colors.error.dark
    },
    '.lb-green': {
      color: Theme.colors.success.dark
    }
  }
})