import { prisma} from "@/lib/db";

export default async function Home() {
  const user = await   prisma.users.findMany();

  console.log(user);
  return <h1>home</h1>;
}
