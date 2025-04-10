import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/ui/header/navbar/NavbarWrapper";
import { Metadata } from "next";
import { UserProvider } from "../../context/userContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookCast",
  description: "Generate podcast from books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <UserProvider>
          <NavbarWrapper />
          <div className="flex-1">{children}</div>
        </UserProvider>
      </body>
    </html>
  );
}
