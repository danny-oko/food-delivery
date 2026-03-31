"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register } from "@/lib/auth/register";
import { useState } from "react";

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
    const res = await register(credentials);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const page = () => {
  return (
    <div>
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

        <Input
          type="password"
          placeholder="password"
          name="confrimPassword"
          value={credentials.password}
          onChange={handleChange}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default page;
