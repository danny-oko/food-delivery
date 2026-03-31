import api from "../api";

type Credentials = {
  email: string;
  password: string;
};

type AccessToken = {
  token: string;
};

export const logIn = async (credentials: Credentials) => {
  const response = await api.post("/users/login", credentials);

  const data = (await response.data.json()) as AccessToken;
  
  console.log("login res:", data);

  return data;
};
