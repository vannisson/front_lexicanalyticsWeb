import axios from "axios";

const api = axios.create({
  baseURL: "sua URL",
  headers: {
    Authorization: `Bearer ${"seu token"}`,
  },
});

export { api };
