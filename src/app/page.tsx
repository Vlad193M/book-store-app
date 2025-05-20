import { prisma } from "@/lib/prisma-client";

export default async function Home() {
  const user = await   prisma.user.findMany();

  console.log(user);
  return <h1>home</h1>;
}
