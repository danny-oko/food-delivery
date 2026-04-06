import api from "@/lib/axios";

import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const credentials = await request.json();
    const cookieStore = await cookies();

    const res = await api.post("/users/login", credentials);
    const data = res.data;

    cookieStore.set("token", data.token, {
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      httpOnly: false,
    });

    return Response.json({ token: data.token });
  } catch (error: any) {
    const status = error.response?.status ?? 500;
    const message = error.response?.data?.message ?? "Login failed";
    return Response.json({ message }, { status });
  }
}
