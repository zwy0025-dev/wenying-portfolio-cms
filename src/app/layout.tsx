import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "朱文颖 - 产品策略顾问",
  description: "专注从0到1产品孵化，擅长商业模式设计与运营策略落地",
  keywords: ["产品策略", "AI应用", "商业模式", "运营增长"],
  authors: [{ name: "朱文颖" }],
  openGraph: {
    title: "朱文颖 - 产品策略顾问",
    description: "专注从0到1产品孵化，擅长商业模式设计与运营策略落地",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
