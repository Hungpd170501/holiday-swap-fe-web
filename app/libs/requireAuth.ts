import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function requireAuth(context: any) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  } else {
    return context;
  }
}
