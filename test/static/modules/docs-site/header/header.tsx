import {
  Control,
  ControlElement,
  customElements,
  Module,
  Search,
  Styles,
  Switch,
  LibPath,
  RequireJS,
} from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;
import "./header.css";

export interface DocsHeaderElement extends ControlElement {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["i-docs-header"]: DocsHeaderElement;
    }
  }
}

const moonIcon =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="%23fff" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>';
const sunIcon =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="%23fff" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>';

@customElements("i-docs-header")
export class DocsHeader extends Module {
  private searchBar: Search;
  private btnChangeTheme: Switch;
  private _menu: any[];

  get menu() {
    return this._menu;
  }

  set menu(value: any[]) {
    this._menu = value;
    if (this._menu && this._menu.length) {
      RequireJS.require([`${LibPath}lib/marked/marked.umd.js`], async (marked: any) => {
        const acc: any[] = [];
        for (const item of this._menu) {
          if (item.file) {
            const markdown = await this.loadMarkdown(`./markdown/${item.file}`);
            const htmlText: string = marked.parse(markdown);

            /**
             * <h[\d].*?> : detect the open tag
             * ([^<]+) : group and catch the subTitle
             * <\/h[\d]> : detect the close tag
             * ([\s\S]*?) : group and catch the paragraph ungreedy
             * (?=(?:<h[\d].*?>|$)) : detect the end point of paragraph
             */
            htmlText.replace(
              /<h[\d].*?>([^<]+)<\/h[\d]>([\s\S]*?)(?=(?:<h[\d].*?>|$))/gi,
              (str, subTitle, paragraph) => {
                let cloneItem = Object.assign({}, item);
                cloneItem.subTitle = subTitle;
                const paraDom = document.createElement("div");
                paraDom.innerHTML = paragraph;
                cloneItem.paragraph = paraDom.innerText.replace(/\n/g, "");
                if (cloneItem.subTitle && cloneItem.paragraph) acc.push(cloneItem);
                return str;
              }
            );
          }
        }
        let keys: string[] = [];
        if (acc && acc.length > 0) keys = Object.keys(acc[0]);
        this.searchBar.buildIndex(acc, ["subTitle", "paragraph"], keys);
        const result = this.searchBar.search("in your");
        // console.log(result);
        // this.searchBar.searchData = acc;
      });
    }
  }

  private async loadMarkdown(src: string): Promise<string> {
    const mdRequest = new Request(src, { headers: new Headers({ accept: "application/vnd.github.v3.raw" }) });
    const response = await fetch(mdRequest);
    if (!response.ok) return "# There was error with your response, please check the details and try again";
    return response.text();
  }

  btnChangeThemeClick(target: Control, event: Event) {
    if (this.btnChangeTheme.data == 1) {
      this.btnChangeTheme.data = 0;
      Styles.Theme.applyTheme(Styles.Theme.defaultTheme);
    } else {
      this.btnChangeTheme.data = 1;
      Styles.Theme.applyTheme(Styles.Theme.darkTheme);
    }
  }

  render() {
    this.style.width = "100%";
    this.style.height = "auto";

    return (
      <i-panel class="header">
        <i-panel class="container">
          <i-label caption="IJS SC Compute" class="heading"></i-label>
          <i-panel class="search">
            <i-search id="searchBar"></i-search>
            <i-switch
              id="btnChangeTheme"
              checkedThumbColor="#fff"
              uncheckedThumbColor="#fff"
              checkedThumbIcon={moonIcon}
              uncheckedThumbIcon={sunIcon}
              checkedTrackColor="#070707"
              uncheckedTrackColor="#c5c5c5"
              onClick={this.btnChangeThemeClick}
            ></i-switch>
          </i-panel>
        </i-panel>
      </i-panel>
    );
  }
}
