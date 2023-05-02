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
    color: "#565656",
    lineHeight: "1.2",
  },
  text: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "1rem",
    color: "#565656",
    paddingBottom: "1rem",
  },
  button: {
    width: "12rem",
    height: "3rem",
    borderRadius: "10px",
  },
}));

export default useStyles;
