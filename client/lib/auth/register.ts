import api from "../api";

type Credentials = {
  email: string;
  password: string;
};

type AccessToken = {
  token: string;
};

export const register = async (credentials: Credentials) => {
  const res = await api.post("/users", credentials);

  const data = res.data.json() as AccessToken;

  console.log("register data:", data);

  return data;
};
