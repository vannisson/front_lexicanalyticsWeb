import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  header: { margin: 0, display: "flex", justifyContent: "center" },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    margin: 0,
    width: "60vw",
  },
  logoGroup: {
    gap: "0.5rem",
  },
  logoText: { fontWeight: 700, fontSize: "1.5rem", color: "#565656" },
  img: {
    width: "3rem",
  },
  links: {},
  button: {
    color: "#565656",
    ":hover": {
      color: "#228BE6",
    },
  },
  userGroup: {},
  userButton: {
    color: "#565656",
    ":hover": {
      color: "#228BE6",
    },
  },
  userText: {
    gap: "0.5rem",
  },
}));

export default useStyles;
