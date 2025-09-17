// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BodyWrapper from "@/components/BodyWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Swordbay",
  description: "Structured. Disciplined. Research-driven.",
  // 👇 显式声明 favicon（从 public/ 读）
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },   // v=2 用来强制刷新缓存
    ],
    // 可选：如果以后做 PWA 或 iOS 添加到主屏
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.variable}>
      <body>
        <BodyWrapper>
          <Nav />
          <main className="pt-20">{children}</main>
          <Footer />
        </BodyWrapper>
      </body>
    </html>
  );
}
