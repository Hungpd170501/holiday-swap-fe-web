import getPlan from "@/app/actions/getPlan";
import Plan from "./Plan";

export const metadata = {
  title: "Manage Plan Admin",
};


export default async function PlanPage() {
  const plan = await getPlan();
  return <Plan plan={plan} />;
}
