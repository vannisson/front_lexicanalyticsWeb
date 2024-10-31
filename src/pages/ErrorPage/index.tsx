import React from 'react';
import { Text, Title, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import useStyles from './style';
import { Icon } from '@iconify/react';

interface ErrorPageProps {
  statusCode?: number;
  message?: string;
  text?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode = 404, message = "Volte e depois tente novamente", text = "Ocorreu algum problema na hora de carregar essa página" }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Icon icon="fluent:emoji-sad-slight-20-regular" width="140" height="140" color="rgb(78, 178, 240)"/>
      <Title order={1} className={classes.errorCode}>{statusCode}</Title>
      <Text size="lg" color="dimmed" className={classes.message}>{text}</Text>
      <Text size="lg" color="dimmed" className={classes.message}>{message}</Text>
      <Button component={Link} to="/" className={classes.button}>
        Voltar para a Página Inicial
      </Button>
    </div>
  );
};

export default ErrorPage;
