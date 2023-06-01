import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  stack: {},
  searchBox: {
    display: "flex",
    justifyContent: "center",
  },
  searchGroup: {
    width: "60%",
    justifyContent: "space-between",
    color: "#565656",
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
  buttonGroup: {
    gap: "0.2rem",
  },
  button: {
    background:
      "linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)",
    border: "0px",
  },
}));

export default useStyles;
