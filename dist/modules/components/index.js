var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scbook/components/header.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_1.Styles.Theme.ThemeVars;
    components_1.Styles.cssRule('i-docs-header', {
        display: 'block',
        zIndex: '9999',
        $nest: {
            '.hidden': {
                display: 'none !important',
            },
            'i-switch': {
                display: 'none',
            },
            '& > .header': {
                position: 'fixed',
                flexShrink: 0,
                width: '100%',
                height: '70px',
                padding: '8px 0',
                borderBottom: '1px solid #ebeff3',
                zIndex: 9999,
                transform: 'translateZ(0)',
                // backgroundColor: Theme.docs.background,
                backgroundColor: '#151515',
                $nest: {
                    '.menu-item': {
                        $nest: {
                            '&:hover': {
                                color: '#fff',
                            },
                            '&.menu-selected': {
                                color: '#eaf2f7',
                            },
                            '&.menu-selected:hover': {
                                color: '#fff',
                            }
                        }
                    }
                }
            },
            '.logo': {
                height: '65px',
                padding: '10px 0',
                width: '162px',
                // borderRight: "1px solid #E0E0E0",
                // marginLeft: '20px',
                display: 'none',
                $nest: {
                    'img': {
                        marginLeft: '20px'
                    },
                    '@media (min-width: 700px)': {
                        display: 'block',
                        marginRight: '110px',
                    },
                    '&::after': {
                        content: "''",
                        position: 'absolute',
                        top: '50%',
                        right: '-110px',
                        transform: 'translateY(-50%)',
                        width: '1px',
                        height: '60px',
                        backgroundColor: '#fff',
                    },
                },
            },
            '#btnMenu': {
                display: 'block',
                position: 'absolute',
                left: 0,
                padding: '20px',
                cursor: 'pointer',
                $nest: {
                    '@media (min-width: 700px)': {
                        display: 'none',
                    },
                    svg: {
                        height: '20px',
                        width: '20px',
                    },
                },
            },
            '#btnEdit': {
                display: 'block',
                position: 'absolute',
                right: 0,
                padding: '20px',
                cursor: 'pointer',
                $nest: {
                    svg: {
                        height: '20px',
                        width: '20px',
                    },
                },
            },
            '.container': {
                display: 'flex',
                alignItems: 'center',
                flexFlow: 'row nowrap',
                position: 'relative',
                textAlign: 'left',
                // maxWidth: '1750px',
                height: '100%',
                padding: '0 4px',
                margin: '0 auto',
            },
            '.heading': {
                $nest: {
                    div: {
                        fontSize: '25px',
                        fontWeight: 700,
                        color: 'white',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        display: 'block',
                    },
                },
                fontSize: '15px',
                fontWeight: 700,
                color: 'white',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                display: 'block',
            },
            '#logoText': {
                width: '259px',
                borderRight: '1px solid #E0E0E0',
                marginLeft: '20px',
                display: 'none',
                $nest: {
                    '@media (min-width: 700px)': {
                        display: 'block',
                    },
                },
            },
            'i-panel.search': {
                display: 'flex',
                alignItems: 'center',
                marginLeft: 'auto',
            },
            'i-search': {
                marginRight: '6px',
                $nest: {
                    input: {
                        backgroundColor: 'rgb(236, 236, 236)',
                    },
                },
            },
            '#scbookMenu': {
                margin: '0 20px 0 60px',
                $nest: {
                    nav: {
                        padding: '20px 20px',
                        $nest: {
                            a: {
                                $nest: {
                                    '&:hover': {
                                        opacity: 1,
                                        $nest: {
                                            '.title': {
                                                color: '#fff',
                                            },
                                        },
                                    },
                                    '.title': {
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        lineHeight: '24px',
                                        color: 'rgba(234, 242, 247, 1)',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    });
});
define("@scbook/components/search.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let Theme = components_2.Styles.Theme.ThemeVars;
    components_2.Styles.cssRule('i-search', {
        fontFamily: Theme.typography.fontFamily,
        fontSize: Theme.typography.fontSize,
        position: 'relative',
        $nest: {
            '.search': {
                position: 'relative',
                display: 'inline-block',
                direction: 'ltr',
            },
            'i-icon': {
                position: 'absolute',
                top: '50%',
                left: '10px',
                display: 'inline-block',
                width: '18px',
                height: '18px',
                transform: 'translateY(-50%)',
            },
            input: {
                position: 'relative',
                verticalAlign: 'top',
                height: '2.5rem',
                background: 'none',
                border: '1px solid #c5d1db',
                color: '#28333d',
                fontWeight: 400,
                fontSize: '15px',
                borderRadius: '20px',
                lineHeight: '20px',
                outline: 'none',
                transition: 'width .5s ease',
                width: '170px',
                // responsive
                padding: '12px 8px 8px 38px',
                $nest: {
                    '&::placeholder': {
                        color: '#28333d',
                        opacity: 1,
                    },
                    '&:focus': {
                        width: '220px',
                    },
                },
            },
            '.dropdown': {
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: 'auto',
                right: 0,
                zIndex: 100,
                fontSize: '14px',
                lineHeight: '1.2em',
                minWidth: '600px',
                padding: '1rem',
                margin: '6px 0 0',
                border: 'none',
                borderRadius: '1rem',
                boxShadow: '0 4px 16px rgb(0 0 0 / 25%)',
                background: '#fff',
                $nest: {
                    '&.show': {
                        display: 'block',
                    },
                },
            },
            '.suggestion': {
                display: 'table',
                width: '100%',
                whiteSpace: 'normal',
                border: 'none',
                color: '#333',
                cursor: 'pointer',
                overflow: 'hidden',
                $nest: {
                    '.header': {
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 400,
                        background: '#ebeff3',
                        color: '#28333d',
                        borderRadius: '1rem',
                        padding: '5px 10px',
                    },
                    '.column': {
                        display: 'table-cell',
                        borderRight: '1px solid rgba(57,57,57,.3)',
                        color: '#555',
                        overflow: 'hidden',
                        padding: '5px 7px 5px 5px',
                        textAlign: 'right',
                        textOverflow: 'ellipsis',
                        verticalAlign: 'top',
                        width: '135px',
                        maxWidth: '135px',
                        minWidth: '135px',
                    },
                    '.content': {
                        display: 'table-cell',
                        padding: '5px 10px',
                        width: '100%',
                    },
                    '.content-text': {
                        display: 'block',
                        fontWeight: 600,
                    },
                    '.content-paragraph-text': {
                        display: '-webkit-box',
                        '-webkit-line-clamp': 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    },
                    '.highlight': {
                        color: '#55f',
                        padding: 0,
                        background: 'none',
                        fontWeight: 600,
                    },
                },
            },
        },
    });
});
define("@scbook/components/search.tsx", ["require", "exports", "@ijstech/components", "@scbook/components/search.css.ts"], function (require, exports, components_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Search = void 0;
    const __dirname = components_3.application.currentModuleDir;
    components_3.RequireJS.config({
        paths: {
            minisearch: `${__dirname}/lib/minisearch`,
        },
    });
    let Search = class Search extends components_3.Control {
        constructor() {
            super(...arguments);
            this.isDropdownShown = false;
            this._keyword = '';
        }
        get keyword() {
            return this._keyword;
        }
        set keyword(value) {
            this._keyword = value;
        }
        buildIndex(documents, fields, storeFields) {
            if (!this.MiniSearch) {
                return;
            }
            this.miniSearch = new this.MiniSearch({
                fields,
                storeFields,
                searchOptions: {
                    fuzzy: 0.2,
                },
            });
            this.miniSearch.addAll(documents);
        }
        search(keyword) {
            return this.miniSearch.search(keyword).slice(0, 5);
        }
        autoSuggest(keyword) {
            return this.miniSearch.autoSuggest(keyword);
        }
        updatePath(slug) {
            if (slug) {
                window.history.pushState(slug, 'Title', `/${slug.toLowerCase() === 'readme' ? '' : slug}`);
                window.dispatchEvent(new Event('popstate'));
            }
        }
        renderSuggestion(data) {
            data.sort((v1, v2) => v1[0].score >= v2[0].score ? -1 : 1);
            if (data.length) {
                if (!this.dropdownElm) {
                    this.dropdownElm = this.createElement('span', this.wrapperElm);
                    this.dropdownElm.classList.add('dropdown', 'dataset');
                }
                this.dropdownElm.innerHTML = '';
                const suggestionElm = this.createElement('div', this.dropdownElm);
                suggestionElm.classList.add('suggestion');
                data.map((row) => {
                    // console.log('search row', row)
                    const suggestionHeader = this.createElement('div', suggestionElm);
                    suggestionHeader.classList.add('header');
                    suggestionHeader.innerText = row[0].title;
                    row.map((item) => {
                        const suggestionWrapper = this.createElement('div', suggestionElm);
                        suggestionWrapper.classList.add('wrapper');
                        suggestionWrapper.addEventListener('click', () => {
                            this.updatePath(item.slug.toLowerCase());
                            this.dropdownElm.classList.remove('show');
                        });
                        const suggestionColumn = this.createElement('div', suggestionWrapper);
                        suggestionColumn.classList.add('column');
                        const suggestionColumnText = this.createElement('span', suggestionColumn);
                        suggestionColumnText.classList.add('column-text');
                        suggestionColumnText.innerHTML = item.title;
                        const suggestionContent = this.createElement('div', suggestionWrapper);
                        suggestionContent.classList.add('content');
                        const suggestionContentText = this.createElement('span', suggestionContent);
                        suggestionContentText.classList.add('content-text');
                        suggestionContentText.innerHTML = item.title;
                        const suggestionParagraphText = this.createElement('span', suggestionContent);
                        suggestionParagraphText.classList.add('content-paragraph-text');
                        const rgxp = new RegExp('(\\S*.{0,10})?(' + Object.keys(item.match)[0] + ')(.{0,10}\\S*)?', 'ig');
                        // If you want to account for newlines, replace dots `.` with `[\\s\\S]`
                        const results = [];
                        item.text.replace(rgxp, function (match, $1, $2, $3) {
                            results.push(($1 ? '…' + $1 : '') + "<b class='highlight'>" + $2 + '</b>' + ($3 ? $3 + '…' : ''));
                        });
                        suggestionParagraphText.innerHTML = results.join(' ');
                    });
                });
                this.dropdownElm.classList.add('show');
            }
        }
        async initMiniSearch() {
            // return new Promise<void>((resolve, reject) => {
            //     try {
            //         RequireJS.require([`minisearch/index.min`], (minisearch: MiniSearch) => {
            //             this.MiniSearch = minisearch;
            //             resolve();
            //         });
            //     } catch (err) {
            //         reject(err);
            //     }
            // });
        }
        async init() {
            if (!this.wrapperElm) {
                this.wrapperElm = this.createElement('span', this);
                this.wrapperElm.classList.add('search', 'autocomplete');
                const icon = new components_3.Icon(this, { name: 'search', fill: '#55f' });
                this.wrapperElm.appendChild(icon);
                this.inputElm = this.createElement('input', this.wrapperElm);
                this.inputElm.setAttribute('placeholder', 'Search');
                this.inputElm.setAttribute('autocomplete', 'off');
                this.inputElm.addEventListener('input', () => {
                    const input = document.querySelector('i-search input');
                    const results = this.search(input.value);
                    const groupResult = Object.values(results.reduce((acc, result) => {
                        acc[result.id] = acc[result.id] || [];
                        acc[result.id].push(result);
                        return acc;
                    }, Object.create(null)));
                    this.renderSuggestion(groupResult);
                });
                await this.initMiniSearch();
                document.addEventListener('click', (e) => {
                    if (!this._enabled)
                        return false;
                    if (!this.contains(e.target)) {
                        // Clicked outside the box
                        if (this.dropdownElm)
                            this.dropdownElm.classList.remove('show');
                    }
                });
            }
        }
        static async create(options, parent) {
            let component = new this(parent, options);
            await component.init();
            return component;
        }
    };
    Search = __decorate([
        components_3.customElements('i-search')
    ], Search);
    exports.Search = Search;
});
define("@scbook/components/header.tsx", ["require", "exports", "@ijstech/components", "@scbook/components/search.tsx", "@scbook/components/header.css.ts"], function (require, exports, components_4, search_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DocsHeader = exports.Search = void 0;
    Object.defineProperty(exports, "Search", { enumerable: true, get: function () { return search_1.Search; } });
    const moonIcon = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="%23fff" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>';
    const sunIcon = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="%23fff" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>';
    let DocsHeader = class DocsHeader extends components_4.Module {
        constructor(parent, options) {
            super();
            this.menuItem = [];
            this.searchIndex = [];
        }
        get menu() {
            return this._menu;
        }
        set menu(value) {
            this._menu = value;
            if (this._menu && this._menu.length) {
                components_4.RequireJS.require([`${components_4.LibPath}lib/marked/marked.umd.js`], async (marked) => {
                    const acc = [];
                    for (const item of this._menu) {
                        if (item.text) {
                            // const markdown = await this.loadMarkdown(
                            //   `./dist/markdown/${item.file}`
                            // )
                            const htmlText = marked.parse(item.text);
                            /**
                             * <h[\d].*?> : detect the open tag
                             * ([^<]+) : group and catch the subTitle
                             * <\/h[\d]> : detect the close tag
                             * ([\s\S]*?) : group and catch the paragraph ungreedy
                             * (?=(?:<h[\d].*?>|$)) : detect the end point of paragraph
                             */
                            htmlText.replace(/<h[\d].*?>([^<]+)<\/h[\d]>([\s\S]*?)(?=(?:<h[\d].*?>|$))/gi, (str, subTitle, paragraph) => {
                                let cloneItem = Object.assign({}, item);
                                cloneItem.subTitle = subTitle;
                                const paraDom = document.createElement('div');
                                paraDom.innerHTML = paragraph;
                                cloneItem.paragraph = paraDom.innerText.replace(/\n/g, '');
                                if (cloneItem.subTitle && cloneItem.paragraph)
                                    acc.push(cloneItem);
                                return str;
                            });
                        }
                    }
                    let keys = [];
                    // if (acc && acc.length > 0) keys = Object.keys(acc[0]);
                    // console.log('acc', acc)
                    let id = 0;
                    for (const index of this.searchIndex) {
                        if (index['slug'])
                            index['slug'] = index['slug'].replace('.md', '').toLowerCase().replace('/readme', '');
                        index['id'] = ++id;
                    }
                    this.searchBar.buildIndex(this.searchIndex, ['title', 'text'], ['title', 'text', 'slug']);
                    // console.log('build index search index', this.searchIndex);
                    // console.log('keys', keys);
                });
            }
        }
        async loadSearchIndex(entrypoint) {
            const request = new Request(`${entrypoint}/.scbook/searchindex.json`);
            const response = await fetch(request);
            const searchIndex = await response.json();
            this.searchIndex = searchIndex;
            return searchIndex;
        }
        async loadMarkdown(src) {
            const mdRequest = new Request(src, {
                headers: new Headers({ accept: 'application/vnd.github.v3.raw' }),
            });
            const response = await fetch(mdRequest);
            if (!response.ok)
                return '# There was error with your response, please check the details and try again';
            return response.text();
        }
        btnChangeThemeClick(target, event) {
            if (this.btnChangeTheme.checked) {
                this.btnChangeTheme.checked = false;
                components_4.Styles.Theme.applyTheme(components_4.Styles.Theme.defaultTheme);
            }
            else {
                this.btnChangeTheme.checked = true;
                components_4.Styles.Theme.applyTheme(components_4.Styles.Theme.darkTheme);
            }
        }
        async init() {
            super.init();
        }
        async checkLogoExists(entrypoint, logoPath) {
            if (logoPath.indexOf('https://') >= 0 || logoPath.indexOf('http://') >= 0) {
                this.imgLogo.url = logoPath;
                return;
            }
            if (logoPath) {
                const request = new Request(`${entrypoint}/${logoPath}`);
                const response = await fetch(request);
                if (!response.ok) {
                    this.imgLogo.classList.add('hidden');
                    this.logoText.classList.remove('hidden');
                }
                else
                    this.imgLogo.url = `${entrypoint}/${logoPath}`;
            }
            else {
                this.imgLogo.classList.add('hidden');
                this.logoText.classList.remove('hidden');
            }
        }
        async loadFile(path) {
            return new Promise((resolve, reject) => {
                const load = async (p) => {
                    try {
                        const request = new Request(path);
                        const response = await fetch(request);
                        if (response.ok) {
                            resolve(response);
                        }
                        else if (response.status == 404) {
                            resolve(response);
                        }
                        else {
                            setTimeout(() => {
                                load(p);
                            }, 5000);
                        }
                    }
                    catch (e) {
                        setTimeout(() => {
                            load(p);
                        }, 5000);
                    }
                };
                load(path);
            });
        }
        async loadHeader(entrypoint, forceUpdate) {
            let header;
            const KEY = '$$scbook_header';
            if (!forceUpdate) {
                if (window.localStorage) {
                    header = localStorage.getItem(KEY);
                }
            }
            if (forceUpdate || !header) {
                try {
                    // const request = new Request(`${entrypoint}/HEADER.md`);
                    // const response = await fetch(request);
                    const response = await this.loadFile(`${entrypoint == '.' ? '' : entrypoint}/HEADER.md`);
                    if (response.ok) {
                        header = await response.text();
                        if (window.localStorage) {
                            window.localStorage.setItem(KEY, header);
                        }
                    }
                }
                catch (err) { }
            }
            const menu = [];
            if (header) {
                for (const line of header.split('\n')) {
                    if (line.trim().indexOf('#') == 0) {
                        // Logo alternative text
                        const logoData = getData(line);
                        let [logoTitle, logoPath] = logoData;
                        try {
                            this.checkLogoExists(entrypoint, logoPath);
                        }
                        catch (e) { }
                        this.logoText.caption = logoTitle;
                        continue;
                    }
                    const data = getData(line);
                    const [title, link, target] = data;
                    let item = {
                        title: ''
                    };
                    if (title) {
                        item.title = title;
                        if (link) {
                            item.link = { href: link, target: target || '_blank' };
                        }
                        menu.push(item);
                    }
                }
            }
            this.menuItem = menu;
            this.scbookMenu.data = menu;
            // this.scbookMenu.items = menu;
            // Load search index
            try {
                await this.loadSearchIndex(entrypoint);
            }
            catch (e) { }
            function getData(str) {
                return [
                    str.substr(str.indexOf('[') + 1, str.indexOf(']') - (str.indexOf('[') + 1)).trim(),
                    str.substr(str.indexOf('(') + 1, str.indexOf(')') - (str.indexOf('(') + 1)).trim(),
                ];
            }
        }
        toggleMenu() {
            const navigator = document.querySelector('#docsNavigator');
            if (navigator) {
                navigator.classList.contains('show') ? navigator.classList.remove('show') : navigator.classList.add('show');
            }
        }
        toggleEditMode() {
            const editor = document.querySelector('#docsEditor');
            const mdViewer = document.querySelector('#mdViewer');
            if (editor) {
                if (editor.classList.contains('show')) {
                    editor.classList.remove('show');
                    mdViewer === null || mdViewer === void 0 ? void 0 : mdViewer.classList.remove('hide');
                }
                else {
                    editor.classList.add('show');
                    mdViewer === null || mdViewer === void 0 ? void 0 : mdViewer.classList.add('hide');
                }
            }
        }
        render() {
            this.style.width = '100%';
            this.style.height = 'auto';
            return (this.$render("i-panel", { class: "header" },
                this.$render("i-panel", { class: "container" },
                    this.$render("i-label", { id: "logoText", class: "heading hidden" }),
                    this.$render("i-image", { id: "imgLogo", class: "logo" }),
                    this.$render("i-panel", { id: "btnMenu", onClick: this.toggleMenu },
                        this.$render("i-icon", { name: "bars", fill: "#fff" })),
                    this.$render("i-menu", { id: "scbookMenu", data: this.menuItem }),
                    this.$render("i-panel", { id: "btnEdit", onClick: this.toggleEditMode, class: "hidden" },
                        this.$render("i-icon", { name: "pencil-alt", fill: "#fff" })),
                    this.$render("i-panel", { class: "search" },
                        this.$render("i-switch", { id: "btnChangeTheme", checkedThumbColor: "#fff", uncheckedThumbColor: "#fff", 
                            // checkedThumbIcon={moonIcon}
                            // uncheckedThumbIcon={sunIcon}
                            checkedTrackColor: "#070707", uncheckedTrackColor: "#c5c5c5", onClick: this.btnChangeThemeClick })))));
        }
    };
    DocsHeader = __decorate([
        components_4.customElements('i-docs-header')
    ], DocsHeader);
    exports.DocsHeader = DocsHeader;
});
define("@scbook/components/navigator.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_5.Styles.Theme.ThemeVars;
    components_5.Styles.cssRule('i-docs-navigator', {
        display: 'block',
        flex: '0 0 280px',
        position: 'fixed',
        top: '70px',
        borderRight: '1px solid #ececec',
        overflowY: 'auto',
        zIndex: '9998',
        $nest: {
            '&.hidden': {
                display: 'none',
            },
            '@media (max-width: 700px)': {
                position: 'fixed',
                width: '75% !important',
                left: '0',
                top: '80px',
                background: 'white',
                height: '90% !important',
            },
            'i-panel': {
                height: '100%',
            },
            '.bold': {
                fontWeight: '700',
            },
            '.footer': {
                whiteSpace: 'nowrap',
                position: 'sticky',
                bottom: '0px',
                background: '#ECEEF1',
                height: '50px',
                padding: '10px',
                $nest: {
                    img: {
                        height: '40px',
                        width: 'auto',
                        marginRight: '10px',
                    },
                    'i-label > div': {
                        color: 'rgb(136, 153, 168)',
                        fontSize: '16px',
                    },
                },
            },
            'i-tree-view.i-tree-view': {
                height: '100%',
                $nest: {
                    'i-tree-node': {
                        $nest: {
                            '.i-tree-node_content': {
                                display: 'flex',
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                paddingInline: '0 16px !important',
                                cursor: 'pointer',
                                minHeight: '32px',
                                border: '1px solid transparent',
                                $nest: {
                                    '&:hover': {
                                        backgroundColor: 'rgb(236, 239, 241)',
                                        color: 'inherit',
                                    },
                                    label: {
                                        lineHeight: '22px',
                                        padding: '8px 0 8px 16px',
                                        color: 'rgba(92, 105, 117, 1.00)',
                                    },
                                },
                            },
                            '.i-tree-node_children': {
                                marginLeft: '16px',
                                $nest: {
                                    'i-tree-node': {
                                        borderLeft: '1px solid rgba(211, 220, 228, 1.00)',
                                        $nest: {
                                            '.i-tree-node_content': {
                                                $nest: {
                                                    label: {
                                                        color: 'rgba(136, 153, 168, 1.00)',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            '&.is-checked': {
                                $nest: {
                                    '> .i-tree-node_content': {
                                        backgroundColor: 'rgb(236, 239, 241)',
                                        color: 'rgba(12, 18, 52, 1.00)',
                                    },
                                },
                            },
                            '&.active': {
                                $nest: {
                                    '> .i-tree-node_content': {
                                        backgroundColor: 'rgba(255, 255, 255, 1.00)',
                                        border: '1px solid rgba(211,220,228,1.00)',
                                        $nest: {
                                            label: {
                                                color: 'rgba(12, 18, 52, 1.00)',
                                            },
                                        },
                                    },
                                },
                            },
                            '.i-tree-node_label': {
                                marginRight: 'auto'
                            },
                            '.is-right': {
                                display: 'none'
                            }
                        },
                    },
                },
            },
            // '.tree-child-node': {
            //   marginLeft: '15px',
            //   borderLeft: '1px solid rgb(211, 220, 228)',
            //   cursor: 'pointer',
            //   $nest: {
            //     'i-tree-view-node.active > label': {
            //       borderLeft: '0px',
            //     },
            //   },
            // },
            // 'i-tree-view > i-tree-node:not(.custom-left).has-children': {
            //   marginLeft: 0,
            // },
            // 'i-tree-view .i-tree-node i-tree-node': {
            //   padding: '0',
            //   $nest: {
            //     '&:not(.custom-left)': {
            //       padding: 0,
            //     },
            //   },
            // },
            '&::-webkit-scrollbar': {
                width: '8px',
            },
            '&::-webkit-scrollbar-track': {
                background: '#f1f1f1' /* color of the tracking area */,
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#aaa' /* color of the scroll thumb */,
                borderRadius: '10px' /* roundness of the scroll thumb */,
            },
            '&.hide': {
                maxWidth: 0,
                opacity: 0,
                visibility: 'hidden',
            },
            '.navigator': {
                padding: '16px 0',
            },
            // 'i-tree-node': {
            //   $nest: {
            //     'i-icon': {
            //       marginTop: '15px',
            //       marginRight: '15px',
            //     },
            //     label: {
            //       padding: '8px 20px 8px 20px',
            //     },
            //     '&.active > .i-tree-node_content label': {
            //       backgroundColor: '#FFF',
            //       color: 'rgba(12, 18, 52, 1)',
            //       borderTop: '1px solid rgb(221,220,228)',
            //       borderLeft: '1px solid rgb(221,220,228)',
            //       borderBottom: '1px solid rgb(221,220,228)',
            //     },
            //     '&.menu-title': {
            //       lineHeight: '10px',
            //       $nest: {
            //         '&:hover': {
            //           $nest: {
            //             '& > .i-tree-node_content label': {
            //               color: '#A2A9B9',
            //             },
            //           },
            //         },
            //         '& > .i-tree-node_content label': {
            //           color: '#A2A9B9',
            //           fontSize: '14px',
            //           fontWeight: 500,
            //           marginTop: '20px',
            //           textTransform: 'uppercase',
            //           cursor: 'auto',
            //           lineHeight: '25px',
            //         },
            //       },
            //     },
            //     '&:not(.custom-left)': {
            //       $nest: {
            //         '&:before': {
            //           content: 'none',
            //         },
            //         '&:last-of-type:before': {
            //           content: 'none',
            //         },
            //         '.i-tree-node_label:after': {
            //           content: 'none',
            //         },
            //       },
            //     },
            //   },
            // },
            // 'i-tree-node.level-0': {
            //   lineHeight: '10px',
            //   $nest: {
            //     '> .i-tree-node_content label': {
            //       color: 'rgba(92, 105, 117, 1)',
            //       fontSize: '15px',
            //       fontWeight: 400,
            //       lineHeight: '25px',
            //       transition: 'color .3s',
            //       $nest: {
            //         '&:hover': {
            //           color: 'rgba(12, 18, 52, 1)',
            //           background: 'rgb(236, 239, 241)',
            //         },
            //       },
            //     },
            //   },
            // },
            // 'i-tree-node.level-1': {
            //   lineHeight: '10px',
            //   $nest: {
            //     '> .i-tree-node_content label': {
            //       color: 'rgba(136, 153, 168, 1)',
            //       fontSize: '14px',
            //       fontWeight: 400,
            //       transition: 'color .3s',
            //       lineHeight: '25px',
            //       $nest: {
            //         '&:hover': {
            //           color: '#55f',
            //         },
            //       },
            //     },
            //   },
            // },
            // 'i-tree-node.level-2': {
            //   lineHeight: '10px',
            //   $nest: {
            //     '> .i-tree-node_content label': {
            //       color: 'rgba(136, 153, 168, 1)',
            //       fontSize: '14px',
            //       fontWeight: 400,
            //       transition: 'color .3s',
            //       lineHeight: '25px',
            //     },
            //   },
            // },
        },
    });
});
define("@scbook/components/navigator.tsx", ["require", "exports", "@ijstech/components", "@scbook/components/navigator.css.ts"], function (require, exports, components_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DocsNavigator = void 0;
    const Theme = components_6.Styles.Theme.ThemeVars;
    const slugify = (str) => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };
    let DocsNavigator = class DocsNavigator extends components_6.Module {
        constructor(parent, options) {
            // super(parent, options);
            super();
            this.isNavOpened = true;
        }
        get treeData() {
            return this._treeData;
        }
        set treeData(value) {
            this._treeData = value;
            if (this._treeData) {
                this.renderTree();
            }
        }
        handleActive(parent, prevNode) {
            var _a;
            // const url: string = parent.activeItem?.order || '';
            this._currentNode = parent.activeItem;
            const url = (_a = parent.activeItem) === null || _a === void 0 ? void 0 : _a.tag.slug;
            this.updatePath(url);
        }
        updatePath(slug) {
            if (slug) {
                window.history.pushState(slug, 'Title', `/${slug.toLowerCase() === 'readme' ? '' : slug}`);
                window.dispatchEvent(new Event('popstate'));
            }
        }
        toggleNav(isNavOpened) {
            const navElm = document.querySelector('i-docs-navigator');
            this.isNavOpened = isNavOpened;
            if (navElm) {
                this.isNavOpened ? navElm.classList.remove('hide') : navElm.classList.add('hide');
            }
        }
        // renderTreeNode(node: any, level: number = 0) {
        //     const emojiRegex =
        //         /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
        //     let treeNode = this.createElement('i-tree-view-node') as TreeNode;
        //     treeNode.setAttribute('caption', node.title);
        //     treeNode.setAttribute('useIcon', 'false');
        //     if (node.slug) treeNode.setAttribute('slug', node.slug);
        //     if (node.file || node.children) {
        //         treeNode.onClick = this.activeNode;
        //         treeNode.classList.add(`level-${level}`);
        //     } else {
        //         treeNode.classList.add('menu-title');
        //     }
        //     if (node.children) {
        //         treeNode.setAttribute('useIconRight', 'true');
        //         treeNode.setAttribute('collapsible', 'true');
        //         treeNode.setAttribute('expanded', 'true');
        //         node.children.map((child: any) => {
        //             let childNode = this.renderTreeNode(child, level + 1);
        //             treeNode.appendChild(childNode);
        //         });
        //     }
        //     // setTimeout(function () {
        //     //     if (treeNode.children && treeNode.children.length > 0) {
        //     //         treeNode.children[0].innerHTML = treeNode.children[0].innerHTML.replace(
        //     //             emojiRegex,
        //     //             (string: string) => {
        //     //                 console.log('----------', string);
        //     //                 return `${string} `;
        //     //             }
        //     //         );
        //     //     }
        //     // }, 10);
        //     return treeNode;
        // }
        async renderTree() {
            if (this.treeData) {
                this.treeView.data = this.treeData;
            }
        }
        async init() {
            super.init();
        }
        render() {
            this.style.width = '280px';
            this.style.height = 'calc(100vh - 70px)';
            // this.style.backgroundColor = Theme.colors.primary.light
            return (this.$render("i-panel", null,
                this.$render("i-panel", { class: "navigator" },
                    this.$render("i-panel", { id: "tree-view-menu" },
                        this.$render("i-tree-view", { id: "treeView", data: [], onActiveChange: this.handleActive })))));
        }
        get currentNode() {
            return this._currentNode;
        }
    };
    DocsNavigator = __decorate([
        components_6.customElements('i-docs-navigator')
    ], DocsNavigator);
    exports.DocsNavigator = DocsNavigator;
});
define("@scbook/components/paging.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_7.Styles.Theme.ThemeVars;
    components_7.Styles.cssRule('i-paging', {
        $nest: {
            '.btnPaging': {
                display: 'inline-block',
                boxShadow: '0px 1px 2px rgb(0 0 0 / 12%)',
                border: '1px solid #EEE',
                padding: '16px',
                cursor: 'pointer',
                $nest: {
                    '&.hidden': {
                        display: 'none',
                    },
                    'i-label': {
                        display: 'block',
                        lineHeight: '25px',
                    },
                    '&.prev': {
                        width: '48%',
                        marginRight: '8px',
                        $nest: {
                            'i-icon': {
                                float: 'left',
                            },
                            'i-panel.pager-content': {
                                float: 'right',
                                $nest: {
                                    'i-label': {
                                        textAlign: 'right',
                                    },
                                },
                            },
                            '@media (max-width: 700px)': {
                                width: '100%',
                            },
                        },
                    },
                    '&.next': {
                        width: '48%',
                        marginLeft: '8px',
                        $nest: {
                            'i-icon': {
                                float: 'right',
                            },
                            'i-panel.pager-content': {
                                float: 'left',
                                $nest: {
                                    'i-label': {
                                        textAlign: 'left',
                                    },
                                },
                            },
                            '@media (max-width: 700px)': {
                                width: '100%',
                                marginLeft: '0',
                            },
                        },
                    },
                    '&.prev-full': {
                        width: '100%',
                        $nest: {
                            'i-icon': {
                                float: 'left',
                            },
                            'i-panel.pager-content': {
                                float: 'right',
                                $nest: {
                                    'i-label': {
                                        textAlign: 'right',
                                    },
                                },
                            },
                        },
                    },
                    '&.next-full': {
                        width: '100%',
                        $nest: {
                            'i-icon': {
                                float: 'right',
                            },
                            'i-panel.pager-content': {
                                float: 'left',
                                $nest: {
                                    'i-label': {
                                        textAlign: 'left',
                                    },
                                },
                            },
                        },
                    },
                    'i-icon': {
                        height: '20px',
                        width: '20px',
                        marginTop: '15px',
                    },
                    '.pager-content': {
                        clear: 'none',
                        maxWidth: '90%',
                        $nest: {
                            '.pager-title1 div': {
                                fontSize: '12px',
                                fontWeight: '400',
                                color: '#8899A8',
                            },
                            '.pager-title2': {
                                whiteSpace: 'nowrap',
                                $nest: {
                                    div: {
                                        fontSize: '20px',
                                        fontWeight: '500',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: 'block',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    });
});
define("@scbook/components/paging.tsx", ["require", "exports", "@ijstech/components", "@scbook/components/paging.css.ts"], function (require, exports, components_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DocsPaging = void 0;
    const Theme = components_8.Styles.Theme.ThemeVars;
    let DocsPaging = class DocsPaging extends components_8.Module {
        set flatTree(value) {
            this._flatTree = value;
            if (!this._currentNode && value && value.length > 0) {
                this._currentNode = value[0];
            }
            this.updatePager();
        }
        get flatTree() {
            return this._flatTree;
        }
        set currentNode(value) {
            this._currentNode = value;
            this.updatePager();
        }
        get currentNode() {
            return this._currentNode;
        }
        updatePager() {
            let prevNodeIndex = -1, nextNodeIndex = -1;
            if (this._flatTree) {
                this._flatTree.forEach((value, index) => {
                    if (value.slug == this._currentNode.slug) {
                        let prevValid = false, nextValid = false;
                        prevNodeIndex = index - 1;
                        nextNodeIndex = index + 1;
                        while (!prevValid && this.flatTree[prevNodeIndex]) {
                            if (this.flatTree[prevNodeIndex].file)
                                prevValid = true;
                            else
                                prevNodeIndex--;
                        }
                        while (!nextValid && this.flatTree[nextNodeIndex]) {
                            if (this.flatTree[nextNodeIndex].file)
                                nextValid = true;
                            else
                                nextNodeIndex++;
                        }
                    }
                });
            }
            if (prevNodeIndex >= 0 && nextNodeIndex >= 0 && nextNodeIndex < this._flatTree.length) {
                this.prevPage.classList.remove('prev-full', 'hidden');
                this.prevPage.classList.add('prev');
                this.nextPage.classList.remove('next-full', 'hidden');
                this.nextPage.classList.add('next');
                this.prevPage.hidden = false;
                this.nextPage.hidden = false;
                this.labelPrev.caption = this._flatTree[prevNodeIndex] && this._flatTree[prevNodeIndex].caption || '';
                this.labelNext.caption = this._flatTree[nextNodeIndex] && this._flatTree[nextNodeIndex].caption;
            }
            else if (prevNodeIndex >= 0 && (nextNodeIndex == -1 || nextNodeIndex >= this._flatTree.length)) {
                this.nextPage.classList.add('hidden');
                this.prevPage.classList.remove('prev', 'hidden');
                this.prevPage.classList.add('prev-full');
                this.labelPrev.caption = this._flatTree[prevNodeIndex].caption;
            }
            else if (prevNodeIndex == -1 && nextNodeIndex >= 0) {
                this.prevPage.classList.add('hidden');
                this.nextPage.classList.remove('next', 'hidden');
                this.nextPage.classList.add('next-full');
                this.labelNext.caption = this._flatTree[nextNodeIndex].caption;
            }
        }
        nextPageOnClick() {
            let nextNodeIndex = -1;
            if (this._flatTree && this.currentNode) {
                this._flatTree.forEach((value, index) => {
                    if (value.slug == this._currentNode.slug) {
                        let valid = false;
                        nextNodeIndex = index + 1;
                        while (!valid) {
                            if (this.flatTree[nextNodeIndex].file)
                                valid = true;
                            else
                                nextNodeIndex++;
                        }
                    }
                });
            }
            const node = this.flatTree[nextNodeIndex];
            this.updatePath(node.slug.toLowerCase() === 'readme' ? '' : node.slug);
            this.scrollToTop();
        }
        prevPageOnClick() {
            let prevNodeIndex = -1;
            if (this._flatTree && this.currentNode) {
                this._flatTree.forEach((value, index) => {
                    if (value.slug == this._currentNode.slug) {
                        let valid = false;
                        prevNodeIndex = index - 1;
                        while (!valid) {
                            if (this.flatTree[prevNodeIndex].file)
                                valid = true;
                            else
                                prevNodeIndex--;
                        }
                    }
                });
            }
            const node = this.flatTree[prevNodeIndex];
            this.updatePath(node.slug.toLowerCase() === 'readme' ? '' : node.slug);
            this.scrollToTop();
        }
        scrollToTop() {
            window.scrollTo(0, 0);
        }
        updatePath(slug) {
            window.history.pushState(slug, 'Title', `/${slug}`);
            window.dispatchEvent(new Event('popstate'));
        }
        render() {
            return (this.$render("i-panel", { class: "paging" },
                this.$render("i-panel", { id: 'prevPage', class: 'btnPaging prev hidden', onClick: this.prevPageOnClick },
                    this.$render("i-icon", { name: 'arrow-left' }),
                    this.$render("i-panel", { class: 'pager-content' },
                        this.$render("i-label", { caption: 'Previous', class: 'pager-title1' }),
                        this.$render("i-label", { id: 'labelPrev', class: 'pager-title2' }))),
                this.$render("i-panel", { id: 'nextPage', class: 'btnPaging next hidden', onClick: this.nextPageOnClick },
                    this.$render("i-icon", { name: 'arrow-right' }),
                    this.$render("i-panel", { class: 'pager-content' },
                        this.$render("i-label", { caption: 'Next', class: 'pager-title1' }),
                        this.$render("i-label", { id: 'labelNext', class: 'pager-title2' })))));
        }
    };
    DocsPaging = __decorate([
        components_8.customElements('i-paging')
    ], DocsPaging);
    exports.DocsPaging = DocsPaging;
});
define("@scbook/components", ["require", "exports", "@scbook/components/header.tsx", "@scbook/components/navigator.tsx", "@scbook/components/paging.tsx", "@scbook/components/search.tsx"], function (require, exports, header_1, navigator_1, paging_1, search_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Search = exports.DocsPaging = exports.DocsNavigator = exports.DocsHeader = void 0;
    Object.defineProperty(exports, "DocsHeader", { enumerable: true, get: function () { return header_1.DocsHeader; } });
    Object.defineProperty(exports, "DocsNavigator", { enumerable: true, get: function () { return navigator_1.DocsNavigator; } });
    Object.defineProperty(exports, "DocsPaging", { enumerable: true, get: function () { return paging_1.DocsPaging; } });
    Object.defineProperty(exports, "Search", { enumerable: true, get: function () { return search_2.Search; } });
});
