import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";

// 配置 Inter 字体 - 优化加载
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: "新石龙科技 - 优质羊肚菌全球贸易商 | 三阶段品控 · AI智能分级",
  description: "四川新石龙科技专注优质干羊肚菌国际贸易，拥有SC、HACCP、ISO 22000国际认证，创新三阶段品控体系，1000吨年产能稳定供应，正在研发Morchella-AI智能分级系统，为全球客户提供100%透明可靠的高端农产品。",
  keywords: ["羊肚菌", "干羊肚菌", "Morel Mushrooms", "新石龙科技", "农产品出口", "食品认证", "HACCP", "ISO 22000", "AI分级", "三阶段品控", "国际贸易", "四川农产品"],
  authors: [{ name: "New Shi Long Technology" }],
  icons: {
    icon: "/scxsl-logo.png",
    shortcut: "/scxsl-logo.png",
    apple: "/scxsl-logo.png",
  },
  openGraph: {
    title: "新石龙科技 - 自然珍品，重塑于诚信与科技",
    description: "优质干羊肚菌全球贸易商 | SC/HACCP/ISO认证 | 三阶段品控 | AI智能分级 | 1000吨年产能",
    url: "https://www.newshilong.com",
    siteName: "新石龙科技",
    locale: "zh_CN",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 移动端视口优化 - 防止缩放和布局问题 */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* DNS 预连接 - 性能优化 */}
        <link rel="dns-prefetch" href="https://www.newshilong.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
