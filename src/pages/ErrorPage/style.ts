import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: theme.colors.gray[0],
  },
  errorCode: {
    fontSize: "5rem",
    color: "rgb(78, 178, 240)",
  },
  message: {
    fontSize: "1.5rem",
    color: theme.colors.dark[6],
  },
  button: {
    background:
    "linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)",
    border: "0px",
    width: "10%",
    marginTop: "1.2rem",
  },
}));

export default useStyles;
