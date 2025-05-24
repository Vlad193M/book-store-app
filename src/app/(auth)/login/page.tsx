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

    const response = await fetch("/api/auth/login", {
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
        Login
      </h1>
      <p className="text-[#949494] leading-5 mb-[52px]">
        Do not have an account,{" "}
        <Link href="/signup" className="text-[#2B2B2B] underline">
          create a new one.
        </Link>
      </p>

      <Input
        className="mb-[30px]"
        id="email"
        name="email"
        label="Enter your email"
        placeholder="michael.joe@gmail.com"
        type="email"
      />
      <Input
        className="mb-[30px]"
        id="password"
        name="password"
        label="Enter Your Password"
        placeholder="michael.joe@xmail.com"
        type="password"
      />
      <ConfirmBtn className="">Login</ConfirmBtn>
    </form>
  );
}
