import Header from "@/components/layout/header";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Organizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-slate-100 container mx-auto p-4`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
