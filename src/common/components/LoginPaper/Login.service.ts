import axios from 'axios'
import { ApiService } from '../../../config/api'
import baseURL from '../../../config/baseURL'

interface UserType {
  email: string
  password: string
}

export const login = async (data: UserType) => {
  const formData = new FormData()
  formData.append('email', data.email)
  formData.append('password', data.password)

  return await axios.post(`${baseURL.baseURLDev}/auth`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const loginSuccess = (data: any) => {
  //localStorage.setItem("@lexicanalytics:token", data?.token);
  localStorage.setItem('@lexicanalytics:user', JSON.stringify(data?.user))
}
