import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  boxTable: {
    width: "60%",
    borderRadius: "0.25rem",
    overflow: "hidden",
  },
  table: {
    color: "#565656",
    width: "100%",
    borderCollapse: "collapse",
    borderRadius: "16px",
    border: "1px",
    thead: {
      background:
        "linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)",
      tr: {
        th: { color: "#FFFFFF" },
      },
    },
  },
  anchor: {
    color: "#565656",
    ":hover": {
      textDecoration: "none",
    },
  },
  iconDelete: {
    color: "red",
  },
  iconReport: {
    color: "green"
  },
  iconView: {
    color: "blue"
  }
}));

export default useStyles;