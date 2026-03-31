"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { logIn } from "@/lib/auth/logIn";
import { useState } from "react";

export const Login = () => {
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const res = await logIn(credentials);
      localStorage.setItem("token", res.token);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <Button type="submit">Sign In</Button>
    </form>
  );
};
