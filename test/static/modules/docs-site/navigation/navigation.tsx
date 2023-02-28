import { ControlElement } from "@ijstech/base/index";
import { Control, customElements, Module, Styles, Switch, TreeView, TreeViewNode } from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;
import "./navigation.css";

export interface DocsNavigationElement extends ControlElement {
  onClose?: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["i-docs-navigation"]: DocsNavigationElement;
    }
  }
}

const slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

@customElements("i-docs-navigation")
export class DocsNavigation extends Module {
  private treeElm: HTMLElement;
  private _treeData: any;
  private isNavOpened = true;

  constructor() {
    super();
    this.activeNode = this.activeNode.bind(this);
  }

  get treeData() {
    return this._treeData;
  }

  set treeData(value: any) {
    this._treeData = value;
    if (this._treeData) {
      this.renderTree();
    }
  }

  activeNode(target: any, event: Event) {
    const treeNodes = Array.from(document.querySelectorAll("i-tree-view-node")) as TreeViewNode[];
    treeNodes.forEach((treeNode) => (treeNode.active = false));
    const treeViewNode = target as TreeViewNode;
    treeViewNode.active = true;
    window.location.hash = slugify(`${target.caption}`);
  }

  toggleNav(isNavOpened: boolean) {
    const navElm = document.querySelector("i-docs-navigation") as HTMLElement;
    this.isNavOpened = isNavOpened;
    if (navElm) {
      this.isNavOpened ? navElm.classList.remove("hide") : navElm.classList.add("hide");
    }
  }

  renderTreeNode(node: any, level: number = 0) {
    let treeNode = this.createElement("i-tree-view-node") as TreeViewNode;
    treeNode.setAttribute("id", node.id);
    treeNode.setAttribute("caption", node.title);
    treeNode.setAttribute("useIcon", "false");
    treeNode.classList.add(`level-${level}`);
    if (node.id === "1") treeNode.setAttribute("active", "true");
    if (node.file) treeNode.onClick = this.activeNode;

    if (level === 0) {
      treeNode.setAttribute("collapsible", "false");
      treeNode.setAttribute("expanded", "true");
    } else {
      if (node.children) {
        treeNode.setAttribute("useIconRight", "true");
      }
    }

    if (node.children) {
      node.children.map((child: any) => {
        let childNode = this.renderTreeNode(child, level + 1);
        treeNode.appendChild(childNode);
      });
    }
    return treeNode;
  }

  async renderTree() {
    if (this.treeData) {
      this.treeElm = this.createElement("i-tree-view");
      this.treeData.map((node: any, index: number) => {
        let treeNode = this.renderTreeNode(node);
        this.treeElm.appendChild(treeNode);
      });
      const treeMenu = document.querySelector("#tree-view-menu") as HTMLElement;
      treeMenu?.appendChild(this.treeElm);
    }
  }

  render() {
    this.style.width = "100%";
    this.style.height = "calc(100vh - 50px)";
    this.style.backgroundColor = Theme.colors.primary.light;

    return (
      <i-panel class="navigation">
        <i-panel id="tree-view-menu"></i-panel>
      </i-panel>
    );
  }
}
