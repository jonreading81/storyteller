import type { Metadata } from "next";
import "./globals.css";

import { getNavigation } from "@/services/getNavigation";

export const metadata: Metadata = {
  title: "Storyteller App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = await getNavigation();

  console.log(navigation);
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Storyteller</h1>
        </header>
        <nav>Navigation</nav>
        {children}
      </body>
    </html>
  );
}
