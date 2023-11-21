import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    textAlign: "initial",
    fontWeight: 700,
    fontSize: "2rem",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "90vh",
    padding: "0",
    gap: "2rem",
    maxHeight:"90vh",
    overflow:"auto",
  },
  buttonText: {
    gap: "0.5rem",
  },
  button: {
    background:
      "linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)",
    border: "0px",
  },
  graph: {},
}));

export default useStyles;