"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { logIn } from "@/lib/auth/logIn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      setLoading(true);
      await logIn(credentials);
      router.push("/");
    } catch {
      setError("Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl overflow-hidden rounded-2xl bg-white shadow-sm sm:min-h-[calc(100vh-3rem)]">
        <section className="flex w-full items-center justify-center p-6 sm:p-10 lg:w-[42%]">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm space-y-4"
            noValidate
          >
            <div className="space-y-1">
              <h1 className="text-3xl font-semibold text-zinc-900">Log in</h1>
              <p className="text-sm text-zinc-500">
                Log in to enjoy your favorite dishes.
              </p>
            </div>

            {error ? (
              <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </p>
            ) : null}

            <Input
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="h-11 rounded-md border-zinc-200 bg-zinc-50 px-3"
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="h-11 rounded-md border-zinc-200 bg-zinc-50 px-3"
            />

            <button
              type="button"
              className="text-left text-sm text-zinc-600 underline-offset-4 hover:underline"
            >
              Forgot password?
            </button>

            <Button
              type="submit"
              disabled={loading}
              className="h-11 w-full rounded-md bg-zinc-900 text-white hover:bg-zinc-800 cursor-pointer"
            >
              Let&apos;s Go
            </Button>

            <p className="pt-2 text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => router.push("/auth/register")}
                className="font-medium text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                Sign up
              </button>
            </p>
          </form>
        </section>

        <section className="relative hidden lg:block lg:w-[58%]">
          <Image
            src="/images/login.png"
            alt="Delivery rider"
            fill
            priority
            sizes="58vw"
            className="object-cover"
          />
        </section>
      </div>
    </main>
  );
}
