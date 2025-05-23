import Link from "next/link";
import ConfirmBtn from "../ConfirmBtn";
import Input from "../Input";

export default function Page() {
  return (
    <form className="py-12 px-8 border border-[#DEDFE1] rounded-[10px] max-w-[616px] w-full mx-auto mt-8">
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
      <ConfirmBtn className="mb-[30px]">Login</ConfirmBtn>
    </form>
  );
}
