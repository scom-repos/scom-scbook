import { Styles } from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;

Styles.cssRule("i-docs-navigation", {
  display: "block",
  flex: "0 0 280px",
  position: "sticky",
  top: "50px",
  borderRight: "1px solid #ececec",
  overflowY: "auto",

  $nest: {
    "&::-webkit-scrollbar": {
      width: "8px",
    },

    "&::-webkit-scrollbar-track": {
      background: "transparent" /* color of the tracking area */,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#7f7f7f" /* color of the scroll thumb */, // #a8a8a8
      borderRadius: "10px" /* roundness of the scroll thumb */,
    },

    "&.hide": {
      maxWidth: 0,
      opacity: 0,
      visibility: "hidden",
    },

    ".navigation": {
      padding: "40px 8px 40px 0",
    },

    "i-tree-view-node.level-0": {
      $nest: {
        "> label": {
          color: Theme.docs.text0,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "1em",
          marginTop: "6px",
          marginBottom: 0,
          transition: "color .3s",
        },
      },
    },

    "i-tree-view-node.level-1": {
      $nest: {
        "> label": {
          color: Theme.docs.text1,
          fontSize: "14px",
          transition: "color .3s",
        },
      },
    },
  },
});
