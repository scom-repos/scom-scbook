import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('i-module-layout', {
  fontFamily: 'EuclidCircular,Arial',
  $nest: {
    '.i-col-custom': {
      borderRadius: 4,
      boxShadow: 'rgb(20 26 40 / 20%) 0px 7px 42px',
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      margin: '1rem auto',
      $nest: {
        '.i-col-content': {
          background: 'linear-gradient(180deg,#0C0A1D 0%,rgba(12,10,29,0.32) 100%),rgba(255,255,255,0.08)',
          padding: '1rem 1.5rem',
          minHeight: 100,
          borderRadius: '0 0 4px 4px'
        },
        '.title': {
          fontSize: '1.17em',
          fontWeight: 'bold',
          display: 'block'
        },
        '.date': {
          opacity: 0.3,
          marginLeft: 10
        },
        'i-image': {
          display: 'block'
        },
        'i-image img': {
          objectFit: 'cover',
          objectPosition: 'center',
          height: '100%',
          width: '100%'
        },
      }
    },
    '.divider': {
      margin: '2rem 0 1rem'
    },
    '.divider .i-divider_text': {
      backgroundColor: 'transparent'
    },
    '.heading-title > *': {
      fontSize: '3rem',
      width: '100%',
      display: 'block',
      textAlign: 'center'
    },
    '.heading-title_sub > *': {
      fontSize: '1.25rem',
      lineHeight: '2rem',
      display: 'block',
      textAlign: 'center',
      width: '100%',
      marginBottom: '2rem'
    },
    '.ml-1': {
      marginLeft: '1rem'
    },
    '.mb-2': {
      marginBottom: '2rem'
    },
    '.tab-auto': {
      margin: '0 auto'
    },
    '.lb-small': {
      fontSize: '0.625rem',
      color: 'rgba(255, 255, 255, 0.64)'
    },
    '.custom-btn': {
      color: '#fff',
      background: Theme.colors.primary.main,
      border: '1px solid rgb(111, 76, 255)',
      padding: '14px 25px !important',
      transition: 'all 0.3s ease 0s',
      height: 'auto !important'
    },
    '.custom-btn:hover': {
      transition: 'all 0.3s ease 0s',
      boxShadow: 'rgb(111 76 255 / 88%) 0px 0px 16px 0px'
    },
    '.heading > div': {
      fontSize: '3rem',
      lineHeight: '3.75rem',
      textShadow: 'rgb(192 219 255 / 48%) 0px 0px 80px, rgb(65 120 255 / 24%) 0px 0px 32px'
    },
    'i-icon': {
      display: 'inline-block'
    },
    'i-collapse i-collapse-summary': {
      justifyContent: "flex-start"
    },
    'i-input label': {
      display: 'block',
      marginBottom: '.75rem',
      textAlign: 'left',
      width: '100% !important'
    },
    'i-input input': {
      width: '100%'
    },
    'i-header': {
      display: 'flex',
      alignItems: 'center'
    },
    '.right': {
      marginLeft: 'auto'
    },
    '.custom-header': {
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      backgroundColor: '#17152D'
    },
    'i-footer': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
})