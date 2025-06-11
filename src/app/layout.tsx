import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-jakarta",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "novaa",
  description: "using our computers shouldn't feel like a second job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
