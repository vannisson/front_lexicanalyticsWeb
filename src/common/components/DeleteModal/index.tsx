import { Button, Text, Stack, Group, Box } from '@mantine/core'
import { Icon } from '@iconify/react'
import useStyles from './style'
import { useMutation, useQueryClient } from 'react-query'
import { deleteCollection } from '../CollectionTable/CollectionTable.service'

interface DeleteModalProps {
  onClose: () => void
  onDelete: (collectionId: string) => void
  collectionId: string
}
export default function DeleteModal({
  onClose,
  onDelete,
  collectionId,
}: DeleteModalProps) {
  const { classes } = useStyles()

  const handleDelete = () => {
    onDelete(collectionId)
  }

  return (
    <>
      <Stack className={classes.stack} align="center">
        <Text className={classes.text}>
          Você tem certeza de que deseja deletar a coleção?
        </Text>

        <Icon className={classes.warningIcon} icon="ph:warning-bold" />

        <Group position="center">
          <Button className={classes.button} onClick={() => handleDelete()}>
            Deletar
          </Button>

          <Button className={classes.cancel} onClick={onClose}>
            Cancelar
          </Button>
        </Group>
      </Stack>
    </>
  )
}
