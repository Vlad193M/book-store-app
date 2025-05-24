"use client";

import Link from "next/link";
import { FormEvent } from "react";
import ConfirmBtn from "../ConfirmBtn";
import Input from "../Input";

export default function Page() {
  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const body = await response.json();

    console.log(response);
    console.log(body);
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="py-12 px-8 border border-[#DEDFE1] rounded-[10px] max-w-[616px] w-full mx-auto mt-8"
    >
      <h1 className="text-[#3D3D3D] text-4xl font-bold leading-[45px] mb-4">
        Signup
      </h1>
      <p className="text-[#949494] leading-5 mb-[52px]">
        Already Have An Account,{" "}
        <Link href="/login" className="text-[#2B2B2B] underline">
          Login
        </Link>
        .
      </p>

      <div className="flex gap-10 mb-[30px] flex-col md:flex-row">
        <Input
          className="grow"
          id="name"
          name="name"
          label="Full name"
          placeholder="Michael Joe"
          type="text"
        />
        <Input
          className="grow"
          id="email"
          name="email"
          label="Enter your email"
          placeholder="michael.joe@gmail.com"
          type="email"
        />
      </div>
      <div className="flex gap-10 mb-[30px] flex-col md:flex-row">
        <Input
          className="grow"
          id="password"
          name="password"
          label="Password"
          placeholder="********"
          type="password"
        />
        <Input
          className="grow"
          id="confirm-password"
          name="confirm-password"
          label="Confirm Password"
          placeholder="********"
          type="password"
        />
      </div>
      <ConfirmBtn className="">Create Account</ConfirmBtn>
    </form>
  );
}
