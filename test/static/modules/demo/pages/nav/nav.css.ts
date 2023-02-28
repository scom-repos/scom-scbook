import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('i-nav', {
  $nest: {
    '.logo': {
      color: '#B9ADC1'
    },
    'i-menu': {
      font: 'normal normal normal 18px/22px Helvetica'
    },
    'i-header': {
      background: '#070039D5'
    }
  }
})

Styles.cssRule('i-nav-full', {
  $nest: {
    '.nav': {
      marginBottom: '2rem'
    },
    'i-col': {
      overflow: 'visible'
    },
    '.logo i-label > *': {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#B9ADC1'
    },
    '.logo i-image': {
      cursor: 'pointer'
    },
    'i-menu': {
      display: 'inline-block',
    },
    'i-button': {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '1.25em',
      border: '1px solid #B9ADC1',
      borderRadius: '5px',
      backgroundColor: 'transparent',
    },
    '.btn-outline-primary': {
      borderColor: '#6CF1F9',
      borderRadius: '10px',
      marginLeft: 'auto',
      $nest: {
        '&:not(.disabled):hover': {
          boxShadow: '0 0 0.5rem 0 rgb(108 241 249 / 50%)',
          backgroundColor: 'transparent'
        },
      }
    },
  }
})