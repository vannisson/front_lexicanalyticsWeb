import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  stack: {},
  searchBox: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  searchGroup: {
    width: "60%",
    justifyContent: "space-between",
    color: "#565656",
  },
  anchor: {
    color: "#565656",
    ":hover": {
      textDecoration: "none",
    },
  },
  title: {
    textAlign: "initial",
    fontWeight: 700,
    fontSize: "2rem",
    padding: "0 20%",
  },
  tableBox: {
    display: "flex",
    justifyContent: "center",
  },
  newCollection: {
    gap: "0.1rem",
  },
}));

export default useStyles;
