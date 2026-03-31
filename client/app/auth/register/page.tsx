"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register } from "@/lib/auth/register";
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
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <Input
        type="text"
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Input
        type="tel"
        placeholder="Phone number"
        name="tel"
        value={form.tel}
        onChange={handleChange}
        required
      />
      <Input
        type="number"
        placeholder="Age (optional)"
        name="age"
        value={form.age}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
}
