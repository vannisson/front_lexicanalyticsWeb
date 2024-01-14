import { ApiService } from '../../../config/api'

export const deleteCollection = async (collectionId: string) => {
  const api = new ApiService()

  return (await api.RequestData(
    'DELETE',
    `/production/${collectionId}`,
    {}
  )) as any
}
