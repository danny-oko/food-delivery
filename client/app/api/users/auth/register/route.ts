import api from "@/lib/api";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();
  const cookieStore = await cookies();

  const res = await api.post("/users", body);
  const data = res.data;

  console.log("new user:", data);

  cookieStore.set("token", data.token);
  return Response.json(data);
}
