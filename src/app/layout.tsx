import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "品牌智能定位平台 - 用AI重新定义品牌价值 | 品牌定位·品牌识别·品牌叙事",
  description: "品牌智能定位平台基于多Agent工作流，为酒类品牌提供从定位到叙事的全链路AI解决方案。品牌定位、品牌识别、产品价值、品牌叙事，助力品牌找到独特的价值定位。",
  keywords: ["品牌定位", "品牌识别", "品牌叙事", "AI品牌", "品牌战略", "品牌定位系统", "品牌识别手册", "产品价值定位", "多Agent工作流", "酒类品牌"],
  authors: [{ name: "Factory AI Digital Employee" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "品牌智能定位平台 - 用AI重新定义品牌价值",
    description: "品牌定位平台 | AI驱动 | 多Agent工作流 | 品牌识别 | 品牌叙事",
    url: "https://www.brand-ai-platform.com",
    siteName: "品牌智能定位平台",
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
        <meta name="theme-color" content="#722F37" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* DNS 预连接 - 性能优化 */}
        <link rel="dns-prefetch" href="https://www.factory-ai.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
      )}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
