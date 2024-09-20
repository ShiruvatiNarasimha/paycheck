import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/Sections/Appbar";
import InfoSection from "@/components/Sections/InfoSection";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayCheckout",
  description: "PayCheckout",
  icons: {
    icon: "/favicon.avif",
    shortcut: "/favicon.avif",
    apple: "/favicon.avif",
    other: {
      url: "/favicon.avif",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className=" bg-[#141414] ">
          <Appbar />
          {children}
          <InfoSection />
        </div>
      </body>
    </html>
  );
}
