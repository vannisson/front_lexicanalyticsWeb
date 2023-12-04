import axios from 'axios'
import { ApiService } from '../../../config/api'
import baseURL from '../../../config/baseURL'

interface NewCollectionType {
  name: string
  description: string
  user_id: string
}

export const newCollection = async (data: NewCollectionType) => {
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('description', data.description)
  formData.append('user_id', data.user_id)

  const requestOptions: RequestInit = {
    method: 'POST',
    body: formData,
  }

  return await axios.post(
    `${baseURL.baseURLDev}/collection`,
    requestOptions.body,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  )
}
