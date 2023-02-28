import { customElements, Module, TreeViewNode } from "@ijstech/components";
import { DocsHeader } from "./header/header";
import { DocsNavigation } from "./navigation/navigation";
import "./docs-site.css";

const defaultHash = "#overview";

const slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

@customElements("i-docs-site")
export class DocsSite extends Module {
  private docsHeader: DocsHeader;
  private docsNavigation: DocsNavigation;
  private treeData: any;
  private flatTree: Array<any>;
  private rightNavAnchors: Array<string> = [];
  private hash: string = defaultHash;
  private isNavOpened = true;

  toggleNav() {
    this.isNavOpened = !this.isNavOpened;
    this.docsNavigation.toggleNav(this.isNavOpened);
  }

  flattenTree(tree: Array<any>) {
    return tree.reduce((acc, cur) => {
      cur.slug = slugify(cur.title);
      if (cur.children) {
        const temp = cur.children;
        Reflect.deleteProperty(cur, "children");
        acc.push(cur);
        acc.push(this.flattenTree(temp));
      } else {
        acc.push(cur);
      }
      return acc.flat();
    }, []);
  }

  async loadTree() {
    const request = new Request("./menu.json");
    const response = await fetch(request);
    if (!response.ok) return null;
    return response.json();
  }

  async onLoad() {
    this.treeData = await this.loadTree();
    this.docsNavigation.treeData = this.treeData;
    this.flatTree = this.flattenTree(this.treeData);
    this.docsHeader.menu = this.flatTree;
    this.renderRightNav();
  }

  renderRightNav() {
    let toc = "";
    let level = 0;
    this.rightNavAnchors = [];
    const content = document.querySelector(".docs-container .content");
    if (content) {
      content.innerHTML = content.innerHTML.replace(
        /<h([\d])(.*)>([^<]+)<\/h([\d])>/gi,
        (str, openLevel, temp, titleText, closeLevel) => {
          if (openLevel != closeLevel) {
            return str;
          }

          if (openLevel > level) {
            toc += new Array(openLevel - level + 1).join("<i-tree-view>");
          } else if (openLevel < level) {
            toc += new Array(level - openLevel + 1).join("</i-tree-view>");
          }

          level = parseInt(openLevel);

          const anchor = titleText.replace(/\W/g, "_");
          this.rightNavAnchors.push(anchor);
          toc += `<i-tree-view-node id='${anchor}' caption='${titleText}' useIcon="false"></i-tree-view-node>`;

          return `<h${openLevel}><a class="anchor" aria-hidden="true" id="${anchor}"></a>${titleText}</h${closeLevel}>`;
        }
      );
    }

    if (level) {
      toc += new Array(level + 1).join("</i-tree-view>");
    }

    const right = document.querySelector(".right-nav");
    if (right) right.innerHTML = toc;

    const treeNodes = Array.from(document.querySelectorAll(".right-nav i-tree-view-node")) as TreeViewNode[];
    treeNodes.forEach((treeNode) => (treeNode.onClick = this.activeNode));

    this.activeRightNodeOnScroll();
  }

  renderContent() {
    const contentElm = document.querySelector("i-docs-site i-panel.content") as HTMLElement;

    if (!contentElm) return;
    const node = this.flatTree.find((node) => node.slug === this.hash);
    if (node.file) {
      contentElm.innerHTML = `<i-markdown src="./markdown/${node.file}"></i-markdown>`;
    } else {
      contentElm.innerHTML = `<i-panel><i-label caption="This section not have the content yet."></i-label></i-panel>`;
    }
  }

  activeNode(target: any, event?: Event) {
    const treeNodes = Array.from(document.querySelectorAll(".right-nav i-tree-view-node")) as TreeViewNode[];
    treeNodes.forEach((treeNode) => (treeNode.active = false));
    const treeViewNode = target as TreeViewNode;
    treeViewNode.active = true;

    if (event?.type === "click")
      document.querySelector(`#${treeViewNode.id}`)?.scrollIntoView({
        behavior: "smooth",
      });
  }

  activeRightNodeOnScroll() {
    const passedAnchor = this.rightNavAnchors.reduce((acc: any, id: any) => {
      const elementTarget = document.getElementById(id);
      if (elementTarget)
        if (window.scrollY > elementTarget.offsetTop + elementTarget.offsetHeight) {
          acc.push(id);
        }
      return acc;
    }, []);

    const treeNode = document.querySelector(`.right-nav #${passedAnchor[passedAnchor.length - 1]}`);
    if (treeNode) this.activeNode(treeNode);
  }

  render() {
    // window.location.hash = defaultHash;

    window.onload = this.onLoad;

    window.addEventListener("hashchange", () => {
      this.hash = decodeURI(window.location.hash).replace("#", "") || defaultHash;
      this.renderContent();
      setTimeout(() => {
        this.renderRightNav();
      }, 200);
    });

    window.addEventListener("scroll", () => {
      this.activeRightNodeOnScroll();
    });

    return (
      <i-module class="docs-module" height="auto" width="100%">
        <i-docs-header id="docsHeader"></i-docs-header>
        <i-icon name="bars" fill="#55f" class="icon" onClick={this.toggleNav}></i-icon>
        <i-panel class="docs-wrapper">
          <i-panel class="docs-container">
            <i-docs-navigation id="docsNavigation"></i-docs-navigation>
            <i-panel class="content">
              <i-markdown src="./markdown/README.md"></i-markdown>
            </i-panel>
            <i-panel class="right-nav"></i-panel>
          </i-panel>
        </i-panel>
      </i-module>
    );
  }
}
