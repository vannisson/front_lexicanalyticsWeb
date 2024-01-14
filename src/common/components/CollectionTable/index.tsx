import {
  Anchor,
  Box,
  Button,
  Group,
  Loader,
  Table,
  Tooltip,
} from '@mantine/core'
import useStyles from './styles'
import { Icon } from '@iconify/react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { collectionTable, deleteCollection } from './CollectionTable.service'
import { useNavigate } from 'react-router-dom'

export default function CollectionTable() {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const { isLoading, data, error } = useQuery('collectionData', collectionTable)
  const { mutate: deleteProductMutate } = useMutation(deleteCollection)
  const queryClient = useQueryClient()

  const handleDelete = (collectionId: string) => () => {
    deleteProductMutate(collectionId?.trim() ?? '', {
      onSuccess(res) {
        queryClient.invalidateQueries(['collectionData'])
      },
      onError(error: any) {},
    })
  }

  const handleView = (collectionId: string) => () => {
    navigate(`/production/${collectionId}`)
  }

  console.log(data?.collections)
  const rows = data?.collections?.map((element) => (
    <tr key={element.name}>
      <td> {element.name}</td>
      <td>{element.description}</td>
      <td>{element?.created_at ? element.created_at.split(' ')[0] : '-'}</td>
      <td>
        <Group>
          <Tooltip label="Adicionar Textos" withArrow>
            <Button
              variant="subtle"
              className={classes.iconView}
              onClick={handleView(element.id)}
            >
              <Icon icon="clarity:plus-circle-solid" />
            </Button>
          </Tooltip>
          <Tooltip label="Editar Nome" withArrow>
            <Button
              variant="subtle"
              className={classes.iconReport}
              //onClick={onDelete}
            >
              <Icon icon="bxs:edit" />
            </Button>
          </Tooltip>
          <Tooltip label="Deletar Coleção" withArrow>
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
    <Box className={classes.boxTable}>
      {!isLoading && (
        <Table striped className={classes.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      )}
      {isLoading && <Loader />}
    </Box>
  )
}
