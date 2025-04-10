import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dillon Hicks - Machine Learning Engineer",
  description: "Personal portfolio website showcasing projects, experience, and publications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
