import { Text } from "@mantine/core";
import useStyles from "./styles";

interface IErrorMessage {
  text: string;
}
export default function ErrorMessage({ text }: IErrorMessage) {
  const { classes } = useStyles();

  return <Text className={classes.text}>{text}</Text>;
}
