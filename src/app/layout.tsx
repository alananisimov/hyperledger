import "~/styles/globals.css";

import { Space_Grotesk, Space_Mono } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "./_components/nav-bar";
import { Toaster } from "sonner";
import Footer from "./_components/footer";

export const space_mono = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Hyperledger foundation",
  description: "Enabling an open, trusted, and enduring digital economy",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`bg-[#EBEBEC] font-sans ${space_mono.className}`}>
        <NavBar classname={space_mono.className} />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer classname={space_mono.className} />
      </body>
      <Toaster />
    </html>
  );
}
