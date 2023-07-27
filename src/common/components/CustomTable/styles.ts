import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  boxTable: {
    width: "60%",
    borderRadius: "0.25rem",
    overflow: "hidden",
  },
  // table: {
  //   color: "#565656",
  //   width: "100%",
  //   borderCollapse: "collapse",
  //   borderRadius: "16px",
  //   border: "1px",
  //   thead: {
  //     background:
  //       "linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)",
  //     tr: {
  //       th: { color: "#FFFFFF" },
  //     },
  //   },
  // },

  table: {
    width: "100%",
    maxHeight: "75vh",
    color: "#565656",
    borderCollapse: "collapse",
    borderRadius: "16px",
    thead: {
      textAlign: "left",
      position: "sticky",
      top: 0,
      background:
        "linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)",
      height: "3rem",
      tr: {
        th: { color: "#FFFFFF", paddingLeft: "1rem" },
      },
    },
    tbody: {
      tr: {
        td: {
          color: "#545454",
          fontWeight: 700,
          height: "3rem",
          paddingLeft: "1rem",
        },
        ":nth-of-type(even)": {
          background: "rgba(28, 113, 255, 0.08)",
        },
      },
    },
  },
  anchor: {
    color: "#565656",
    ":hover": {
      textDecoration: "none",
    },
  },
  icons: {
    color: "red",
  },
  tableContainer: {
    borderRadius: "10px",
    overflowY: "scroll",
    // boxShadow: ' 0px 0px 2px 0px rgba(0,0,0,0.75)',
    maxHeight: "80vh",
    height: "75vh",
    "::-webkit-scrollbar": {
      width: "5px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#1C71FF",
      borderRadius: "30px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#1C71FF",
    },
  },
}));

export default useStyles;
