import axios from 'axios'
import { ApiService } from '../../../config/api'
import baseURL from '../../../config/baseURL'

interface UserType {
  name: string
  email: string
  password: string
}

export const register = async (data: UserType) => {
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('password', data.password)

  return await axios.post(`${baseURL.baseURLDev}/user`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const getCountry = async () => {
  return await axios.post(`${baseURL.baseIBGE}/paises?orderBy=nome`)
}
