import { ApiService } from '../../config/api'

export const getResults = async (collection_id: string): Promise<any> => {
  const api = new ApiService()

  return (await api.RequestData(
    'GET',
    `/collection/analyze/${collection_id}`,
    {}
  )) as any
}
