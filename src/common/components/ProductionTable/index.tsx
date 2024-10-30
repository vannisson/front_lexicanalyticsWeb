import {
  Anchor,
  Box,
  Button,
  Group,
  Loader,
  Modal,
  Table,
  Tooltip,
} from '@mantine/core'
import useStyles from './styles'
import { Icon } from '@iconify/react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteCollection } from './ProductionTable.service'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import DeleteModal from '../DeleteModal'
import { useState } from 'react'
import { ProductionType } from '../../../pages/Production/Production.service'
interface ProductionProps {
  collectionData: ProductionType[]
}

export default function ProductionTable({ collectionData }: ProductionProps) {
  const { classes } = useStyles()
  const { mutate: deleteProductMutate } = useMutation(deleteCollection)
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null)
  const [opened, { open, close }] = useDisclosure(false)
  const queryClient = useQueryClient()

  const handleDelete = (productionId: string) => () => {
    setDeleteTargetId(productionId)
    open()
  }

  const handleConfirmDelete = (productionId: string) => {
    if (productionId) {
      deleteProductMutate(productionId?.trim() ?? '', {
        onSuccess(res) {
          queryClient.invalidateQueries(['getProductions'])
        },
        onError(error: any) {},
      })
    }
    close()
  }

  const rows = collectionData?.map((element, index) => (
    <tr key={index + 1}>
      <td>{index + 1}</td>
      <td> {element.title}</td>
      <td>
        <Group>
          <Tooltip label="Editar Texto" withArrow>
            <Button
              variant="subtle"
              className={classes.iconReport}
              //onClick={onDelete}
            >
              <Icon icon="bxs:edit" />
            </Button>
          </Tooltip>
          <Tooltip label="Deletar Texto" withArrow>
            <Button
              variant="subtle"
              className={classes.iconDelete}
              onClick={handleDelete(element.id)}
            >
              <Icon icon="material-symbols:delete-forever" />
            </Button>
          </Tooltip>
        </Group>
      </td>
    </tr>
  ))

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <DeleteModal
          onClose={close}
          onDelete={handleConfirmDelete}
          id={deleteTargetId ?? ''}
        />
      </Modal>
      <Box className={classes.boxTable}>
        <Table striped className={classes.table}>
          <thead>
            <tr>
              <th>Ordem</th>
              <th>Identificador</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Box>
    </>
  )
}
