import { ApiService } from '../../../config/api'

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

interface ReturnType {
  collections: CollectionType[]
  user: UserType
}
const userString: string | null | undefined = localStorage.getItem(
  '@lexicanalytics:user'
)
const user = userString ? JSON.parse(userString) : null

export const collectionTable = async (): Promise<ReturnType> => {
  const api = new ApiService()
  const userId = user.id
  return (await api.RequestData('GET', `/user/${userId}`, {})) as ReturnType
}

// export const deleteCollection = async () => {
//   const api = new ApiService()

//   return await api.RequestData('DELETE', `/collection/${}`, {})
// }
