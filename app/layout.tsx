import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const Garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--Garamond-font",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Blog App",
  description: "A Blog website Created using  next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Garamond.variable}>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
