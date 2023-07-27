import { ApiService } from "../../../config/api";

interface UserType {
  login: string;
  password: string;
}

export const login = async (data: UserType) => {
  const api = new ApiService();

  return await api.RequestData("POST", "/auth", data);
};

export const loginSuccess = (data: any) => {
  localStorage.setItem("@iCer:token", data?.token);
  localStorage.setItem("@iCer:user", JSON.stringify(data?.user));
};
