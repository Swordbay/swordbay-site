// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BodyWrapper from "@/components/BodyWrapper"; // ✅ 引入全局包装器

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Swordbay",
  description: "Structured. Disciplined. Research-driven.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable}`}>
      <body>
        <BodyWrapper>
          {/* 固定导航条 */}
          <Nav />

          {/* 页面内容，给导航条留出空间 */}
          <main className="pt-20">{children}</main>

          {/* 全站统一 Footer */}
          <Footer />
        </BodyWrapper>
      </body>
    </html>
  );
}
