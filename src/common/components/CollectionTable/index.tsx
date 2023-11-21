import { Anchor, Box, Button, Group, Loader, Table } from '@mantine/core'
import useStyles from './styles'
import { Icon } from '@iconify/react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { collectionTable } from './CollectionTable.service'

export default function CollectionTable() {
  const { classes } = useStyles()
  // const queryClient = useQueryClient()
  const { isLoading, data, error } = useQuery('collectionData', collectionTable)

  // const { mutate } = useMutation(deleteCollection, {
  //   onSuccess: (data: any) => {
  //     queryClient.invalidateQueries(['collectionData'])
  //   },
  // })

  const onDelete = () => {
    // mutate()
  }

  const rows = data?.collections?.map((element) => (
    <tr key={element.name}>
      <td> {element.name}</td>
      <td>{element.description}</td>
      <td>{element?.created_at ? element.created_at.split(' ')[0] : '-'}</td>
      <td>
        <Group>
          <Button
            variant="subtle"
            className={classes.iconView}
            //onClick={onDelete}
          >
            <Icon icon="mdi:eye" />
          </Button>
          <Button
            variant="subtle"
            className={classes.iconReport}
            //onClick={onDelete}
          >
            <Icon icon="mdi:file-report" />
          </Button>
          <Button
            variant="subtle"
            className={classes.iconDelete}
            onClick={onDelete}
          >
            <Icon icon="material-symbols:delete-forever" />
          </Button>
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
