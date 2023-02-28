import { Styles } from '@ijstech/components';
import { callbackify } from 'util';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('.landing', {
  $nest: {
    '.bg-default': {
      backgroundColor: Theme.background.default
    },
    '.bg-overlay': {
      backgroundColor: '#070039D5'
    },
    '.lb-intro *': {
      background: '#0EE5F77B 0% 0% no-repeat padding-box',
      fontSize: '1rem',
      padding: '.75rem 2rem',
      borderRadius: '25px',
      marginBottom: '2.5rem'
    },
    '.lb-intro--lg *': {
      fontSize: '2.5rem',
      marginBottom: '1.389rem'
    },
    '.lb-intro--sm *': {
      fontSize: '1.1rem'
    },
    '.btn-group': {
      marginTop: '2.6rem'
    },
    '.btn': {
      background: 'transparent linear-gradient(90deg, #0EE5F7 0%, #664AFB 100%) 0% 0% no-repeat padding-box',
      borderRadius: '25px',
      padding: '.75rem 2rem',
      height: 'auto !important',
      marginRight: '2rem'
    },
    '.section-1': {
      minHeight: 'calc(100vh - 60px)',
      paddingBottom: '2rem'
    },
    '.lb-title *': {
      fontSize: '2.25rem'
    },
    '.lb-subtitle *': {
      fontSize: '1rem'
    },
    '.mb-2-5': {
      marginBottom: '2.5rem',
      display: 'inline-block'
    },
    '.mb-1-875': {
      marginBottom: '1.875rem'
    },
    '.mt-4': {
      marginTop: '4rem'
    },
    '.mt-2': {
      marginTop: '2rem !important'
    },
    '.m-auto': {
      margin: '0 auto'
    },
    '.p-12': {
      padding: '0 10%'
    },
    '.bold, .bold *': {
      fontWeight: 'bold'
    },
    'i-container': {
      padding: '0 1rem'
    },
    '.justify-center': {
      justifyContent: 'center'
    },
    'i-col': {
      marginBottom: '1rem'
    },
    '.lb-2 *': {
      fontSize: '1.778rem'
    },
    '.grid': {
      display: 'grid'
    },
    '.section-2': {
      minHeight: '100vh',
      padding: '4.778rem 1rem 0',
      $nest: {
        '.list-number': {
          height: 40,
          width: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: '#6CF1F9 0% 0% no-repeat padding-box'
        },
        '.section-2_list': {
          $nest: {
            'i-list-view-item': {
              background: '#00C6F4 0% 0% no-repeat padding-box',
              borderRadius: '5px',
              paddingLeft: 0
            },
            '.list-number-wrap': {
              width: 80,
              flex: '0 0 80px',
              justifyContent: 'center',
              display: 'flex'
            }
          }
        }
      }
    },
    '.feature': {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '30px',
      alignItems: 'center',
      $nest: {
        'i-label *': {
          fontSize: '1rem',
          color: '#fff',
        }
      }
    },
    '.upcomming': {
      $nest: {
        'i-list-view-item': { 
          alignItems: 'center',
          $nest: {
            '&:first-child .image-container': {
              backgroundColor: '#927DFF'
            },
            '&:nth-child(2) .image-container': {
              backgroundColor: '#FBBE2A'
            },
            '&:nth-child(3) .image-container': {
              backgroundColor: '#3F73A7'
            },
            '&:nth-child(4) .image-container': {
              backgroundColor: '#E26FA9'
            },
            '&:nth-child(5) .image-container': {
              backgroundColor: '#42CB30'
            },
            '&:nth-child(6) .image-container': {
              backgroundColor: '#069EFF'
            },
            '&:nth-child(7) .image-container': {
              backgroundColor: '#E53917'
            },
            '&:nth-child(8) .image-container': {
              backgroundColor: '#B9FF7D'
            },
            '.image-container': {
              backgroundColor: Theme.divider,
              width: 20,
              height: 20,
              position: 'relative',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            'i-label': {
              marginLeft: '1rem'
            }
          }
        },
        '.list-item i-image': {
          marginRight: '0 !important'
        }
      }
    },
    '.py-2': {
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }
  }
})