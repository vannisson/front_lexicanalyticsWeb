import {
  AppShell,
  Navbar,
  Header,
  Group,
  Text,
  Anchor,
  Stack,
  Button,
  Container,
  rem,
  Box,
  Menu,
} from "@mantine/core";
import useStyles from "./styles";
import logo from "../../../assets/logo.svg";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ICustomAppShell {
  children: JSX.Element;
}

const HEADER_HEIGHT = rem(60);

export default function CustomHeader({ children }: ICustomAppShell) {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding="md"
      header={
        <Header className={classes.header} height={HEADER_HEIGHT}>
          <Box className={classes.container}>
            <Group className={classes.logoGroup}>
              <img src={logo} className={classes.img}></img>
              <Text
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                className={classes.logoText}
              >
                Lexicanalytics
              </Text>
            </Group>
            <Group className={classes.links}>
              <Button className={classes.button} variant="subtle">
                Coleções
              </Button>
              <Button className={classes.button} variant="subtle">
                Relatórios
              </Button>
              <Button className={classes.button} variant="subtle">
                Configurações
              </Button>
            </Group>
            <Group className={classes.userGroup}>
              <Menu opened={opened} onChange={setOpened}>
                <Menu.Target>
                  <Button variant="subtle" className={classes.userButton}>
                    <Group className={classes.userText}>
                      <Icon icon="iconamoon:profile-circle-fill" />
                      <Text>Olá, Elian</Text>
                    </Group>
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    icon={
                      <Icon icon="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right" />
                    }
                  >
                    Sair
                  </Menu.Item>

                  {/* Other items ... */}
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Box>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}