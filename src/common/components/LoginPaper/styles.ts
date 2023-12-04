import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  box: {
    maxWidth: "50%",
    padding: "0 5%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    display: "flex",
  },
  paper: {
    //backgroundColor: "#202024",
    color: "#FFFF",
    border: "1.5px solid #C6C6C6",
    boxShadow: "5px 8px 4px 3px rgba(0, 0, 0, 0.25)",
    width: "32rem",
    borderRadius: "15px",
    padding: "2rem",
  },
  stack: {},
  textStack: {
    gap: "0",
  },
  title: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: "3rem",
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: "1rem",
  },
  form: {
    gap: "1rem",
    flexDirection: "column",
    display: "flex",
  },
  button: {
    width: "100%",
    borderRadius: "21px",
    marginTop: "1rem",
  },
  input: {
    ".mantine-InputWrapper-label": {
      background:
        "linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
  group: {
    justifyContent: "space-between",
    padding: "0 1rem",
  },
}));

export default useStyles;
