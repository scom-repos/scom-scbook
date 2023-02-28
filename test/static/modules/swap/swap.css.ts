import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('i-swap', {
  $nest: {
    'i-image': {
      marginRight: '8px'
    },
    'i-icon': {
      marginRight: '8px'
    },
    '::-webkit-scrollbar': {
      width: '3px',

    },
    '::-webkit-scrollbar-thumb': {
      background: 'red', 
      borderRadius: '5px',
    },
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0
    },
    '.flex-1': {
      flex: '1 1 0%!important'
    },
    '.my-2': {
      marginTop: '0.5rem!important',
      marginBottom: '0.5rem!important',
    },
    '.ml-auto': {
      marginLeft: 'auto'
    },
    'i-button': {
      fontWeight: 600,
      opacity: 0.8,
      verticalAlign: 'middle',
      lineHeight: 1.5,
    },
    'i-button:not(.disabled):hover': {
      transition: 'all .2s ease-out',
      background: 'linear-gradient(255deg,#f15e61,#b52082)'
    },
    'i-button:focus': {
      outline: 0,
      boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
    },
    '#swap-container': {
      width: 520,
      maxWidth: '100%',
      padding: '1rem',
      margin: '1.5rem auto 2rem'
    },
    '.bill-board': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginBottom: '2.5rem',
      $nest: {
        '> i-image': {
          display: 'inline-block',
          width: '100%'
        },
        '> i-image img': {
          display: 'block',
          width: '60%',
          margin: 'auto'
        }
      }
    },
    '.icon-list': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      maxWidth: 'calc(100% - 4rem)',
    },
    '.icon-item': {
      paddingBottom: 0,
      paddingTop: '0.25rem',
      marginRight: '0.25rem',
      border: '2px solid transparent',
      borderRadius: '50%',
      padding: '0.25rem',
      $nest: {
        '> img': {
          width: 30,
          height: 30
        }
      }
    },
    '.content-swap': {
      padding: '1.25rem',
      marginTop: '0.5rem',
      marginBottom: '2rem',
      background: '#181E3E',
      borderRadius: '1rem',
      $nest: {
        'i-label.custom-label *': {
          fontSize: '1.125rem',
          color: '#fff',
        }
      }
    },
    '.input--token-container': {
      padding: '0.5rem 1rem',
      marginLeft: '-15px',
      marginRight: '-15px',
    },
    'i-label.text--grey *': {
      color: 'hsla(0,0%,100%,0.55)'
    },
    '.btn-max': {
      position: 'relative',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      padding: '0 0.5rem',
      marginLeft: '0.5rem',
      bottom: '1.5px',
      opacity: 0.8,
      background: 'linear-gradient(to right, #AC1D78 , #E04862)',
      color: '#fff'
    },
    '.custom--slider': {
      width: '100%',
      margin: '0px 6px 22px',
      $nest: {
        'i-range, i-range > .slider': {
          width: '100%'
        },
        'input[type="range"]': {
          background: '#0c1234',
          backgroundImage: `linear-gradient(#f15e61, #f15e61)`,
          backgroundSize: '0% 100%',
        },
        'input[type="range"]::-webkit-slider-thumb': {
          backgroundColor: '#f15e61',
          border: '2px solid #e83e8c'
        },
        'input[type="range"]:focus::-webkit-slider-thumb': {
          outline: 0,
        },
        'input[type="range"]::-webkit-slider-runnable-track': {
          height: '4px'
        }
      }
    },
    '.bg-box': {
      background: '#0c1234',
      margin: '0.5rem 0',
      border: '1px solid transparent',
      borderRadius: '0.75rem'
    },
    '.input--token-box': {
      padding: '0.75rem 1rem',
      $nest: {
        'i-button': {
          background: '#192046',
          padding: '0.5rem',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 1.5,
          alignSelf: 'center',
          textAlign: 'center',
          $nest: {
            '&:not(.disabled):hover': {
              background: '#192046'
            },
            '&> span': {
              verticalAlign: 'middle',
              marginRight: '0.5rem'
            },
            '&> i-icon': {
              maxWidth: 10,
              height: 16,
              opacity: 0.5
            },
          }
        },
        '.text-value': {
          display: 'block',
          $nest: {
            '> *': {
              fontSize: '1.25rem',
              paddingRight: '0.25rem'
            }
          }
        }
      }
    },
    '.toggle-reverse': {
      margin: '1rem 0 0.5rem',
      fontSize: '20px',
      textAlign: 'center',
      $nest: {
        '> i-icon': {
          display: 'inline-block',
          padding: '0.25rem',
          fill: '#fff',
          background: '#252a48',
          border: '2px solid transparent',
          borderRadius: '50%',
          transform: 'rotate(90deg) scaleY(-1)',
          cursor: 'pointer'
        }
      }
    },
    '.total-routes': {
      padding: '0.25rem 1rem 0.5rem'
    },
    '.swap-btn-container': {
      marginBottom: '1.5rem',
      $nest: {
        '.btn-swap': {
          position: 'relative',
          width: '100%',
          borderRadius: '0.65rem',
          fontSize: '1.125rem',
          padding: '1.25rem 0.75rem',
          opacity: 1,
          background: 'linear-gradient(to right, #AC1D78 , #E04862)',
          color: '#fff'
        }
      }
    },
    '.price-info': {
      display: 'flex',
      flexDirection: 'column',
      opacity: 0.75,
      $nest: {
        '.header': {
          paddingBottom: '0.5rem',
        },
        '.header > *': {
          fontSize: '1.125rem',
          fontWeight: 700
        },
        'i-row': {
          padding: '0.25rem 0',
        },
        'i-row > i-label:first-child': {
          marginRight: '0.5rem'
        }
      }
    },
    '#swapModal': {
      opacity: '1',
      visibility: 'visible',
      transform: 'scale(1)',
      transition: 'visibility 0s linear 0s,opacity .25s 0s,transform .25s',
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(12, 18, 52, 0.7)',
      zIndex: 1
    },
    '.modal-container': {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 520,
      maxWidth: '100%',
      padding: '1rem',
      margin: '1.5rem auto 2rem'
    },
    '#swapModal.hidden': {
      visibility: 'hidden',
      zIndex: '-99 !important' 
    },
    '.modal-title': {
      paddingBottom: '0.5rem',
      borderBottom: '2px solid #0c1234',
      marginBottom: '20px',
      $nest: {
        '*': {
          fontSize: '20px',
          color: '#f15e61',
        },
      }
    },
    '.input-search': {
      position: 'relative',
      width: '100% !important',
      zIndex: 2,
      $nest: {
        'input': {
          width: '100% !important',
          padding: '1rem 1.5rem 1rem 2.25rem',
          borderRadius: '0.5rem',
          border: '2px solid #2a3675',
          background: 'transparent',
          color: '#fff'
        },
      }
    },
    '.icon-search': {
      position: 'absolute',
      left: '10px',
      top: '50%',
      transform: 'rotate(90deg) translate(-50%, 0)'
    },
    '.common-token': {
      marginBottom: '8px',
      marginTop: '20px',
      display: 'inline-block',
    },
    '.wrapper-token': {
      gap: '2%',
      borderBottom: '2px solid #0c1234',
      paddingBottom: '10px',
    },
    '.btn-token': {
      display: 'flex',
      alignItems: 'center',
      background: '#0c1234',
      width: '23%',
      margin: '0 0 1rem',
      padding: '0.35rem 0.5rem',
      borderRadius: '1rem',
      border: '2px solid transparent',
      cursor: 'pointer',
    },
    '.btn-token:hover': {
      borderColor: '#e83e8c',
    },
    '.list-token': {
      maxHeight: '300px',
      overflowY: 'scroll',
    },
    '.pnl-token': {
      padding: '8px 0',
      cursor: 'pointer',
      $nest: {
        'i-label': {
          marginRight: '8px'
        },
      }
    },
    '.pnl-token.hidden': {
      display: 'none !important'
    },
    '.pnl-token:hover': {
      backgroundColor: '#e75b661a'
    },
    '#listRouting': {
      padding: '1rem',
      maxHeight: '160px',
      overflow: 'hidden',
      height: 'auto'
    },
    '#listRouting.active': {
      padding: '1rem',
      overflowY: 'scroll',
      maxHeight: '640px',
    },
    '.pnl-routing': {
      position: 'relative',
      color: '#fff',
      background: '#192046',
      border: '2px solid #2a3675',
      padding: '1.25rem 1rem 1rem',
      borderRadius: '0.75rem',
      marginBottom: '1rem',
      $nest: {
        '.routing-name': {
          fontWeight: 700,
          marginRight: '0.25rem',
        },
        '.route-caption': {
          marginRight: '0.25rem',
          color: '#ffffff8c',
        },
        '.route-icon': {
          marginRight: '0.25rem',
          color: '#ffffff8c',
          display: 'inline-block'
        },
      }
    },
    '.pnl-routing.routing-selected': {
      borderColor: '#e83e8c'
    },
    '#balanceReceive1': {
      color: "#fff",
      fontSize: '1.25rem',
    },
    '.balanceValue': {
      fontWeight: 700,
      textAlign:'right',
      display: 'block'
    },
    '.price-percent > div': {
      color: '#f7d063',
      fontWeight: 700,
      textAlign:'right'
    },
    '.best-price': {
      color: '#fff',
      position: 'absolute',
      top: '-15px',
      left: '30px',
      background: 'linear-gradient(to right, #8c3c92, #f15e61)',
      borderRadius:' 0.75rem',
      padding: '0.25rem 1rem',
    },
    '.toggle-routes': {
      $nest: {
        'i-label': {
          fontSize: '14px',
          color: '#fff',
          marginRight: '8px'
        },
        'i-icon': {
          display: 'inline-block',
        }
      }
    },
    '.toggle-routes.hidden': {
      display: 'none',
    },
    '.no-price': {
      display: 'none',
    }
  }
})