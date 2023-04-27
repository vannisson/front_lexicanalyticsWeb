import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  stack: {
    maxWidth: "50%",
    padding: "0 5%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  img: {
    width: "9.75rem",
    height: "8.6875rem",
  },
  title: {
    alignItems: "center",
    fontWeight: 700,
    fontSize: "3rem",
  },
  text: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "1rem",
    color: "#A4A4A4",
    paddingBottom: "1rem",
  },
  button: {
    width: "12rem",
    height: "3rem",
    borderRadius: "10px",
  },
}));

export default useStyles;
