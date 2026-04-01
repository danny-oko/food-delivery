import api from "@/lib/axios";
import { cookies } from "next/headers";

export type SignInRes = {
  token: string;
};

export async function POST(request: Request) {
  const credentials = await request.json();
  const cookieStore = await cookies();

  const res = await api.post("/users/login", credentials);
  const data = res.data;

  cookieStore.set("token", data.token);

  return Response.json(data.token);
}
