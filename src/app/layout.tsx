import Header from "@/components/header";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

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
        <main>
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
