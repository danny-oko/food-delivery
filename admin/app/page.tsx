import Login from "@/app/auth/login/page";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  if (cookieStore.get("token")?.value) {
    redirect("/dashboard/menu");
  }

  return (
    <div>
      <Login />
    </div>
  );
}
