import GetPlan from "@/app/actions/getPlan";
import Plan from "../../components/admin/Plan";
import { Fragment } from "react";

export const metadata = {
  title: "Manage Plan Admin",
};

export default async function PlanPage() {
  const plan = await GetPlan();
  return <Fragment>
    <Plan plan={plan} />
  </Fragment>;
}
