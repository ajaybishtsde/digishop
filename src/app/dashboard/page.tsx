import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  {
    console.log(JSON.stringify(session));
  }
  return (
    <>
      <MaxWidthWrapper className="mt-4">
        <div>
          <h3>This is a Dashboard page</h3>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Dashboard;
