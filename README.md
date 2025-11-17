# UUMI 悠悠米科技官方网站

> 让智能带来全新视界 - 专注于将人工智能技术深度应用于解决实际产业痛点

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-8B5CF6?logo=tailwindcss)

---

## 📚 快速导航

**新手必读：**
- 🎯 [**配置指南**](./CONFIGURATION_GUIDE.md) - Logo/Favicon 配置、新项目快速上手
- ⚡ [**快速参考**](./QUICK_REFERENCE.md) - 最关键的配置，一目了然
- ✅ [**项目检查清单**](./PROJECT_CHECKLIST.md) - 部署前完整检查项
- 🖼️ [**图片说明**](./public/images/README.md) - 图片资源使用指南

**重点提示：**
- 💡 **浏览器标签栏图标（Favicon）**：配置在 `src/app/layout.tsx` → `metadata.icons`，文件是 `public/uumi-logo.png`
- 📝 **网站内容**：所有文字在 `src/data/companyData.json` 中，直接编辑即可
- 🎨 **颜色主题**：在 `src/app/globals.css` 中修改 CSS 变量

---

## 📋 目录

1. [项目概览](#-项目概览)
2. [快速开始](#-快速开始)
3. [项目结构](#-项目结构)
4. [技术栈](#️-技术栈)
5. [设计系统](#-设计系统)
6. [性能优化](#-性能优化)
7. [科技感设计](#-科技感设计)
8. [开发指南](#-开发指南)
9. [部署说明](#-部署说明)
10. [项目迁移记录](#-项目迁移记录)
11. [常见问题](#-常见问题)

---

## 🎯 项目概览

### 公司简介
**四川悠悠米科技有限公司（UUMI）** 成立于2023年，是一家专注于将人工智能技术深度应用于解决实际产业痛点的科技企业。

### 核心使命
帮助政企客户快速实现智能化转型，通过融合AI技术与行业知识，显著提升效率、优化流程、降低成本，最终解放生产力。

### 服务领域
- 🏥 **医疗健康** - 深度融合AI与外科手术等医疗场景
- ⚡ **电力工程** - 电网规划、线路设计、安全预警
- 🎨 **智能设计** - 建筑与室内设计AI辅助
- 📄 **政务公文** - 智能撰写与数字员工

### 核心团队
- **李春梅** - 创始人兼CMO | 电子科技大学MBA | 全球芯片供应链top3外企高管
- **曾丹** - 联合创始人 | 企业管理与心理学双硕士 | 综合管理专家
- **吴少南** - AI产品总监 | 0-1 AI+创业经验 | 数亿级经济价值创造者
- **何宏建** - 人工智能专家 | 澳洲国立大学硕士 | 计算机视觉与机器学习

### 成功案例
1. **数字员工与智能撰写** - 某网单位成功落地
2. **输变电线路设计文档智能评审** - 某网单位成功落地
3. **电网智能规划与安全预警** - 某设计院投入使用
4. **三维建模智能助手** - 设计工作室广泛应用

---

## 🚀 快速开始

### 环境要求
- Node.js 18+ (推荐使用 nvm 管理版本)
- npm 或 yarn 包管理器

### 安装与启动

```bash
# 克隆项目
git clone https://github.com/ethanone/uumi.net.git
cd uumi-ai-site

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问网站
# 打开 http://localhost:3000
```

### 构建生产版本

```bash
# 构建
npm run build

# 启动生产服务器
npm run start
```

---

## 📁 项目结构

```
uumi-ai-site/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # 全局样式（科技感渐变主题）
│   │   ├── layout.tsx         # 根布局组件
│   │   ├── page.tsx           # 首页（科技感设计）
│   │   └── not-found.tsx      # 404页面
│   ├── components/
│   │   └── ui/                # UI组件库
│   │       ├── button.tsx     # 按钮组件
│   │       ├── card.tsx       # 卡片组件
│   │       ├── accordion.tsx  # 折叠面板
│   │       ├── badge.tsx      # 徽章组件
│   │       └── ...
│   ├── data/
│   │   └── companyData.json   # UUMI 公司数据配置
│   └── lib/
│       └── utils.ts           # 工具函数
├── public/
│   ├── images/               # 图片资源（WebP格式）
│   ├── logo.webp            # 公司Logo
│   └── favicon.ico          # 网站图标
├── next.config.ts           # Next.js配置（已优化）
├── package.json             # 依赖配置（已精简）
└── README.md               # 本文档
```

---

## 🛠️ 技术栈

### 前端框架
- **Next.js 15.3.5** - React全栈框架，App Router模式，静态生成
- **React 19.0.0** - 用户界面库，使用最新特性
- **TypeScript 5.0** - 类型安全的JavaScript，提升代码质量

### 样式与UI
- **Tailwind CSS 4.0** - 原子化CSS框架，极致性能
- **Radix UI** - 无样式、可访问的UI组件库
- **Framer Motion 12.23** - 流畅动画库，60fps性能
- **Lucide React** - 现代图标库，树摇优化

### 开发工具
- **ESLint 9** - 代码质量检查
- **PostCSS** - CSS处理工具

### 性能优化
- ✅ 移除未使用的依赖（vanta, three.js, p5.js）
- ✅ 代码分割和懒加载
- ✅ 图片格式优化（AVIF/WebP）
- ✅ 静态站点生成（SSG）
- ✅ 长期资源缓存

---

## 🎨 设计系统

### 配色方案

#### 主色调 - 优雅紫色
```css
--primary: #8B5CF6          /* 主色 */
--primary-hover: #7C3AED    /* 悬停 */
--primary-light: #A78BFA    /* 浅色 */
```
**使用场景：** 主要CTA按钮、重要标题、品牌标识

#### 辅助色 - 温暖粉色
```css
--secondary: #EC4899        /* 辅色 */
--secondary-hover: #DB2777  /* 悬停 */
--secondary-light: #F9A8D4  /* 浅色 */
```
**使用场景：** 次要CTA、特殊标记、女性化元素

#### 点缀色 - 金色
```css
--accent: #F59E0B           /* 点缀 */
--accent-hover: #D97706     /* 悬停 */
--accent-light: #FCD34D     /* 浅色 */
```
**使用场景：** 亮点突出、成就展示、价值强调

### 渐变效果

```css
/* 主渐变 - 紫到靛蓝 */
.gradient-primary {
  background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
}

/* 次渐变 - 粉到金 */
.gradient-secondary {
  background: linear-gradient(135deg, #EC4899 0%, #F59E0B 100%);
}

/* 文字渐变 - 全彩虹 */
.gradient-text {
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 动画渐变文字 - 科技感 */
.tech-text-animated {
  background: linear-gradient(90deg, #8B5CF6, #EC4899, #F59E0B, #EC4899, #8B5CF6);
  background-size: 200% auto;
  animation: text-shimmer 3s linear infinite;
}
```

### 设计特点
- ✨ **渐变美学** - 贯穿全站的优雅渐变效果
- 🌊 **流畅动画** - Framer Motion 驱动的自然过渡
- 💫 **科技装饰** - 纯 CSS 实现的光点、网格、扫描线
- 📱 **响应式设计** - 完美适配所有设备
- ♿ **无障碍访问** - 符合 WCAG 标准

### 品牌调性
- **女性领导力** - 细腻、专业、有温度
- **科技感** - 现代、前沿、智能化
- **亲和力** - 温暖、友好、易接近
- **专业度** - 严谨、高效、有实力

---

## ⚡ 性能优化

### 已实施的优化策略

#### 1. 依赖优化 (-15MB)
```bash
✅ 移除 vanta (3D粒子) - ~50KB
✅ 移除 three.js (3D渲染) - ~600KB
✅ 移除 p5.js (可视化) - ~350KB
✅ 移除相关类型定义
📦 总共卸载 30 个包
```

#### 2. 图片优化
```javascript
// next.config.ts
images: {
  formats: ['image/avif', 'image/webp'],  // 现代格式
  minimumCacheTTL: 31536000,               // 缓存1年
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
}
```

#### 3. 字体优化
```typescript
const inter = Inter({ 
  display: 'swap',     // 字体交换策略
  preload: true,       // 预加载字体
  subsets: ['latin'],  // 只加载需要的子集
});
```

#### 4. 构建优化
```javascript
// 生产环境移除 console
compiler: {
  removeConsole: process.env.NODE_ENV === "production",
}

// 包导入优化
experimental: {
  optimizePackageImports: ['lucide-react', 'framer-motion'],
}
```

#### 5. 静态生成
```
✓ 所有页面预渲染为静态 HTML
✓ 无需服务器运行时
✓ 极致的加载速度
```

### 性能指标

| 指标 | 值 | 评级 |
|------|-----|------|
| **首次加载 JS** | 163 KB | ✅ 优秀 |
| **首页大小** | 62.3 KB | ✅ 优秀 |
| **构建时间** | 2s | ✅ 极快 |
| **静态生成** | 4/4 页面 | ✅ 100% |

### 资源大小

| 资源类型 | 大小 | 说明 |
|---------|------|------|
| node_modules | 466 MB | 已精简 30 个包 |
| 图片资源 | ~567 KB | WebP 格式，已优化 |
| 首次加载 JS | 163 KB | 包含所有核心功能 |

---

## 💎 科技感设计

### 新 Logo 设计

**特点：**
- 🔷 字母 "U" 为核心元素
- 🌀 旋转光环效果（8秒/圈）
- 💫 青色光点装饰
- ✨ 悬停缩放和阴影
- 🎨 紫粉渐变背景

**实现：** 纯 CSS，零 JS，无性能开销

### 科技感视觉元素

#### 1. 动画渐变文字
```css
.tech-text-animated {
  /* 流动的彩虹渐变 */
  background: linear-gradient(90deg, #8B5CF6, #EC4899, #F59E0B, #EC4899, #8B5CF6);
  background-size: 200% auto;
  animation: text-shimmer 3s linear infinite;
}
```

#### 2. 科技网格背景
```css
.tech-grid {
  /* 微妙的网格纹理 */
  background-image: 
    linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}
```

#### 3. 悬停光效卡片
```css
.tech-card {
  /* 悬停时的渐变边框光效 */
  position: relative;
  overflow: hidden;
}

.tech-card:hover {
  transform: translateY(-2px);
  /* 彩色边框光晕 */
}
```

#### 4. 科技按钮波纹
```css
.tech-button {
  /* 点击时的水波纹扩散效果 */
  overflow: hidden;
}

.tech-button:hover::after {
  width: 300px;
  height: 300px;
  /* 白色光晕扩散 */
}
```

#### 5. 背景装饰元素
- 🔸 **浮动光点** - 4个不同位置的脉冲光点
- 🌊 **渐变光晕** - 2个巨大的模糊渐变球
- 📐 **网格纹理** - 微妙的科技网格背景
- 💫 **扫描线** - 卡片悬停时的光线扫过效果

### 科技感特性

✨ **零 JavaScript 开销**
- 所有效果使用纯 CSS
- 无需额外加载库
- 不影响页面性能

🎯 **精致的微交互**
- Logo 旋转光环
- 图标浮动效果
- 光点脉冲动画
- 卡片光晕效果

⚡ **高性能实现**
- CSS 硬件加速
- GPU 渲染优化
- 60fps 流畅动画
- 低电池消耗

---

## 👨‍💻 开发指南

### 代码规范
- 使用TypeScript进行类型安全开发
- 遵循ESLint配置的代码风格
- 组件使用函数式组件 + Hooks
- 样式使用Tailwind CSS原子类
- 使用 `memo` 优化组件性能

### 使用科技感样式类

```tsx
// 科技感卡片
<Card className="tech-card tech-grid">
  {/* 内容 */}
</Card>

// 科技感按钮
<Button className="tech-button gradient-primary">
  点击我
</Button>

// 动画渐变文字
<h1 className="tech-text-animated">
  让智能带来全新视界
</h1>

// 标题装饰线
<h2 className="tech-title">
  章节标题
</h2>

// 浮动动画
<Icon className="animate-float" />

// 慢速旋转
<div className="animate-spin-slow" />
```

### 组件开发示例

```tsx
import { memo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const TechCard = memo(({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="tech-card tech-grid p-6 rounded-xl border-2">
        <div className="relative w-12 h-12 mb-4">
          <Sparkles className="w-full h-full text-purple-600 animate-float" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
});
```

### 内容更新

修改 `src/data/companyData.json` 来更新：
- 公司信息
- 核心优势
- 焦点领域
- 团队成员
- 成功案例
- 联系方式

```json
{
  "companyInfo": {
    "name": "四川悠悠米科技有限公司",
    "slogan": "让智能带来全新视界",
    "phone": "17364521649",
    "email": "contact@uumi.net"
  }
}
```

---

## 🚀 部署说明

### Vercel部署（推荐）

#### 步骤1：推送到 GitHub
```bash
git add .
git commit -m "feat: add tech-style design with pure CSS"
git push origin main
```

#### 步骤2：连接 Vercel
1. 访问 https://vercel.com
2. 点击 "New Project"
3. 导入 GitHub 仓库：`ethanone/uumi.net`
4. Vercel 自动识别 Next.js 配置
5. 点击 "Deploy"

#### 步骤3：自动部署
- ✅ 自动 HTTPS
- ✅ 全球 CDN 加速
- ✅ 每次 push 自动部署
- ✅ 预览环境支持

### 自定义域名配置

1. 在 Vercel 项目设置中添加域名
2. 配置 DNS 记录：
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
3. 等待 SSL 证书自动配置（~5分钟）

### 环境变量

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://www.uumi.net
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📝 项目迁移记录

### 迁移概览

**迁移时间**：2025年1月8日  
**源项目**：HTZL.AI  
**目标项目**：UUMI.net  
**迁移方式**：全新开始（不保留历史）

### 主要变更

#### 1. Git 仓库迁移
```bash
✅ 删除旧 Git 历史
✅ 初始化新仓库
✅ 关联新远程仓库
✅ 创建初始提交
```

#### 2. 品牌设计变更

| 项目 | HTZL (旧) | UUMI (新) |
|------|-----------|-----------|
| 主色 | 蓝色 #007BFF | 紫色 #8B5CF6 |
| 辅色 | 红色 #D60000 | 粉色 #EC4899 |
| 点缀 | 绿色 #00A859 | 金色 #F59E0B |
| 风格 | 科技蓝 | 优雅紫粉金 |
| Logo | 普通图标 | 科技感旋转光环 |

#### 3. 内容替换
- ✅ 公司信息（悠悠米科技）
- ✅ 核心团队（4位管理层）
- ✅ 服务领域（医疗、电力、设计、政务）
- ✅ 成功案例（4个落地项目）
- ✅ 联系方式

#### 4. 性能优化
- ✅ 移除粒子效果（-30个依赖包）
- ✅ 删除未使用文件
- ✅ 优化构建配置
- ✅ 增强缓存策略

#### 5. 科技感提升
- ✅ 重新设计 Logo（旋转光环）
- ✅ 添加网格背景
- ✅ 添加浮动光点
- ✅ 添加扫描线效果
- ✅ 添加卡片光晕
- ✅ 添加动画渐变文字

### 删除的内容
- ❌ VantaNetBackground 组件
- ❌ VantaBackground 组件
- ❌ Vanta 类型声明
- ❌ 团队规模展示卡片
- ❌ Logo 图片展示
- ❌ 未使用的依赖包

### 新增的内容
- ✨ 科技感 Logo 设计
- ✨ 科技网格背景
- ✨ 浮动光点装饰
- ✨ 动画渐变文字
- ✨ 卡片光晕效果
- ✨ 扫描线动画

---

## 🔧 维护指南

### 日常维护

```bash
# 更新依赖
npm update

# 检查安全漏洞
npm audit
npm audit fix

# 代码质量检查
npm run lint

# 类型检查
npx tsc --noEmit

# 清理构建缓存
rm -rf .next
```

### 性能监控

```bash
# 分析构建产物
npm run build

# 使用 Chrome DevTools
# 1. 打开 Lighthouse
# 2. 运行性能测试
# 3. 查看 Core Web Vitals
```

### 图片优化

```bash
# 批量转换为 WebP（需安装 cwebp）
for f in *.png; do 
  cwebp -q 85 -resize 1280 0 "$f" -o "${f%.png}.webp"
done

# 检查图片大小
du -h public/images/* | sort -h
```

---

## 🆘 常见问题

### Q: 如何更新公司信息？
**A:** 修改 `src/data/companyData.json` 文件中的 `companyInfo` 对象。

### Q: 如何添加新的成功案例？
**A:** 在 `companyData.json` 的 `caseStudies` 数组中添加：
```json
{
  "id": "case-05",
  "title": "案例标题",
  "subtitle": "案例副标题",
  "category": "分类",
  "icon": "FileText",
  "color": "#3B82F6",
  "technologies": ["技术1", "技术2"],
  "features": [
    {"name": "功能名", "description": "功能描述"}
  ],
  "outcome": "项目成果",
  "image": "/images/case-xxx.webp"
}
```

### Q: 如何修改网站配色？
**A:** 修改 `src/app/globals.css` 中的 CSS 变量：
```css
:root {
  --primary: #8B5CF6;    /* 主色 */
  --secondary: #EC4899;  /* 辅色 */
  --accent: #F59E0B;     /* 点缀色 */
}
```

### Q: 如何禁用某些科技感效果？
**A:** 在组件中移除对应的 CSS 类：
- 移除 `tech-card` - 禁用卡片光效
- 移除 `tech-grid` - 禁用网格背景
- 移除 `tech-text-animated` - 禁用文字动画
- 移除 `animate-spin-slow` - 禁用旋转效果

### Q: 网站加载慢怎么办？
**A:** 
1. 压缩图片（< 100KB/张）
2. 启用 CDN（Vercel 自动）
3. 检查网络连接
4. 清理浏览器缓存

### Q: 如何添加新的团队成员？
**A:** 在 `companyData.json` 的 `team.leadership` 数组中添加：
```json
{
  "name": "姓名",
  "title": "职位",
  "education": "教育背景",
  "background": "工作背景",
  "achievements": ["成就1", "成就2"],
  "expertise": ["专长1", "专长2"]
}
```

---

## 📈 版本历史

### v1.1.0 (2025年1月8日) - 科技感升级
- ✨ **重新设计 Logo** - 旋转光环 + 青色光点
- 💫 **科技感装饰** - 网格、光点、光晕、扫描线
- 🎨 **动画文字** - 流动的彩虹渐变
- 🚀 **性能优化** - 移除 30 个未使用的包
- 📝 **文档整合** - 所有文档合并到 README
- ✅ **删除团队规模** - 简化页面内容

### v1.0.0 (2025年1月8日) - 全新发布
- 🎨 **全新设计** - 优雅的紫粉金渐变主题
- ✨ **优雅交互** - Framer Motion 流畅动画
- 💫 **优雅背景** - 移除粒子效果，使用渐变
- 📱 **完美响应** - 移动端优先设计
- 🚀 **性能优化** - 静态生成、代码分割
- 📊 **数据驱动** - JSON配置化内容管理
- ♿ **无障碍访问** - WCAG标准兼容

---

## 🤝 贡献指南

### 开发流程
1. Fork项目到个人仓库
2. 创建功能分支：`git checkout -b feature/new-feature`
3. 提交更改：`git commit -m "feat: add new feature"`
4. 推送分支：`git push origin feature/new-feature`
5. 创建Pull Request

### 提交规范
遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：
- `feat:` 新功能
- `fix:` 问题修复
- `docs:` 文档更新
- `style:` 代码格式调整
- `refactor:` 代码重构
- `perf:` 性能优化
- `chore:` 构建或辅助工具变动

---

## 📊 技术亮点

### 性能优化亮点
- ⚡ **静态生成** - 4/4 页面预渲染
- 🎯 **代码分割** - 自动按路由分割
- 📦 **精简依赖** - 仅 390 个包
- 🖼️ **图片优化** - AVIF/WebP 双格式
- ⏱️ **长期缓存** - 静态资源缓存 1 年

### 设计亮点
- 🎨 **优雅配色** - 紫粉金三色体系
- ✨ **科技装饰** - 纯 CSS 实现
- 💫 **流畅动画** - 60fps 性能
- 📱 **完美响应** - 移动端优先
- ♿ **无障碍** - WCAG 2.1 AA 级

### 开发亮点
- 🔷 **类型安全** - 100% TypeScript
- 📝 **代码规范** - ESLint + Prettier
- 🧩 **组件化** - 高度模块化
- 📚 **完整文档** - 一个 README 包含所有

---

## 📞 联系方式

### 公司信息
- **公司名称**：四川悠悠米科技有限公司
- **官方网站**：[www.uumi.net](https://www.uumi.net)
- **成立时间**：2023年

### 联系方式
- **电话**：17364521649
- **邮箱**：[contact@uumi.net](mailto:contact@uumi.net)
- **地址**：中国(四川)自由贸易试验区成都市天府新区华阳街道海昌路169号18栋1层9号
- **GitHub**：[github.com/ethanone/uumi.net](https://github.com/ethanone/uumi.net)

### 工作时间
周一至周五 9:00-18:00

---

## 📄 许可证

本项目为四川悠悠米科技有限公司所有，保留所有权利。

---

## 🎉 快速检查清单

### 开发前检查
- [ ] Node.js 18+ 已安装
- [ ] Git 已配置
- [ ] 编辑器已准备（推荐 VS Code）

### 开发中检查
- [ ] `npm run dev` 正常运行
- [ ] 无 TypeScript 错误
- [ ] 无 ESLint 警告
- [ ] 响应式设计正常

### 部署前检查
- [ ] `npm run build` 构建成功
- [ ] 所有页面正常显示
- [ ] 移动端测试通过
- [ ] 性能测试通过（Lighthouse）

### 部署后检查
- [ ] 网站可访问
- [ ] HTTPS 正常
- [ ] CDN 加速生效
- [ ] 所有链接正常

---

## 💡 最佳实践

### 性能优化
1. ✅ 使用静态生成（SSG）而非服务端渲染（SSR）
2. ✅ 图片使用 WebP/AVIF 格式
3. ✅ 启用长期缓存
4. ✅ 移除未使用的依赖
5. ✅ 使用纯 CSS 实现动画效果

### 用户体验
1. ✅ 移动端优先设计
2. ✅ 流畅的动画（60fps）
3. ✅ 即时的交互反馈
4. ✅ 无障碍访问支持
5. ✅ 渐进式增强

### 代码质量
1. ✅ TypeScript 类型安全
2. ✅ ESLint 代码规范
3. ✅ 组件化和模块化
4. ✅ 使用 memo 避免重复渲染
5. ✅ 完整的代码注释

---

> **UUMI 悠悠米科技** - 让智能带来全新视界
> 
> 专注 AI 技术深度应用，助力政企客户智能化转型 🚀
> 
> 科技感设计 · 极致性能 · 优雅体验

---

*最后更新：2025年1月8日 · v1.1.0*
