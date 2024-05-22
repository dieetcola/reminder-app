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
      <nav className="nav container">
        <div>
          {!(await isAuthenticated()) ? (
            <>
              <LoginLink className="btn btn-ghost sign-in-btn">
                Sign in
              </LoginLink>
              <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
            </>
          ) : (
            <div className="profile-blob">
              {user?.picture ? (
                <img
                  className="avatar"
                  src={user?.picture}
                  alt="user profile avatar"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="avatar">
                  {user?.given_name?.[0]}
                  {user?.family_name?.[0]}
                </div>
              )}
              <div>
                <p className="text-heading-2">
                  {user?.given_name} {user?.family_name}
                </p>

                <LogoutLink className="text-subtle">Log out</LogoutLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
