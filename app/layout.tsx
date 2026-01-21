import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Renaissance",
  description: "Next-gen football engagement platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
