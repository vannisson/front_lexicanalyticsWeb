import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  stack: {
    gap: "1.2rem",
  },
  title: {
    fontWeight: 700,
    fontSize: "1.5rem",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: "#C0C1C2",
  },
  form: {
    gap: "0.8rem",
    flexDirection: "column",
    display: "flex",
  },
  button: {
    background:
      "linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)",
    border: "0px",
    width: "10rem",
    marginTop: "1.2rem",
  },
  input: {
    ".mantine-InputWrapper-label": {
      background:
        "linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
  descriptionInput: {
    ".mantine-Textarea-input": {
      overflowY: "auto",
      "::-webkit-scrollbar": {
        color: "transparent",
      },
    },

    ".mantine-InputWrapper-label": {
      background:
        "linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
}));

export default useStyles;
