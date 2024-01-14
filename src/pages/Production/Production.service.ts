import { ApiService } from '../../config/api'

interface CollectionType {
  created_at: string
  description: string
  id: string
  name: string
  user_id: string
}

interface ProductionType {
  created_at: string
  collection_id: string
  id: string
  text: string
  title: string
}

interface ReturnType {
  collection: CollectionType
  productions: ProductionType[]
}

interface NewProductionType {
  text: string
  title: string
  collection_id: string
}

export const getProductions = async (
  collectionId: string
): Promise<ReturnType> => {
  const api = new ApiService()

  return (await api.RequestData(
    'GET',
    `/collection/${collectionId}`,
    {}
  )) as ReturnType
}

// export const newCollection = async (data: NewProductionType) => {
//   const formData = new FormData()
//   formData.append('text', data.text)
//   formData.append('title', data.title)
//   formData.append('collection_id', data.collection_id)

//   const requestOptions: RequestInit = {
//     method: 'POST',
//     body: formData,
//   }

//   return await axios.post(
//     `${baseURL.baseURLDev}/collection`,
//     requestOptions.body,
//     { headers: { 'Content-Type': 'multipart/form-data' } }
//   )
// }
