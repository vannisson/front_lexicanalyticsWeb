import { Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Logo from "../../common/components/Logo";
import useStyles from "./style";

export default function Homepage() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.container}>
      <header className={classes.header}>
        <div>menu</div>
      </header>
      <Logo />
      <div>form</div>
    </Box>
  );
}
