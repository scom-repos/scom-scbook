import {Styles} from '@ijstech/components';

Styles.cssRule('i-login-module', {
    width: '100% !important',
    maxWidth: '420px',
    left: '50%',
    top: '50px',
    transform: 'translate(-50%, 0)',
    border: '1px solid #ccc',
    padding: '10px',
    position: 'absolute',
    $nest: {
        '.title': {
            fontSize: '24px',
            marginBottom: '20px',
            borderBottom: '1px solid #ccc',
            textAlign: 'center'
        },
        '.g-signin2': {
            fontSize: '19px',
            marginBottom: '20px',
            $nest: {
               '> div': {
                    height: 'auto !important',
                    width: '100% !important',
                    padding: '5px',
                    borderRadius: '5px',
                    $nest: {
                        '.abcRioButtonIcon': {
                            borderRadius: '5px',
                        }
                    }
               }
           }
       },
       '.git-hub': {
            background: '#24292e',
            fontSize: '19px',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '20px',
            $nest: {
                'a': {
                    display: 'flex',
                    textDecoration: 'none',
                },
                'svg': {
                    height: '24px',
                    width: '24px',
                    display: 'inline-block',
                    color: '#fff',
                    $nest: {
                        'path': {
                            fill: '#fff'
                        }
                    }
                },
                'div': {
                    flexGrow: 1,
                    color: '#fff',
                    textAlign: 'center'
                }
            }
       },
       'form': {
           $nest: {
               'label div': {
                   color: '#000',
                   fontWeight: 'bold'
               },
               'label input': {
                    color: '#000',
                    padding: '10px',
                    marginBottom: '10px',
                    width: '100%',
                    border: '1px solid #ccc',
                },
                'div a': {
                    textDecoration: 'none',
                    color: '#0077cc',
                    marginBottom: '10px',
                    display: 'block'
                },
                'button': {
                    background: '#34d28b',
                    color: '#fff',
                    width: '100%',
                    fontSize: '17px',
                    textAlign: 'center',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    textTransform: 'uppercase'
                }
           }
       }
    }
})