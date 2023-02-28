import { Styles } from '@ijstech/components';
const Theme = Styles.Theme.ThemeVars;

export const customCss = Styles.style({    
    $nest: {
        ">*": {
            marginRight:4
        }
    }
})

Styles.cssRule('.upload-panel', {
    border: `1px solid ${Theme.divider}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexDirection: 'column',
    width: 150,
    height: 150,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '4px',
    $nest: {
        'i-icon': {
            display: 'inline-flex'
        }
    }
})

Styles.cssRule('.upload-btns', {
    display: 'flex',
    justifyContent: 'space-between',
    $nest: {
        'i-button': {
            padding: '.2rem 1rem'
        }
    }
})

Styles.cssRule('i-module-test', {
    width: '100% !important',
    $nest: {
        '.wrapper-panel': {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gridTemplateRows: 'repeat(2, auto)',
            gridGap: '10px'
        },
        '.panel-item': {
            position: 'relative'
        },
        'i-upload': {
            minWidth: '500px',
            minHeight: '300px'
        }
    }
})
