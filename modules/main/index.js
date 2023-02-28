var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scbook/main/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_1.Styles.Theme.ThemeVars;
    components_1.Styles.cssRule('i-module--1', {
        width: '100%!important',
    });
    components_1.Styles.cssRule('i-panel.docs-module', {
        display: 'block',
        backgroundColor: Theme.docs.background,
        $nest: {
            'i-menu-item': {
                color: '#eaf2f7'
            },
            'a.internal-link': {
                cursor: 'pointer',
            },
            hidden: {
                display: 'none',
            },
            'i-markdown': {
                color: 'rgba(59, 69, 78, 1)',
                $nest: {
                    p: {
                        display: 'block',
                        fontSize: '16px',
                        lineHeight: '24px',
                        overflow: 'hidden',
                        $nest: {
                            '@media (max-width: 700px)': {
                                display: 'block',
                            },
                            'img:only-child': {
                                borderRadius: '5px',
                                padding: 0,
                            },
                        },
                    },
                    li: {
                        $nest: {
                            strong: {
                                display: 'inline-block',
                                paddingBottom: '8px',
                            },
                        },
                    },
                    table: {
                        border: '1px solid #dfe2e5',
                        $nest: {
                            td: {
                                borderTop: '1px solid #dfe2e5',
                            },
                        },
                    },
                },
            },
            '.docs-module': {
                display: 'block',
            },
            '.docs-wrapper': {
                display: 'flex',
                paddingTop: '70px',
                minHeight: 'calc(100vh - 70px)',
            },
            '#docsNavigator': {
                display: 'none',
                backgroundColor: '#f5f5f5',
                $nest: {
                    '@media (min-width: 700px)': {
                        display: 'block',
                    },
                    '&.show': {
                        display: 'block',
                    },
                },
            },
            '.docs-container': {
                display: 'flex',
                flexGrow: 1,
                flexFlow: 'row nowrap',
                backgroundColor: '#fdfdfd',
                // maxWidth: '1750px',
                width: 'calc(100% - 400px)',
                padding: '0 20px',
                // margin: '0 auto',
                marginLeft: '280px',
                $nest: {
                    '@media (max-width: 700px)': {
                        padding: '0',
                    },
                    '#mdViewer': {
                        display: 'block',
                        $nest: {
                            '&.hide': {
                                display: 'none',
                            },
                            '.sc-link': {
                                backgroundColor: 'rgba(255,255,255,1.00)',
                                boxShadow: '0px 1px 2px rgb(0 0 0 / 12%)',
                                border: '1px solid rgba(227,232,237,1.00)',
                                borderRadius: '4px',
                                padding: '16px',
                                cursor: 'pointer',
                                $nest: {
                                    a: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                    },
                                    '.sc-link-icon': {
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'stretch',
                                        flexBasis: 'auto',
                                        flexShrink: 0,
                                        border: '0 solid black',
                                        margin: 0,
                                        marginRight: '16px',
                                        minHeight: 0,
                                        minWidth: 0,
                                        padding: 0,
                                        $nest: {
                                            '.icon-wrapper': {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: 'rgba(245,247,249,1.00)',
                                                color: 'rgba(136,153,168,1.00)',
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '4px',
                                            },
                                        },
                                    },
                                    '.sc-link-content': {
                                        padding: 0,
                                        flexShrink: 1,
                                        flexGrow: 1,
                                        flexBasis: '0%',
                                        $nest: {
                                            '.info': {
                                                display: 'flex',
                                                alignItems: 'center',
                                                $nest: {
                                                    'div.title': {
                                                        fontSize: '16px',
                                                        lineHeight: '24px',
                                                        fontWeight: 500,
                                                        color: 'rgba(59,69,78,1.00)',
                                                    },
                                                    'div.subtitle': {
                                                        fontSize: '14px',
                                                        lineHeight: '22px',
                                                        fontWeight: 400,
                                                        color: 'rgba(136,153,168,1.00)',
                                                        marginLeft: '16px',
                                                    },
                                                },
                                            },
                                            '.type': {
                                                fontSize: '16px',
                                                lineHeight: '24px',
                                                fontWeight: 400,
                                                color: 'rgba(136,153,168,1.00)',
                                            },
                                        },
                                    },
                                },
                            },
                            '.sc-hint': {
                                display: 'flex',
                                alignItems: 'stretch',
                                borderLeftWidth: '4px',
                                borderLeftStyle: 'solid',
                                backgroundColor: '#fff',
                                borderRadius: '4px',
                                $nest: {
                                    '&.warning': {
                                        borderColor: 'rgb(185, 94, 4)',
                                    },
                                    '&.danger': {
                                        borderColor: 'rgb(211, 61, 61)',
                                    },
                                    '&.info': {
                                        borderColor: 'rgb(52, 109, 219)',
                                    },
                                    '&.success': {
                                        borderColor: 'rgb(0, 136, 71)',
                                    },
                                    '.sc-hint-icon': {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '48px',
                                        paddingTop: '18px',
                                    },
                                    '.sc-hint-content': {
                                        flex: 1,
                                        padding: '16px 24px 16px 0',
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                    },
                                },
                            },
                            '.sc-content-ref': {
                                paddingBottom: '4px',
                                $nest: {
                                    a: {
                                        color: 'rgb(29, 138, 237)',
                                        lineHeight: '20px',
                                        $nest: {
                                            '&:hover': {
                                                color: 'rgb(26, 69, 109)',
                                                textDecoration: 'underline',
                                            },
                                        },
                                    },
                                },
                            },
                            '.sc-tabs': {
                                $nest: {
                                    '.tabs': {
                                        marginBottom: 0,
                                        borderBottom: 0,
                                    },
                                    'i-tab': {
                                        textOverflow: 'ellipsis',
                                        border: '1px solid rgba(211,220,228,1.00)',
                                        borderLeft: 0,
                                        backgroundColor: 'rgba(245,247,249,1.00)',
                                        padding: '4px 16px',
                                        fontSize: '14px',
                                        color: 'rgba(136,153,168,1.00)',
                                        $nest: {
                                            '&.active': {
                                                backgroundColor: 'rgba(255,255,255,1.00)',
                                                borderBottom: 0,
                                                color: 'rgba(59,69,78,1.00)',
                                            },
                                            '&:first-of-type': {
                                                borderLeft: '1px solid rgba(211,220,228,1.00)',
                                                borderTopLeftRadius: '4px',
                                            },
                                            '&:last-of-type': {
                                                borderTopRightRadius: '4px',
                                            },
                                            '.tab-link': {
                                                display: 'none',
                                            },
                                            '&:after': {
                                                content: 'none',
                                            },
                                        },
                                    },
                                    'i-tab-sheet': {
                                        border: '1px solid rgb(211, 220, 228)',
                                        minHeight: 'unset',
                                        backgroundColor: 'rgba(255,255,255,1.00)',
                                        borderRadius: '4px',
                                        borderTopLeftRadius: 0,
                                        padding: '24px',
                                    },
                                },
                            },
                            pre: {
                                position: 'relative',
                                $nest: {
                                    'code, code.hljs': {
                                        whiteSpace: 'pre-wrap',
                                        padding: '26px 16px',
                                        fontSize: '12px',
                                    },
                                },
                            },
                            'pre:hover': {
                                $nest: {
                                    'i-button': {
                                        opacity: 1,
                                    },
                                },
                            },
                            '.dropdown-btn': {
                                position: 'absolute',
                                top: '0.5rem',
                                right: '0.5rem',
                                $nest: {
                                    'i-button': {
                                        border: 0,
                                        borderRadius: '0.25rem',
                                        minWidth: 0,
                                        fontSize: '12px',
                                        height: 'unset',
                                        lineHeight: 'unset',
                                        padding: '0.25rem 0.5rem',
                                        backgroundColor: 'transparent',
                                        color: '#61aeee',
                                        $nest: {
                                            '&:hover': {
                                                color: '#fff',
                                                backgroundColor: '#027de7',
                                            },
                                        },
                                    },
                                    'i-modal': {
                                        $nest: {
                                            '> div': {
                                                height: 'auto',
                                            },
                                            '.modal': {
                                                background: 'rgba(0,0,0,.3)',
                                                borderRadius: '0.4rem',
                                                minWidth: 'auto',
                                                padding: '10px'
                                            },
                                            'i-button': {
                                                border: 0,
                                                borderRadius: '0.4rem',
                                                color: '#fff',
                                                padding: '0rem 0.5rem',
                                                transition: 'opacity .2s ease-in-out',
                                                cursor: 'pointer',
                                            },
                                        },
                                    },
                                    '.dropdown': {
                                        margin: '0.25rem 0',
                                        padding: '0.5rem',
                                        width: 'auto',
                                        minWidth: '75px',
                                        backgroundColor: '#151515',
                                    },
                                    'i-dropdown-item': {
                                        justifyContent: 'flex-start',
                                        opacity: 1,
                                        padding: '0 0.5rem',
                                        $nest: {
                                            '&:hover': {
                                                backgroundColor: '#282c34',
                                            },
                                            li: {
                                                fontSize: '12px',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    '#docsEditor': {
                        display: 'block',
                        margin: '20px 0',
                        opacity: 0,
                        height: '0!important',
                        visibility: 'hidden',
                        overflow: 'hidden',
                        $nest: {
                            '&.show': {
                                opacity: 1,
                                height: 'auto!important',
                                visibility: 'visible',
                            },
                        },
                    },
                    '.content': {
                        display: 'block',
                        // flex: 1,
                        padding: '28px 20px 48px',
                        // overflow: 'hidden',
                        // overflowY: 'auto',
                        width: 'calc(100% - 400px)',
                        $nest: {
                            '&::-webkit-scrollbar': {
                                width: 0,
                            },
                            'i-markdown ul li a': {
                                display: 'inline'
                            },
                            'i-markdown > h1': {
                                fontWeight: 700,
                                $nest: {
                                    '&:first-child': {
                                        marginTop: 0,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '.icon': {
                position: 'fixed',
                display: 'inline-block',
                width: '20px',
                height: '20px',
                margin: '15px',
                // zIndex: 10000,
            },
            'i-dropdown-button .icon': {
                display: 'none',
            },
            '.anchor': {
                display: 'block',
                position: 'relative',
                top: '-100px',
            },
            '.right-nav': {
                display: 'none',
                position: 'fixed',
                top: '90px',
                right: '20px',
                alignSelf: 'flex-start',
                maxHeight: 'calc(100vh - 120px)',
                margin: 0,
                paddingTop: '10px',
                borderLeft: '1px solid #e0e0e0',
                $nest: {
                    '@media (min-width: 1060px)': {
                        $nest: {
                            '&.show': {
                                display: 'block',
                            },
                        },
                    },
                },
            },
            img: {
                maxWidth: '100%',
            },
            '#runFrame': {
                display: 'none',
                position: 'fixed',
                top: '90px',
                right: '30px',
                maxHeight: 'calc(100vh - 120px)',
                margin: 0,
                backgroundColor: '#fff',
                borderRadius: '5px',
                padding: '16px',
                border: '1px solid #ececec',
                $nest: {
                    '@media (min-width: 1060px)': {
                        $nest: {
                            '&.show': {
                                display: 'block',
                            },
                        },
                    },
                },
            },
            '#spinner': {
                position: 'relative',
                maxHeight: 'calc(100vh - 80px)',
                $nest: {
                    '.i-loading-spinner': {
                        background: 'white',
                        padding: '40px 20px',
                        borderRadius: '6px',
                        boxShadow: '1px 1px 8px 1px #bbbbbb',
                    },
                },
            },
            '.hljs': {
                display: 'block',
                overflowX: 'auto',
                padding: '.5em',
                color: '#abb2bf',
                background: '#282c34'
            },
            '.hljs-comment, .hljs-quote': {
                color: '#5c6370',
                fontStyle: 'italic'
            },
            '.hljs-doctag,.hljs-formula,.hljs-keyword': {
                color: '#c678dd'
            },
            '.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst': {
                color: '#e06c75'
            },
            '.hljs-literal': {
                color: '#56b6c2'
            },
            '.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string': {
                color: '#98c379'
            },
            '.hljs-built_in,.hljs-class .hljs-title': {
                color: '#e6c07b'
            },
            '.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable': {
                color: '#d19a66'
            },
            '.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title': {
                color: '#61aeee'
            },
            '.hljs-emphasis': {
                fontStyle: 'italic'
            },
            '.hljs-strong': {
                fontWeight: 700
            },
            '.hljs-link': {
                textDecoration: 'underline'
            }
        },
    });
});
define("@scbook/main", ["require", "exports", "@ijstech/components", "@scbook/components", "@scbook/main/index.css.ts"], function (require, exports, components_2, components_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DocsSite = exports.Search = exports.DocsPaging = exports.DocsNavigator = exports.DocsHeader = void 0;
    Object.defineProperty(exports, "DocsHeader", { enumerable: true, get: function () { return components_3.DocsHeader; } });
    Object.defineProperty(exports, "DocsNavigator", { enumerable: true, get: function () { return components_3.DocsNavigator; } });
    Object.defineProperty(exports, "DocsPaging", { enumerable: true, get: function () { return components_3.DocsPaging; } });
    Object.defineProperty(exports, "Search", { enumerable: true, get: function () { return components_3.Search; } });
    const Theme = components_2.Styles.Theme.ThemeVars;
    const __dirname = components_2.application.currentModuleDir;
    const slugify = (str) => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };
    // RequireJS.config({
    //     paths: {
    //         // 'ipfs-verifier': `${__dirname}/lib/ipfs-verifier`,
    //         highlightjs: `${__dirname}/../lib/highlightjs`,
    //         // 'compiler': `${__dirname}/lib/compiler`
    //     },
    // });
    // class GitHubAPI {
    //     private owner: string;
    //     private repo: string;
    //     private _headers: any;
    //
    //     constructor(owner: string, repo: string, authToken: string) {
    //         this.owner = owner;
    //         this.repo = repo;
    //         this._headers = {
    //             "Accept": `application/vnd.github+json`,
    //             'Authorization': `token ${authToken}`
    //         };
    //     }
    //
    //     async getFileTree(commitSHA: string): Promise<any> {
    //         return new Promise((resolve, reject) => {
    //             fetch(`https://api.github.com/repos/${this.owner}/${this.repo}/git/trees/${commitSHA}?recursive=1`, {
    //                 method: 'GET',
    //                 headers: this._headers
    //             }).then(res => res.json()).then(res => {
    //                 resolve(res);
    //             }).catch((error) => {
    //                 reject(error);
    //             })
    //         })
    //     }
    //
    //     async getFile(path: string): Promise<any> {
    //         return new Promise((resolve, reject) => {
    //             fetch(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${path}`, {
    //                 method: 'GET',
    //                 headers: this._headers
    //             }).then(res => res.json()).then(res => {
    //                 resolve(res);
    //             }).catch((error) => {
    //                 reject(error);
    //             })
    //         })
    //     }
    //
    //     async createFile(path: string, content: string, message: string): Promise<any> {
    //         return new Promise((resolve, reject) => {
    //             fetch(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${path}`, {
    //                 body: JSON.stringify({
    //                     content,
    //                     message
    //                 }),
    //                 headers: this._headers,
    //                 method: 'PUT'
    //             }).then(res => res.json()).then(res => {
    //                 resolve(res);
    //             }).catch((error) => {
    //                 reject(error);
    //             })
    //         })
    //     }
    //
    //     async updateFile(path: string, commitSHA: string, content: string, message: string): Promise<any> {
    //         return new Promise((resolve, reject) => {
    //             fetch(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${path}`, {
    //                 body: JSON.stringify({
    //                     content,
    //                     message,
    //                     sha: commitSHA
    //                 }),
    //                 method: 'PUT',
    //                 headers: this._headers
    //             }).then(res => res.json()).then(res => {
    //                 resolve(res);
    //             }).catch((error) => {
    //                 reject(error);
    //             })
    //         })
    //     }
    //
    //     async deleteFile(path: string, commitSHA: string, message: string): Promise<any> {
    //         return new Promise((resolve, reject) => {
    //             fetch(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${path}`, {
    //                 body: JSON.stringify({
    //                     message,
    //                     sha: commitSHA
    //                 }),
    //                 method: 'DELETE',
    //                 headers: this._headers
    //             }).then(res => res.json()).then(res => {
    //                 resolve(res);
    //             }).catch((error) => {
    //                 reject(error);
    //             })
    //         })
    //     }
    //
    //     encodeBase64(data: string) {
    //         return btoa(data);
    //     }
    //
    //     decodeBase64(data: string) {
    //         return atob(data);
    //     }
    // }
    let DocsSite = class DocsSite extends components_2.Module {
        constructor(parent, options) {
            super();
            this.treeData = [];
            this.rightNavAnchors = [];
            this.isNavOpened = true;
            this.forceUpdate = true;
            this.isPageLoading = false;
            this.pageLoadingCounter = 0;
            this.entrypoint = options.entrypoint;
            // if (window.localStorage) {
            //     const entrypoint = window.localStorage.getItem('$$scbook_entrypoint');
            //     if (entrypoint == this.entrypoint) this.forceUpdate = false;
            // }
        }
        toggleNav() {
            this.isNavOpened = !this.isNavOpened;
            this.docsNavigator.toggleNav(this.isNavOpened);
        }
        async retryLoadFile(path) {
            return new Promise((resolve, reject) => {
                const load = async (p) => {
                    try {
                        const request = new Request(path);
                        const response = await fetch(request);
                        if (response.ok) {
                            resolve(response);
                        }
                        else {
                            setTimeout(() => {
                                load(p);
                            }, 5000);
                        }
                    }
                    catch (e) {
                        console.log('load file catch', e);
                        setTimeout(() => {
                            load(p);
                        }, 5000);
                    }
                };
                load(path);
            });
        }
        flattenTree(tree) {
            const clonetTree = JSON.parse(JSON.stringify(tree));
            return clonetTree.reduce((acc, cur) => {
                if (cur.children) {
                    const temp = cur.children;
                    Reflect.deleteProperty(cur, 'children');
                    acc.push(cur);
                    acc.push(this.flattenTree(temp));
                }
                else {
                    acc.push(cur);
                }
                return acc.flat();
            }, []);
        }
        async compileScript(filePath) {
            // try {
            //     // Load script file
            //
            //     const request = new Request(`${this.entrypoint}/${filePath}`);
            //     const response = await fetch(request);
            //     const script = await response.text();
            //
            //
            //     const Compiler = require('@ijstech/compiler').Compiler;
            //     const compiler = new Compiler();
            //     await compiler.addFile('index.tsx', script, async (fileName: string) => {
            //         if (fileName == '@ijstech/components'){
            //             let res = await fetch(`${LibPath}index.d.ts`);
            //             let content = await res.text();
            //             // CodeEditor.addLib(fileName, content);
            //             return {
            //                 fileName: 'index.d.ts',
            //                 content: content
            //             }
            //         }
            //         return {
            //             fileName,
            //             content: ''
            //         }
            //     })
            //
            //     // compiler.addPackage('@ijstech/components', {
            //     //     dts: {
            //     //         'index.d.ts': dts,
            //     //     },
            //     //     version: '',
            //     // });
            //     // compiler.addContent('index.tsx', script);
            //     let result = await compiler.compile();
            //     console.log('result', result)
            //     return result.script['index.js'];
            // } catch (e) {
            //     console.log(e);
            // }
        }
        addBtnEvent() {
            var _a, _b, _c, _d;
            const dropdownBtns = document.querySelectorAll('.dropdown-btn');
            const editBtns = document.querySelectorAll('.edit-btn');
            const runBtns = document.querySelectorAll('.run-btn');
            const copyBtns = document.querySelectorAll('.copy-btn');
            const self = this;
            const lgRegex = new RegExp(/language-(.*?) .*$/gi);
            (_a = Array.from(dropdownBtns)) === null || _a === void 0 ? void 0 : _a.map((btn) => btn.addEventListener('click', async (e) => {
                const dropdownModal = btn.querySelector('.dropdown-modal');
                dropdownModal.showBackdrop = false;
                dropdownModal.height = "auto";
                dropdownModal.popupPlacement = "bottomRight";
                dropdownModal.visible = !dropdownModal.visible;
            }));
            (_b = Array.from(editBtns)) === null || _b === void 0 ? void 0 : _b.map((btn) => btn.addEventListener('click', async (e) => {
                var _a;
                const parentNode = e.target.closest('pre');
                const code = parentNode.querySelector('code');
                const lg = code.className.replace(lgRegex, (_, lg) => lg);
                const filePath = lg.substr(lg.indexOf('(') + 1, lg.indexOf(')') - lg.indexOf('(') - 1);
                const request = new Request(`${this.entrypoint}/${filePath}`);
                const response = await fetch(request);
                const script = await response.text();
                window.localStorage.setItem('$$scbook_edit_language', lg);
                window.localStorage.setItem('$$scbook_edit_code', script);
                (_a = window === null || window === void 0 ? void 0 : window.open('/edit.html', '_blank')) === null || _a === void 0 ? void 0 : _a.focus();
            }));
            (_c = Array.from(runBtns)) === null || _c === void 0 ? void 0 : _c.map((btn) => btn.addEventListener('click', async (e) => {
                try {
                    // console.log('runBtnClick');
                    const parentNode = e.target.closest('pre');
                    const code = parentNode.querySelector('code');
                    const lg = code.className.replace(lgRegex, (_, lg) => lg);
                    // const iframeWindow = self.runFrame['iframeElm'].contentWindow;
                    const filePath = lg.substr(lg.indexOf('(') + 1, lg.indexOf(')') - lg.indexOf('(') - 1);
                    const script = await this.compileScript(filePath);
                    this.pnlRunner.clearInnerHTML();
                    // const module = await application.loadModule('', {script});
                    // if (module) this.pnlRunner.appendChild(module);
                    // iframeWindow.executeCode(script);
                }
                catch (e) {
                    console.log(e);
                }
            }));
            (_d = Array.from(copyBtns)) === null || _d === void 0 ? void 0 : _d.map((btn) => btn.addEventListener('click', (e) => {
                var _a;
                const parentNode = e.target.closest('pre');
                const code = (_a = parentNode.querySelector('code')) === null || _a === void 0 ? void 0 : _a.innerText;
                navigator.clipboard.writeText(code);
                e.target.innerText = 'Copied';
                setTimeout(() => (e.target.innerText = 'Copy'), 1000);
            }));
        }
        async processGitbook(content, filePath) {
            const fileRegex = new RegExp(/{% file src="([^#&?]*)" %}/gi);
            const embedRegex = new RegExp(/{% embed url="<a href=".*?">(.*?)"<\/a> %}/gi);
            const contentRefRegex = new RegExp(/<p>(.*?):<\/p>[\n]<p>[\n]*{% content-ref url="(.*?)" %}[\n].*?[\n]{% endcontent-ref %}[\n]*<\/p>/gi);
            const hintRegex = new RegExp(/{% hint style="(.*?)" %}(.*?){% endhint %}/gis);
            const tabsRegex = new RegExp(/<p>{% tabs %}(.+?){% endtabs %}<\/p>/gis);
            const tabRegex = new RegExp(/{% tab title="(.*?)" %}<\/p>(.+?)<p>{% endtab %}/gis);
            const anchorRegex = new RegExp(/<a href="(.*?)">(.*?)<\/a>/gm);
            const preRegex = new RegExp(/<pre>(.*?)<\/pre>/gis);
            if (preRegex.test(content)) {
                content = content.replace(preRegex, (_, html) => {
                    let ddBtn = `<i-panel class="dropdown-btn"><i-button caption="Actions"></i-button><i-modal class="dropdown-modal"><i-vstack gap="10px">`;
                    const runBtn = `<i-button caption="Run" class="run-btn"></i-button>`;
                    const copyBtn = `<i-button caption="Copy" class="copy-btn"></i-button>`;
                    ddBtn += runBtn;
                    ddBtn += copyBtn;
                    ddBtn += `</i-vstack></i-modal></i-panel>`;
                    html += ddBtn;
                    return `<pre>${html}</pre>`;
                });
            }
            if (fileRegex.test(content)) {
                const sclinkPath = `${this.entrypoint}/${filePath}`;
                const request = new Request(sclinkPath);
                const result = await fetch(request);
                if (result.ok) {
                    const sclinkData = await result.json();
                    content = content.replace(fileRegex, (_, src) => {
                        const { size, filename } = sclinkData.filedata[src];
                        const link = `${this.entrypoint}/${src.replace('../', '')}`;
                        return `<div class="sc-link">                    
                    <a href="${link}" download>
                      <div class="sc-link-icon">
                        <div class="icon-wrapper">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="xMidYMid meet" style="height: 20.8px; vertical-align: middle; width: 20.8px;"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"></path></svg>
                        </div>
                      </div>
                      <div class="sc-link-content">
                        <div class="info">
                          <div class="title">${filename}</div>
                          <div class="subtitle">${size}KB</div>
                        </div>
                        <div class="type">Binary</div>
                      </div>
                    </a>
                    </div>`;
                    });
                }
            }
            if (embedRegex.test(content)) {
                const sclinkPath = `${this.entrypoint}/${filePath}`;
                const request = new Request(sclinkPath);
                const result = await fetch(request);
                if (result.ok) {
                    const sclinkData = await result.json();
                    content = content.replace(embedRegex, (_, url) => {
                        const { title, siteName, icon } = sclinkData.metadata[url];
                        return `<div class="sc-link">                    
                    <a href="${url}" target="_blank">
                      <div class="sc-link-icon">
                        <div class="icon-wrapper">
                          <img alt src="${icon}"/>
                        </div>
                      </div>
                      <div class="sc-link-content">
                        <div class="info">
                          <div class="title">${title}</div>
                        </div>
                        <div class="type">${siteName}</div>
                      </div>
                    </a>
                    </div>`;
                    });
                }
            }
            if (hintRegex.test(content)) {
                content = content.replace(hintRegex, (_, style, hint) => {
                    const icon = {
                        warning: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(185, 94, 4); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 8.96V3.29h1v5.67h-1z" fill="currentColor"></path><path d="M8 12.5a1 1 0 110-2 1 1 0 010 2z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor"></path></svg>`,
                        danger: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(211, 61, 61); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a.5.5 0 01.424.235l7.5 12A.5.5 0 0115.5 14H.5a.5.5 0 01-.424-.765l7.5-12A.5.5 0 018 1zM1.402 13h13.196L8 2.443 1.402 13z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 9.41V6.12h1v3.29h-1z" fill="currentColor"></path><path d="M8 11.67a.76.76 0 110-1.52.76.76 0 010 1.52z" fill="currentColor"></path></svg>`,
                        info: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(52, 109, 219); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 6.37H8a.5.5 0 01.5.5v5.5h-1v-5h-1v-1z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 12.37h-3v-1h3v1z" fill="currentColor"></path><path d="M7.74 5.16a.77.77 0 01-.76-.77.76.76 0 011.52 0 .77.77 0 01-.76.77z" fill="currentColor"></path></svg>`,
                        success: `<svg viewBox="0 0 16 16" fill="none" preserveAspectRatio="xMidYMid meet" class="r-1vzi8xi" style="color: rgb(0, 136, 71); height: 20px; width: 20px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.677 6.16l-4.443 4.444a.5.5 0 01-.708 0L4.323 8.4l.707-.707 1.85 1.85 4.09-4.09.707.707z" fill="currentColor"></path></svg>`,
                    };
                    return `<div class="sc-hint ${style}">
                  <div class="sc-hint-icon">
                    ${icon[style]}
                  </div>
                  <div class="sc-hint-content">${hint}</div>
                </div>`;
                });
            }
            if (contentRefRegex.test(content)) {
                content = content.replace(contentRefRegex, (_, title, url) => {
                    return `<li class="sc-content-ref">
                  <a href="${url}">
                    ${title}
                  </a>
                </li>`;
                });
            }
            if (tabsRegex.test(content)) {
                content = content.replace(tabsRegex, (_, tabsContent) => {
                    let tabsElm = `<i-tabs class="sc-tabs" width="auto" activePageIndex="0">`;
                    const tabs = [];
                    tabsContent.replace(tabRegex, (_, title, content) => {
                        tabs.push({ title, content });
                        return _;
                    });
                    for (let tab of tabs) {
                        tabsElm += `<i-tab tabSheetId="${tab.title}">${tab.title}</i-tab>`;
                    }
                    for (let tab of tabs) {
                        tabsElm += `<i-tab-sheet id="${tab.title}"><div>${tab.content}</div></i-tab-sheet>`;
                    }
                    tabsElm += '</i-tabs>';
                    return tabsElm;
                });
            }
            if (anchorRegex.test(content)) {
                content = content.replace(anchorRegex, (_, href, text) => {
                    if (href.indexOf(window.location.host) < 0)
                        return _;
                    // if(href.indexOf('.md') < 0) return _;
                    const slug = this.docsPaging.currentNode.slug;
                    const newSlug = href
                        .substr(href.toLowerCase().lastIndexOf('/') + 1)
                        // @ts-ignore
                        .replaceAll('.md', '')
                        .replaceAll('/readme', '');
                    // return `<a onclick="((e) => {console.log(e);e.preventDefault();window.history.pushState('${slug}/${newSlug}', 'Title', '/${slug}/${newSlug}')})()">${text}</a>`;
                    return `<a class="internal-link" slug="${newSlug}">${text}</a>`;
                });
            }
            return content;
        }
        activeNode(target, event) {
            const treeNodes = Array.from(document.querySelectorAll('.right-nav i-tree-view-node'));
            treeNodes.forEach((treeNode) => (treeNode.active = false));
            const treeViewNode = target;
            treeViewNode.active = true;
            if ((event === null || event === void 0 ? void 0 : event.type) === 'click') {
                // document.querySelector(`#${treeViewNode.id}`)?.scrollIntoView({
                //     behavior: 'smooth',
                // });
                const node = document.querySelector(`#${treeViewNode.id}`);
                window.scrollTo(0, node.offsetTop - 100);
            }
        }
        activeRightNodeOnScroll() {
            const passedAnchor = this.rightNavAnchors.reduce((acc, id) => {
                const elementTarget = document.getElementById(id);
                if (elementTarget)
                    if (window.scrollY > elementTarget.offsetTop + elementTarget.offsetHeight) {
                        acc.push(id);
                    }
                return acc;
            }, []);
            const treeNode = document.querySelector(`.right-nav #${passedAnchor[passedAnchor.length - 1]}`);
            if (treeNode)
                this.activeNode(treeNode);
        }
        bindEvents() {
            window.addEventListener('popstate', async (e) => {
                await this.loadPage();
                await this.sleep(100);
                this.setActiveNav();
                const navigator = document.querySelector('#docsNavigator');
                if (navigator)
                    navigator.classList.remove('show');
                await this.loadLib();
            });
            window.addEventListener('scroll', () => {
                this.activeRightNodeOnScroll();
            });
        }
        setActiveNav() {
            // setTimeout(() => {
            //     let treeView: TreeView = this.docsNavigator.treeView;
            //     console.log('hash', this.hash)
            //     console.log('treeview items', treeView.items)
            //     treeView.items.map((v) => {
            //         console.log(v.tag.slug)
            //     })
            // }, 500)
            // const currentActiveNode = document.querySelector('i-tree-view-node.active');
            // if (currentActiveNode) currentActiveNode.classList.remove('active');
            // const activeNode = document.querySelector('i-tree-view-node[slug="' + (this.hash || 'README') + '"]');
            // if (activeNode) {
            //     activeNode.classList.add('active');
            //     if (
            //         activeNode.classList.contains('level-1') &&
            //         activeNode.parentNode &&
            //         activeNode.parentNode.parentNode &&
            //         activeNode.parentNode.parentNode.children[0]
            //     ) {
            //         const input: any = activeNode.parentNode.parentNode.children[0];
            //         input.checked = true;
            //     }
            // }
        }
        async init() {
            super.init();
            this.hljs = await this.loadLib();
            if (this.forceUpdate) {
                // Remove all scbook keys from localStorage
                for (let keys in localStorage) {
                    if (keys.indexOf('$$scbook') >= 0)
                        localStorage.removeItem(keys);
                }
                window.localStorage.setItem('$$scbook_entrypoint', this.entrypoint);
            }
            await this.docsHeader.loadHeader(this.entrypoint);
            await this.loadPage();
            this.bindEvents();
            this.setActiveNav();
            await this.loadLib();
        }
        async loadLib() {
            // return new Promise((resolve, reject) => {
            //     RequireJS.require([`highlightjs/app.bundle`], (hljs: any) => {
            //         console.log('hljs.highlightAll')
            //         hljs.highlightAll();
            // resolve(hljs);
            // });
            // });
        }
        // async buildSearchIndex(forceUpdate?: boolean) {
        //     // for (let node of this.flatTree) {
        //     //     await this.loadFile(node, forceUpdate);
        //     // }
        //     let node = this.flatTree.find((node) => {
        //         return node.slug === this.hash;
        //     });
        //     if (!node) {
        //         node = this.flatTree.find((node) => {
        //             return !!node.file;
        //         });
        //     }
        //     if (node) await this.loadFile(node, forceUpdate);
        // }
        // async loadMarkdownFromIPFS(file: string, slug: string) {
        //     let text = '';
        //     this.showSpinner();
        //     this.retryLoadFile(`${this.entrypoint}/${file}`).then((result) => {
        //         if (result.ok) {
        //             text = await result.text();
        //             window.localStorage.setItem(`$$scbook_${slug}`, text);
        //         }
        //     });
        //     this.hideSpinner();
        // }
        async loadPage() {
            this.isPageLoading = true;
            // console.log('loadMenu')
            await this.loadMenu();
            this.loadContent(this.currentNode.tag.file, this.currentNode.tag.slug).then(async () => {
                const contentElm = document.querySelector('i-panel.docs-module i-panel.content');
                if (!contentElm)
                    return;
                this.docsPaging.currentNode = this.currentNode;
                const md = await this.mdViewer.load(this.currentNode.text);
                const processedMd = await this.processGitbook(md, `${this.currentNode.slug}.sclink`);
                this.mdViewer.beforeRender(processedMd);
                await this.sleep(200);
                this.addBtnEvent();
                if (this.hljs)
                    this.hljs.highlightAll();
                for (const ref of document.querySelectorAll('a.internal-link')) {
                    ref.addEventListener('click', (e) => {
                        e.preventDefault();
                        let slug = ref.getAttribute('slug') || '';
                        if (slug) {
                            slug = decodeURIComponent(slug).toLowerCase().replace('/readme', '').replace('.md', '');
                            window.history.pushState('', '', `/${slug}`);
                            window.dispatchEvent(new Event('popstate'));
                        }
                    });
                }
                if (this.isPageLoading == true) {
                    setTimeout(() => {
                        const h1 = this.querySelector('i-markdown h1:first-child');
                        if (h1)
                            this.mdViewer.insertBefore(this.createElement('hr'), h1.nextSibling);
                    }, 5);
                    this.isPageLoading = false;
                }
                this.loadRightNav();
            });
        }
        // async loadHeader() {
        //     return new Promise(async(resolve, reject) => {
        //         const response = await this.retryLoadFile(`${this.entrypoint}/HEADER.md`);
        //         const text = await response.text();
        //
        //     })
        // }
        processMenu(menuText, trimSpace = 0, space = 2) {
            console.log('processMenu text', menuText);
            return new Promise(async (resolve, reject) => {
                let dataArr = menuText.split('\n');
                const beginWithAsteriskReg = /^[\s]*\*/;
                dataArr = dataArr.reduce((acc, str) => {
                    if (beginWithAsteriskReg.test(str)) {
                        str = str.slice(trimSpace);
                        acc.push(str);
                    }
                    return acc;
                }, []);
                let result = [];
                let indexes = [0];
                let lastLevel = -1;
                const spaceReg = /^\s*/;
                const captionReg = /\[(.*?)\]/;
                const fileReg = /\((.*?)\)/;
                let id = 1;
                const hash = this.hash || 'readme';
                for (let item of dataArr) {
                    const level = item.match(spaceReg)[0].length / space;
                    const caption = item === null || item === void 0 ? void 0 : item.match(captionReg)[1];
                    const file = item === null || item === void 0 ? void 0 : item.match(fileReg)[1];
                    const slug = file.replace('.md', '').toLowerCase().replace('/readme', '');
                    if (level === 0) {
                        result.push({
                            id: ++id,
                            caption,
                            file,
                            slug,
                            // expanded: true,
                            active: hash === slug,
                            tag: { file, slug },
                        });
                        if (lastLevel >= 0) {
                            indexes.length = 1;
                            indexes[0]++;
                        }
                        lastLevel = 0;
                    }
                    if (level > 0) {
                        indexes[level] >= 0 ? indexes[level]++ : (indexes[level] = 0);
                        indexes.length = level + 1;
                        lastLevel = level;
                        let item = {};
                        for (const [i, index] of indexes.entries()) {
                            if (Object.keys(item).length === 0) {
                                item = result[index];
                            }
                            else {
                                if (!item.hasOwnProperty('children')) {
                                    item['children'] = [
                                        {
                                            id: ++id,
                                            caption,
                                            file,
                                            slug,
                                            active: hash === slug,
                                            // expanded: true,
                                            tag: { file, slug },
                                        },
                                    ];
                                }
                                else {
                                    if (i === indexes.length - 1) {
                                        item.children.push({
                                            id: ++id,
                                            caption,
                                            file,
                                            slug,
                                            active: hash === slug,
                                            // expanded: true,
                                            tag: { file, slug },
                                        });
                                    }
                                    item = item['children'][index];
                                }
                            }
                        }
                    }
                }
                resolve(result);
            });
        }
        async loadMenu() {
            return new Promise(async (resolve, reject) => {
                var _a, _b, _c;
                let menuText = '';
                if (this.forceUpdate || !((_a = window.localStorage) === null || _a === void 0 ? void 0 : _a.getItem('$$scbook_menu'))) {
                    // console.log('reading summary.md');
                    const response = await this.retryLoadFile(`${this.entrypoint == '.' ? '' : this.entrypoint}/SUMMARY.md`);
                    // console.log('summary.md', response)
                    menuText = await response.text();
                    (_b = window.localStorage) === null || _b === void 0 ? void 0 : _b.setItem(`$$scbook_menu`, menuText);
                }
                else {
                    menuText = (_c = window.localStorage) === null || _c === void 0 ? void 0 : _c.getItem('$$scbook_menu');
                }
                // console.log('menuText', menuText);
                this.processMenu(menuText).then((treeData) => {
                    this.treeData = treeData;
                    if (!this.docsNavigator.treeData) {
                        this.docsNavigator.treeData = this.treeData;
                    }
                    this.flatTree = this.flattenTree(this.treeData);
                    this.docsPaging.flatTree = this.flatTree;
                    this.docsHeader.menu = this.flatTree;
                });
                resolve(menuText);
            });
        }
        async loadContent(file, slug) {
            return new Promise(async (resolve, reject) => {
                var _a, _b, _c;
                let text = '';
                if (this.forceUpdate || !((_a = window.localStorage) === null || _a === void 0 ? void 0 : _a.getItem(`$$scbook_${slug}`))) {
                    const response = await this.retryLoadFile(`${this.entrypoint}/${file}`);
                    text = await response.text();
                    (_b = window.localStorage) === null || _b === void 0 ? void 0 : _b.setItem(`$$scbook_${slug}`, text);
                }
                else {
                    text = (_c = window.localStorage) === null || _c === void 0 ? void 0 : _c.getItem(`$$scbook_${slug}`);
                }
                // Replace root file from
                const regex = /!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g;
                const linkRegex = /\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g;
                text = text.replace(regex, (string, filename) => {
                    if (string.indexOf('http://') >= 0 || string.indexOf('https://') >= 0)
                        return string;
                    const newFileName = `${this.entrypoint}/${encodeURIComponent(filename.replace('/..//g', '').replace('/\\/g', ''))}`;
                    return string.replace(filename, newFileName);
                });
                // Link
                text = text.replace(linkRegex, (string, filename) => {
                    if (string.indexOf('http://') >= 0 || string.indexOf('https://') >= 0 || string.indexOf('.md') < 0)
                        return string;
                    const newFileName = `${window.location.href}/${encodeURIComponent(filename.replace('/\\/g', '').replace('.md', ''))}`;
                    return string.replace(filename, newFileName);
                });
                this.currentNode.text = text;
                const typescriptRegex = new RegExp(/\`\`\`typescript\((.*?)\)(.*?)\`\`\`/gis);
                const isTS = typescriptRegex.test(text);
                const rightNav = document.querySelector('.right-nav');
                const runFrame = document.querySelector('#runFrame');
                if (isTS) {
                    rightNav === null || rightNav === void 0 ? void 0 : rightNav.classList.remove('show');
                    runFrame === null || runFrame === void 0 ? void 0 : runFrame.classList.add('show');
                }
                else {
                    rightNav === null || rightNav === void 0 ? void 0 : rightNav.classList.add('show');
                    runFrame === null || runFrame === void 0 ? void 0 : runFrame.classList.remove('show');
                }
                resolve(text);
            });
        }
        loadRightNav() {
            let toc = '';
            let level = 0;
            this.rightNavAnchors = [];
            const content = document.querySelector('.docs-container .content');
            if (content) {
                // @ts-ignore
                const a = content.innerHTML.replaceAll('<strong>', '').replaceAll('</strong>', '');
                // @ts-ignore
                a.replace(/<h([\d])(.*)>([^<]+)<\/h([\d])>/gi, (str, openLevel, temp, titleText, closeLevel) => {
                    if (openLevel != closeLevel || openLevel == 1) {
                        return str;
                    }
                    if (openLevel > level) {
                        toc += new Array(openLevel - level + 1).join('<i-tree-view>');
                    }
                    else if (openLevel < level) {
                        toc += new Array(level - openLevel + 1).join('</i-tree-view>');
                    }
                    level = parseInt(openLevel);
                    let anchor = titleText.replace(/\W/g, '-').toLowerCase();
                    if (anchor[anchor.length - 1] == '-')
                        anchor = anchor.substr(0, anchor.length - 1);
                    this.rightNavAnchors.push(anchor);
                    toc += `<i-tree-view-node id='${anchor}' caption='${titleText}' useIcon='false' ></i-tree-view-node>`;
                    return `<h${openLevel}><a class='anchor' aria-hidden='true' id=' {anchor}'></a>${titleText}</h${closeLevel}>`;
                });
            }
            if (level) {
                toc += new Array(level + 1).join('</i-tree-view>');
            }
            const right = document.querySelector('.right-nav');
            if (right)
                right.innerHTML = toc;
            const treeNodes = Array.from(document.querySelectorAll('.right-nav i-tree-view-node'));
            treeNodes.forEach((treeNode) => (treeNode.onClick = this.activeNode));
            this.activeRightNodeOnScroll();
        }
        // async loadFile(node: any, forceUpdate?: boolean) {
        //     if (!node.file) return;
        //     let text: string;
        //     if (forceUpdate || !window.localStorage || !!!window.localStorage.getItem(`$$scbook_${node.slug}`)) {
        //         const path = `${this.entrypoint}/${node.file}`;
        //         const request = new Request(path);
        //         const result = await fetch(request);
        //         if (result.ok) {
        //             text = await result.text();
        //             window.localStorage.setItem(`$$scbook_${node.slug}`, text);
        //         }
        //     } else {
        //         text = window.localStorage.getItem(`$$scbook_${node.slug}`) || '';
        //     }
        //     // Replace root file from
        //     const regex = /!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g;
        //     const linkRegex = /\*\s*?\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/g;
        //     // @ts-ignore
        //     text = text.replace(regex, (string, filename) => {
        //         if (string.indexOf('http://') >= 0 || string.indexOf('https://') >= 0) return string;
        //         const newFileName = `${this.entrypoint}/${encodeURIComponent(
        //             filename.replaceAll('../', '').replaceAll('\\', '')
        //         )}`;
        //         return string.replace(filename, newFileName);
        //     });
        //     // Link
        //     text = text.replace(linkRegex, (string, filename) => {
        //         if (string.indexOf('http://') >= 0 || string.indexOf('https://') >= 0 || string.indexOf('.md') < 0)
        //             return string;
        //         const newFileName = `${window.location.href}/${encodeURIComponent(
        //             filename.replaceAll('\\', '').replace('.md', '')
        //         )}`;
        //         return string.replace(filename, newFileName);
        //     });
        //     node.text = text;
        // }
        render() {
            return (this.$render("i-panel", { class: "docs-module", height: "auto", width: "100%" },
                this.$render("i-docs-header", { id: "docsHeader" }),
                this.$render("i-icon", { name: "bars", fill: "#55f", class: "icon", onClick: this.toggleNav }),
                this.$render("i-panel", { class: "docs-wrapper" },
                    this.$render("i-docs-navigator", { id: "docsNavigator" }),
                    this.$render("i-panel", { class: "docs-container" },
                        this.$render("i-panel", { class: "content" },
                            this.$render("i-markdown", { id: "mdViewer" }),
                            this.$render("i-paging", { id: "docsPaging" })),
                        this.$render("i-panel", { class: "right-nav" }),
                        this.$render("i-panel", { id: "pnlRunner", width: "400px", height: "100%", position: "fixed", right: 0, border: { width: "1px", style: "solid", color: "#DFE2E5" }, padding: { top: "10px", left: "10px", right: "10px" } })))));
        }
        sleep(time) {
            return new Promise((res, rej) => {
                setTimeout(res, time);
            });
        }
        get currentNode() {
            let node = this.flatTree.find((node) => {
                return node.slug === (this.hash === '' ? 'readme' : this.hash);
            });
            if (!node)
                node = this.flatTree.find((node) => {
                    return !!node.text;
                });
            return node;
            // return this.docsNavigator.currentNode;
        }
        get hash() {
            return decodeURI(window.location.pathname.substr(1));
        }
    };
    DocsSite = __decorate([
        components_2.customModule,
        components_2.customElements('i-docs-site')
    ], DocsSite);
    exports.DocsSite = DocsSite;
});
