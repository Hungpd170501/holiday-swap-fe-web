import GetPlan from "@/app/actions/getPlan";
import Plan from "../../components/admin/Plan";

export const metadata = {
  title: "Manage Plan Admin",
};

export default async function PlanPage() {
  const plan = await GetPlan();
  return <Plan plan={plan} />;
}
