import { Box, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./style";
import LoginApresentation from "../../common/components/LoginApresentation";
import RegisterPaper from "../../common/components/RegisterPaper";

export default function Register() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Group className={classes.group}>
      <LoginApresentation />
      <RegisterPaper />
    </Group>
  );
}
