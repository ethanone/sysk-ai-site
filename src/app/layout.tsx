import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "G-Box - 人生第一台裸眼全息设备 | 数艺时空 | 全息数字消费平台",
  description: "G-Box是全球最大的全息数字消费平台，采用裸眼全息技术，无需穿戴任何设备，不限观看人数。49个视点，60度超广角，AI智能学习，自动转3D，重新定义人与机器的交互方式。",
  keywords: ["G-Box", "裸眼全息", "全息设备", "3D全息", "数字手办", "全息相册", "柱状透镜", "AI算法", "数艺时空", "全息投影"],
  authors: [{ name: "数艺时空（成都）文化科技有限公司" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "G-Box - 人生第一台裸眼全息设备",
    description: "G-Box | 裸眼全息技术 | 49个视点 | 60度超广角 | 全息数字消费平台",
    url: "https://www.g-box.com",
    siteName: "G-Box 全息数字消费平台",
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
