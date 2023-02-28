import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule('i-view', {
  color: '#FFFFFFE0',
  $nest: {
    '.graph-info': {
      border: `1px solid ${Theme.colors.primary.main}`,
      borderRadius: 10,
      padding: '2rem',
      $nest: {
        '&.graph-info--custom': {
          padding: '1.167rem 2rem 1rem',
          marginBottom: '2rem'
        }
      }
    },
    '.info-row': {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: '.75rem'
    },
    'i-container': {
      padding: '0 2rem'
    },
    '.mt-2': {
      marginTop: '2rem'
    },
    '.mt-4': {
      marginTop: '4rem'
    },
    '.mb-1-2-5': {
      marginBottom: '1.25rem'
    },
    '.mb-0-7-5': {
      marginBottom: '.75rem'
    },
    '.mr-2-5': {
      marginRight: '2.5rem'
    },
    '.overflow': {
      overflow: 'unset'
    },
    '.version-combobox': {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      $nest: {
        'input': {
          textAlign: 'center',
          cursor: 'pointer',
          borderTopLeftRadius: 25,
          borderBottomLeftRadius: 25,
          paddingLeft: '1rem',
          backgroundColor: 'transparent',
          color: Theme.text.primary,
          outline: 'none',
          boxShadow: 'none',
          border: '1px solid #B1A6BB',
          borderRight: 'none'
        },
        '.icon-btn': {
          width: 40,
          borderTopRightRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: 'transparent',
          border: '1px solid #B1A6BB',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderLeft: 'none',
          position: 'relative',
          $nest: {
            ':before': {
              content: "''",
              borderLeft: '1px solid #B1A6BB',
              position: 'absolute',
              height: '80%',
              top: '10%',
              left: 0
            }
          }
        },
        '> .item-list': {
          borderRadius: 25,
          appearance: 'none',
          border: `1px solid ${Theme.background.paper}`,
          backgroundColor: Theme.background.default,
          top: '140%'
        },
        '> .item-list > ul': {
          overflow: "hidden",
          maxHeight: '100%',
          padding: '.5rem 1rem'
        },
        '> .item-list > ul > li': {
          padding: '.5rem 1rem'
        },
        '> .item-list > ul > li:hover': {
          backgroundColor: 'transparent'
        },
        '> .item-list > ul > li.matched': {
          backgroundColor: 'transparent'
        }
      }
    },
    'i-tabs .tabs > i-tab': {
      marginBottom: 0
    },
    'i-tabs .tabs > i-tab .tab-link': {
      fontFamily: 'Helvetica, Regular',
      color: '#A398B1',
      padding: '0.5rem'
    },
    'i-tabs .tabs > i-tab.active .tab-link': {
      color: Theme.colors.primary.contrastText
    },
    'i-tabs:not(.vertical) .tabs i-tab:not(.disabled).active::after': {
      borderBottom: '5px solid transparent',
      borderImage: 'url(../assets/border-image.png) 32 round'
    },
    '.btn': {
      borderRadius: 25,
      padding: '.75rem 3rem',
      height: 'auto !important',
      boxShadow: 'none'
    },
    '.btn-info': {
      backgroundColor: 'transparent',
      border: `1px solid ${Theme.colors.primary.main}`,
      color: Theme.colors.primary.main,
      $nest: {
        '&:hover': {
          backgroundColor: Theme.colors.primary.main,
          color: Theme.text.primary
        }
      }
    },
    '.lb-2 *': {
      fontSize: '2rem',
      fontWeight: 'bold'
    },
    'i-progress .i-progress--grid': {
      gridTemplateColumns: 'auto 1fr 150px',
      gap: 0
    },
    '.i-progress_item.i-progress_item-start': {
      color: Theme.colors.primary.light
    },
    '.i-progress_item.i-progress_item-end': {
      flexDirection: 'row',
      gap: '5px',
      backgroundColor: 'transparent',
      border: `1px solid ${Theme.colors.primary.light}`,
      color: Theme.colors.primary.light,
      borderRadius: 14
    },
    '.i-progress_item.i-progress_item-end img, .status-circle': {
      display: 'none !important'
    },
    'i-progress .i-progress_item .lb-start, .lb-end, i-progress .lb-label, i-progress .i-progress_item .lb-end--number': {
      fontSize: 14,
      color: Theme.colors.primary.light
    },
    '.lb-start': {
      textTransform: 'capitalize'
    },
    '.progress-item': {
      backgroundColor: 'transparent'
    },
    '.lb-progress': {
      position: 'absolute',
      top: '-100%',
      width: 150
    },
    '.lb-progress *': {
      fontSize: 14
    },
    'i-col': {
      marginBottom: '1rem'
    },
    '.chart-group': {
      background: 'linear-gradient(rgba(111, 76, 255, 0) 0%, rgba(111, 76, 255, 0.16) 95.83%)'
    },
    '.btn-chart-group': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      textAlign: 'left',
      $nest: {
        '.lb-number *': {
          fontSize: '1.7rem',
          fontWeight: 400,
          marginLeft: '.5rem'
        },
        '.i-radio': {
          padding: '12px 24px',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          width: '100%',
          cursor: 'pointer'
        },
        '.i-radio.is-checked, .i-radio:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          borderBottom: 'none'
        },
        'i-input': {
          width: 'auto !important'
        }
      }
    },
    '.btn-chart--sm-group': {
      display: 'inline-flex',
      justifyContent: 'flex-end',
      gap: '16px',
      $nest: {
        '.i-radio': {
          display: 'inline-block',
          cursor: 'pointer',
          color: `${Theme.text.primary} !important`,
          width: 'auto',
          fontSize: '.75rem',
        },
        '.i-radio.is-checked, .i-radio:hover': {
          borderBottom: `1px solid rgba(111, 76, 255, 0.88)`,
          backgroundColor: 'transparent'
        },
        'i-input': {
          width: 'auto !important'
        },
        'input': {
          display: 'none'
        }
      }
    },
    '.list-group': {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      $nest: {
        '&.cate-group': {
          $nest: {
            'i-label': {
              backgroundColor: Theme.colors.primary.main,
              borderRadius: 10,
              padding: '0px 30px'
            },
            'i-label *': {
              fontSize: '.75rem',
              fontWeight: 'bold',
              lineHeight: 2
            }
          }
        },
        '&.type-group': {
          $nest: {
            'i-label *': {
              color: Theme.colors.primary.main,
              fontWeight: 'normal'
            }
          }
        }
      }
    },
    '.img-list': {
      $nest: {
        'i-image': {
          display: 'inline-block',
          marginRight: '7px'
        },
        'i-image img': {
          borderRadius: '50%'
        }
      }
    },
    '.lb-small *': {
      fontSize: '.75rem'
    },
    '.btn-dropdown': {
      display: 'inline-flex',
      $nest: {
        'i-dropdown-item:not(:last-child)': {
          borderBottom: '1px solid #fff'
        },
        'i-dropdown-item': {
          padding: '.5rem'
        },
        'button:focus': {
          backgroundColor: `${Theme.colors.primary.main}`,
          transition: 'all 0.3s ease 0s',
          boxShadow: `${Theme.colors.primary.main} 0px 0px 16px 0px`
        }
      }
    },
    '.btn-dropdown .caption': {
      position: 'relative',
      textAlign: 'left'
    },
    '.btn-dropdown .dropdown': {
      borderRadius: 25,
      padding: '.75rem 2rem'
    },
    '.search-wrapper': {
      $nest: {
        '.icon-wrapper': {
          marginRight: '0.5em'
        },
        'input': {
          backgroundColor: 'transparent',
          borderWidth: 0,
          color: Theme.colors.primary.contrastText
        },
        'i-input .clear-btn': {
          padding: '10px 0',
          $nest: {
            'i-icon': {
              fill: '#fff'
            }
          }
        },
      }
    },
    'table.dataTable': {
      $nest: {
        'thead th': {
          padding: '16px 18px 16px 5px',
          textAlign: 'left',
          fontWeight: 'normal'
        },
        'tbody td': {
          padding: '16px 10px'
        },
        'tbody tr': {
          backgroundColor: 'transparent',
        },
        '&.hover tbody tr:hover': {
          backgroundColor: '#00022d'
        },
        '&.stripe tbody tr.odd': {
          backgroundColor: '#012831',
          $nest: {
            '&:hover': {
              backgroundColor: '#012027',
            }
          }
        },
        'tbody td sup': {
          fontSize: 'x-small',
        }
      }
    },
    'i-data-table > div': {
      maxWidth: '1450px'
    },
    '.cell-group': {
      display: 'inline-block',
      $nest: {
        '&> i-image': {
          paddingRight: '10px',
          $nest: {
            'img': {
              width: '24px',
              height: '24px',
              borderRadius: '1rem'
            }
          }
        }
      }
    },
    '.view-tabs .tab_sheet': {
      // marginTop: '2.5rem'
    }
  }
})
