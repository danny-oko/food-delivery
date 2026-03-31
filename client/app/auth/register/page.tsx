"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register } from "@/lib/auth/register";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  tel: string;
  age: string;
};

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    tel: "",
    age: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await register({
        name: form.name,
        email: form.email,
        password: form.password,
        tel: form.tel,
        age: form.age ? Number(form.age) : undefined,
      });
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl overflow-hidden rounded-2xl bg-white shadow-sm sm:min-h-[calc(100vh-3rem)]">
        <section className="flex w-full items-center justify-center p-6 sm:p-10 lg:w-[42%]">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm space-y-3"
            noValidate
          >
            <div className="space-y-1 pb-1">
              <h1 className="text-3xl font-semibold text-zinc-900">Sign up</h1>
              <p className="text-sm text-zinc-500">
                Create your account and start ordering.
              </p>
            </div>

            {error ? (
              <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </p>
            ) : null}

            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="h-11 rounded-md border-zinc-200 bg-zinc-50 px-3"
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="h-11 rounded-md border-zinc-200 bg-zinc-50 px-3"
            />
            <Input
              type="tel"
              placeholder="Phone number"
              name="tel"
              value={form.tel}
              onChange={handleChange}
              required
              className="h-11 rounded-md border-zinc-200 bg-zinc-50 px-3"
            />
            <Input
              type="number"
              placeholder="Age (optional)"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="h-11 rounded-md border-zinc-200 bg-zinc-50 px-3"
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="h-11 rounded-md border-zinc-200 bg-zinc-50 px-3"
            />
            <Input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="h-11 rounded-md border-zinc-200 bg-zinc-50 px-3"
            />

            <Button
              type="submit"
              className="mt-1 h-11 w-full rounded-md bg-zinc-900 text-white hover:bg-zinc-800"
            >
              Create account
            </Button>

            <p className="pt-2 text-center text-sm text-zinc-500">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => router.push("/auth/login")}
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Log in
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
