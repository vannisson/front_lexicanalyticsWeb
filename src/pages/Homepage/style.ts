import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    height: "11%",
    width: "100%",
  },
}));

export default useStyles;
