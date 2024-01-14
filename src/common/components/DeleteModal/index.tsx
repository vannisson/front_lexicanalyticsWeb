import { Button, Text, Stack, Group, Box} from '@mantine/core';
import { Icon } from '@iconify/react'
import useStyles from './style'

interface DeleteModalProps {
    onClose: () => void
  }
export default function DeleteModal({ onClose }: DeleteModalProps) {
  const { classes } = useStyles();
  return (
     <>
    <Stack className={classes.stack} align='center'>
        <Text
         className={classes.text}>
        Você tem certeza de que deseja deletar a coleção?
        </Text>
       
        <Icon className={classes.warningIcon} icon="ph:warning-bold" />

    <Group position="center">
        <Button 
        className={classes.button}
                variant="delete"
                //onClick={onDelete}
          >
           Deletar
          </Button>
         
          <Button
          className={classes.cancel}
            variant="cancel"
            onClick={onClose}
          >
           Cancelar
          </Button>
    </Group>
    </Stack>
     </>
  )
}