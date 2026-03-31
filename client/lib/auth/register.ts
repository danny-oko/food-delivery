type RegisterCredentials = {
  name: string;
  email: string;
  password: string;
  tel: string;
  age?: number;
};

type RegisterRes = {
  message: string;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    tel: string;
    age: number | null;
  };
};

export const register = async (credentials: RegisterCredentials) => {
  const res = await fetch("/api/users/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Registration failed");
  }

  return (await res.json()) as RegisterRes;
};
