import { ApiService } from "../../../config/api";

interface UserType {
  name: string,
  email: string,
  password: string,
  city: string,
  state: string,
  country: string,

}

export const register = async (data: UserType) => {
  const api = new ApiService();
  console.log(data)

  return await api.RequestData("POST", "/user", data);
};


