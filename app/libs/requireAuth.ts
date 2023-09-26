import { redirect } from "next/navigation";
import GetCurrentUser from "../actions/getCurrentUser";

export default async function requireAuth(context: any) {
  const currentUser = await GetCurrentUser();

  if (!currentUser) {
    redirect("/");
  } else {
    return context;
  }
}
