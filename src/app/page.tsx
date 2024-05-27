import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }

  return (
    <div>
      <div className="flex items-center	justify-center flex-col	text-center	h-[35rem]">
        <p className="text-7xl font-bold	leading-tight	mb-8">
          Let’s start authenticating <br /> with KindeAuth
        </p>
      </div>
    </div>
  );
}
