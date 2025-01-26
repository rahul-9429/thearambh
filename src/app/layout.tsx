import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../../styles/globals.css';
// import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "arambh.",
  description: "arambh. the begining",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
