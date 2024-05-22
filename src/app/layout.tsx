import Header from "@/components/header";
import "./globals.css";

import Link from "next/link";

export const metadata = {
  title: "Kinde Auth",
  description: "Kinde with NextJS App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <strong className="text-heading-2">KindeAuth</strong>
            <p className="footer-tagline text-body-3">
              Visit our{" "}
              <Link className="link" href="https://kinde.com/docs">
                help center
              </Link>
            </p>

            <small className="text-subtle">
              © 2023 KindeAuth, Inc. All rights reserved
            </small>
          </div>
        </footer>
      </body>
    </html>
  );
}
