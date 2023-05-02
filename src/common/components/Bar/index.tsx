import { AppShell, Navbar, Header } from "@mantine/core";
import useStyles from "./styles";
import logo from "../../../assets/logo.svg";

export default function Bar(
  {
    // children
  }
) {
  const { classes } = useStyles();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {/* {children} */}
    </AppShell>
  );
}
