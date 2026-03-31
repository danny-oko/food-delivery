type Credentials = { email: string; password: string };
type AccessToken = { token: string };

export const logIn = async (credentials: Credentials) => {
  const res = await fetch("/api/users/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw new Error("Login failed");

  const data = (await res.json()) as AccessToken;

  // console.log("login res:", data);

  return data;
};
