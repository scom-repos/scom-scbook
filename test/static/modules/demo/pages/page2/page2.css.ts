import {Styles} from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('i-list-grid-view', {
  marginTop: '1rem',
  marginBottom: '1rem',
  $nest: {
    'i-container': {
      padding: '0 1rem'
    },
    'i-col': {
      overflow: 'visible'
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
    'i-button:not(.disabled):hover': {
      background: Theme.action.hover,
      backgroundColor: Theme.action.hover
    },
    'i-button.active': {
      backgroundColor: '#B9ADC1'
    },
    'i-button.active:not(.disabled):hover': {
      background: 'rgba(255, 255, 255, 0.85)',
      backgroundColor: 'rgba(255, 255, 255, 0.85)'
    },
    'i-button > i-icon': {
      fill: '#B9ADC1'
    },
    'i-button.active > i-icon': {
      fill: '#17152D'
    },
    '.btn-primary': {
      backgroundColor: '#00C6F4',
      border: 0,
      borderRadius: '10px',
      $nest: {
        '&:not(.disabled):hover': {
          backgroundColor: '#0099bd'
        },
      }
    },
    '#sortCombobox': {
      height: 38,
      marginLeft: 'auto'
    },
    '#sortCombobox i-combo-box > .item-list': {
      top: 50,
      left: 'auto',
      right: 'auto',
      width: 218,
      zIndex: 2,
      border: "1px solid #B9ADC1",
      borderRadius: "12px",
      background: "#17152D",

      $nest: {
        '&> ul': {
          backgroundColor: 'inherit',
          color: 'rgba(255,255,255,0.5)',
          overflowY: 'hidden',
          borderRadius: 'inherit',
          maxHeight: 'unset',
          $nest: {
            '&> li': {
              padding: '1rem',
              borderBottom: `1px solid ${Theme.divider}`
            },
            '&> li.matched': {
              color: Theme.colors.primary.contrastText,
              backgroundColor: 'inherit'
            },
            '&> li:hover': {
              color: Theme.colors.primary.contrastText,
              backgroundColor: Theme.action.hover
            },
          }
        },
      }
    },
    '#sortCombobox .icon-btn': {
      display: 'none',
      width: 0
    },
    '#sortCombobox input': {
      width: 'inherit !important',
      padding: '10px 30px',
      border: '1px solid #B9ADC1',
      borderRightWidth: 0,
      borderTopLeftRadius: 19,
      borderBottomLeftRadius: 19,
      backgroundColor: 'transparent',
      outline: 'none',
      color: '#B9ADC1',
      cursor: 'pointer'
    },
    '#optPanel': {
      display: 'flex',
      alignItems: 'center',
      $nest: {
        '&>i-icon': {
          padding: '10px 0',
          marginRight: '0.5em'
        },
        'i-input .clear-btn': {
          padding: '10px 0',
          $nest: {
            'i-icon': {
              fill: '#fff'
            }
          }
        },
        '@media only screen and (max-width: 768px)': {
            $nest: {
              '#listBtn, #gridBtn': {
                display: 'none'
              },
              '#sortBtn': {
                marginRight: 0
              },
              '#searchInput, #searchInput > input[type="text"]': {
                width: '150px !important'
              }
            }
        },
        '@media only screen and (max-width: 576px)': {
            $nest: {
              '#searchInput, #searchInput > input[type="text"]': {
                width: '120px !important'
              }
            }
        },
      }
    },
    '#searchInput > input[type="text"]': {
      backgroundColor: 'transparent',
      borderWidth: 0,
      color: Theme.colors.primary.contrastText
    },
    '#sortLabel': {
      height: 38,
      padding: '10px 30px',
      border: '1px solid #fff',
      borderTopLeftRadius: 19,
      borderBottomLeftRadius: 19,
      borderRightWidth: 0,
      marginLeft: 'auto'
    },
    '#sortBtn': {
      marginLeft: 0,
      marginRight: '1.25em',
      borderRadius: '0 19px 19px 0',
      borderLeftColor: 'rgba(255,255,255,0.36)'
    },
    '.custom-panel': {
      marginBottom: '2rem',
      letterSpacing: 0,
      $nest: {
        '&.--info': {
          marginLeft: '4rem'
        },
        '.heading-title > *': {
          fontSize: '24px',
          fontWeight: 'bold',
          width: '100%',
          display: 'block',
          marginBottom: '0.5rem',
        },
        '.desc > *': {
          fontSize: '15px'
        }
      }
    },
    '.action-panel, .list-panel': {
      marginLeft: '4rem',
      marginRight: '4rem',
    },
    '.mb-2': {
      marginBottom: '2rem'
    }
  }
})