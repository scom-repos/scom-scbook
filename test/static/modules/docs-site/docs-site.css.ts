import { Styles } from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule("i-docs-site", {
  display: "block",
  backgroundColor: Theme.docs.background,

  $nest: {
    "#tree-view-menu > i-tree-view > i-tree-view-node": {
      padding: "0 0 1em 0",
    },

    ".docs-module": {
      display: "block",
    },

    ".docs-wrapper": {
      paddingTop: "56px",
      minHeight: "calc(100vh - 56px)",
    },

    ".docs-container": {
      display: "flex",
      flexGrow: 1,
      flexFlow: "row nowrap",
      maxWidth: "1400px",
      width: "100%",
      padding: "0 32px",
      margin: "0 auto",
    },

    ".icon": {
      position: "fixed",
      display: "inline-block",
      width: "20px",
      height: "20px",
      margin: "15px",
      // zIndex: 10000,
    },

    ".content": {
      display: "flex",
      flex: 1,
      padding: "28px 40px 48px 40px",
      overflow: "hidden",
      overflowY: "auto",

      $nest: {
        "i-markdown div > h1:first-child": {
          // fontSize: "34px",
          // fontWeight: 900,
          // letterSpacing: "-2px",
          marginTop: 0,
        },
      },
    },

    ".anchor": {
      display: "block",
      position: "relative",
      top: "-100px",
    },

    ".right-nav": {
      position: "sticky",
      top: "90px",
      display: "block",
      alignSelf: "flex-start",
      flex: "0 0 240px",
      maxHeight: "calc(100vh - 90px)",
      overflowY: "auto",
      marginRight: 0,
      marginBottom: "40px",
      paddingTop: "10px",
      borderLeft: "1px solid #e0e0e0",
    },

    img: {
      maxWidth: "100%",
    },
  },
});
