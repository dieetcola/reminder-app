import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header>
      <nav>
        <div>
          {!(await isAuthenticated()) ? (
            <>
              <LoginLink
                postLoginRedirectURL="/dashboard"
                className="rounded-lg	inline-block font-semibold p-4 text-[#434851] mr-2"
              >
                Sign in
              </LoginLink>
              <RegisterLink className="rounded-lg	inline-block font-semibold p-4 bg-black text-white	">
                Sign up
              </RegisterLink>
            </>
          ) : (
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              {user?.picture ? (
                <img
                  className="flex rounded-3xl w-12"
                  src={user?.picture}
                  alt="user profile avatar"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex rounded-3xl w-12">
                  {user?.given_name?.[0]}
                  {user?.family_name?.[0]}
                </div>
              )}
              <div>
                <p className="text-base	">
                  {user?.given_name} {user?.family_name}
                </p>

                <LogoutLink className="text-gray-600 text-xs">
                  Log out
                </LogoutLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
