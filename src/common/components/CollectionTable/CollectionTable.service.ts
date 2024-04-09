import axios from 'axios'
import { ApiService } from '../../../config/api'
import baseURL from '../../../config/baseURL'

interface CollectionType {
  created_at: string
  description: string
  id: string
  name: string
  user_id: string
}

interface UserType {
  created_at: string
  email: string
  id: string
  name: string
}

interface EditCollectionType {
  name: string
  description: string
  user_id: string
  collectionId: string
}

interface ReturnType {
  collections: CollectionType[]
  user: UserType
}

export interface ProductionType {
  created_at: string
  collection_id: string
  id: string
  text: string
  title: string
}

interface GetReturnType {
  collection: CollectionType
  productions: ProductionType[]
}

const userString: string | null | "" = localStorage.getItem(
  '@lexicanalytics:user'
)
const user = userString ? JSON.parse(userString) : null

export const collectionTable = async (): Promise<ReturnType> => {
  const api = new ApiService()
  const userId = user.id
  return (await api.RequestData('GET', `/user/${userId}`, {})) as ReturnType
}

export const deleteCollection = async (collectionId: string) => {
  const api = new ApiService()

  return (await api.RequestData(
    'DELETE',
    `/collection/${collectionId}`,
    {}
  )) as any
}

export const editCollection = async (data: EditCollectionType) => {
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('description', data.description)
  formData.append('user_id', data.user_id)

  const requestOptions: RequestInit = {
    method: 'PUT',
    body: formData,
  }

  return await axios.put(
    `${baseURL.baseURLDev}/collection/${data.collectionId}`,
    requestOptions.body,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  )
}

export const getProductions = async (
  collectionId: string
): Promise<GetReturnType> => {
  const api = new ApiService()

  return (await api.RequestData(
    'GET',
    `/collection/${collectionId}`,
    {}
  )) as GetReturnType
}
