import { Styles } from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule("i-docs-header", {
  display: "block",

  $nest: {
    "& > .header": {
      position: "fixed",
      flexShrink: 0,
      width: "100%",
      height: "3.5rem",
      minHeight: "50px",
      padding: "8px 0",
      borderBottom: "1px solid #ebeff3",
      zIndex: 9999,
      transform: "translateZ(0)",
      backgroundColor: Theme.docs.background,
    },

    ".container": {
      display: "flex",
      alignItems: "center",
      flexFlow: "row nowrap",
      position: "relative",
      textAlign: "left",
      maxWidth: "1400px",
      height: "100%",
      padding: "0 32px",
      margin: "0 auto",
    },

    ".heading": {
      $nest: {
        div: {
          fontSize: "18px",
          fontWeight: 800,
        },
      },
    },

    "i-panel.search": {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
    },

    "i-search": {
      marginRight: "6px",
    },
  },
});
