# GitHub 上传指南 | GitHub Upload Guide

## 📋 项目状态检查 | Project Status Check

### ✅ 已完成的准备工作 | Completed Preparations

1. ✅ **完善 .gitignore 文件**
   - 已添加 IDE 配置文件忽略（.vscode/, .idea/）
   - 已添加操作系统文件忽略（.DS_Store, Thumbs.db）
   - 已添加日志和临时文件忽略

2. ✅ **更新项目配置**
   - `package.json` 中的项目名称已更新为 `scysx-ai-site`
   - `README.md` 中的仓库链接已更新

3. ✅ **更新 Git 远程仓库**
   - 远程仓库地址已更新为：`https://github.com/ethanone/scysx-ai-site.git`

4. ✅ **提交更改**
   - 所有配置更改已提交到本地仓库

---

## 🚀 上传到 GitHub 的步骤 | Steps to Upload to GitHub

### 方法一：如果 GitHub 仓库已存在 | Method 1: If GitHub Repository Exists

如果 `https://github.com/ethanone/scysx-ai-site` 仓库已经创建：

```bash
# 1. 确保在项目根目录
cd /Users/ethan/my_project/scysx-ai-site

# 2. 检查当前状态
git status

# 3. 推送所有分支和提交到 GitHub
git push -u origin main

# 如果遇到问题，可以强制推送（谨慎使用）
# git push -u origin main --force
```

### 方法二：如果 GitHub 仓库尚未创建 | Method 2: If GitHub Repository Doesn't Exist

1. **在 GitHub 上创建新仓库**
   - 访问 https://github.com/new
   - 仓库名称：`scysx-ai-site`
   - 描述：`新石龙科技官网 - Next.js 项目`
   - 选择 **Public** 或 **Private**
   - ⚠️ **不要** 初始化 README、.gitignore 或 license（因为本地已有）

2. **推送代码到 GitHub**

```bash
# 1. 确保在项目根目录
cd /Users/ethan/my_project/scysx-ai-site

# 2. 推送代码
git push -u origin main
```

---

## 📦 当前项目文件清单 | Current Project File List

### 已跟踪的文件 | Tracked Files

项目包含以下主要文件和目录：

```
scysx-ai-site/
├── .gitignore                    # Git 忽略文件配置
├── BUILD_FIX_REPORT.md          # 构建修复报告
├── README.md                     # 项目说明文档
├── components.json               # 组件配置
├── design.json                   # 设计配置
├── eslint.config.mjs            # ESLint 配置
├── next.config.ts               # Next.js 配置
├── package.json                 # 项目依赖配置
├── package-lock.json            # 依赖锁定文件
├── postcss.config.mjs           # PostCSS 配置
├── tsconfig.json                # TypeScript 配置
├── vercel.json                  # Vercel 部署配置
├── public/                      # 静态资源目录
│   ├── scxsl-logo.png          # 公司 Logo
│   └── images/                 # 图片资源
│       ├── case-*.webp         # 案例图片
│       └── team/               # 团队照片
└── src/                         # 源代码目录
    ├── app/                     # Next.js App Router
    ├── components/              # React 组件
    ├── contexts/                # React 上下文
    ├── data/                    # 数据文件
    └── lib/                     # 工具函数
```

### 已忽略的文件 | Ignored Files

以下文件/目录不会被上传到 GitHub：

- `node_modules/` - 依赖包（通过 npm install 安装）
- `.next/` - Next.js 构建输出
- `.env*` - 环境变量文件
- `.vercel/` - Vercel 配置
- `*.tsbuildinfo` - TypeScript 构建信息
- `.DS_Store` - macOS 系统文件
- IDE 配置文件（.vscode/, .idea/）

---

## 🔍 验证上传 | Verify Upload

上传完成后，可以通过以下方式验证：

1. **访问 GitHub 仓库**
   ```
   https://github.com/ethanone/scysx-ai-site
   ```

2. **检查文件**
   - 确认所有源代码文件都已上传
   - 确认 README.md 显示正确
   - 确认 package.json 中的项目名称正确

3. **检查提交历史**
   - 确认所有提交记录都已推送
   - 最新的提交应该是：`chore: 更新项目配置以适配新的 GitHub 仓库 scysx-ai-site`

---

## 🔧 常见问题解决 | Troubleshooting

### 问题 1: 推送被拒绝 | Push Rejected

**错误信息：**
```
error: failed to push some refs to 'https://github.com/ethanone/scysx-ai-site.git'
```

**解决方案：**
```bash
# 如果远程仓库有内容，先拉取
git pull origin main --allow-unrelated-histories

# 解决可能的冲突后，再推送
git push -u origin main
```

### 问题 2: 认证失败 | Authentication Failed

**错误信息：**
```
remote: Support for password authentication was removed
```

**解决方案：**
1. 使用 Personal Access Token (PAT)
2. 或配置 SSH 密钥
3. 参考：https://docs.github.com/en/authentication

### 问题 3: 远程仓库地址错误 | Wrong Remote URL

**检查远程仓库：**
```bash
git remote -v
```

**更新远程仓库：**
```bash
git remote set-url origin https://github.com/ethanone/scysx-ai-site.git
```

---

## 📝 后续操作建议 | Next Steps Recommendations

1. **设置 GitHub Pages（如需要）**
   - 在仓库设置中启用 GitHub Pages
   - 选择部署分支和目录

2. **配置 GitHub Actions（如需要）**
   - 设置自动构建和部署
   - 配置 CI/CD 流程

3. **添加仓库描述和标签**
   - 在 GitHub 仓库页面添加描述
   - 添加相关标签（如：nextjs, react, typescript）

4. **保护主分支（如需要）**
   - 在仓库设置中启用分支保护规则
   - 要求代码审查和状态检查

---

## ✅ 检查清单 | Checklist

在上传前，请确认：

- [x] `.gitignore` 文件已完善
- [x] `package.json` 中的项目名称已更新
- [x] `README.md` 中的仓库链接已更新
- [x] Git 远程仓库地址已更新
- [x] 所有更改已提交到本地仓库
- [ ] GitHub 仓库已创建（如果不存在）
- [ ] 代码已成功推送到 GitHub
- [ ] 在 GitHub 上验证了文件完整性

---

## 📞 需要帮助？| Need Help?

如果遇到问题，可以：

1. 检查 Git 状态：`git status`
2. 查看提交历史：`git log --oneline`
3. 检查远程仓库：`git remote -v`
4. 查看 Git 帮助：`git help <command>`

---

**最后更新 | Last Updated:** 2025-01-27  
**项目名称 | Project Name:** scysx-ai-site  
**GitHub 仓库 | Repository:** https://github.com/ethanone/scysx-ai-site

