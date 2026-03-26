# Portfolio CMS - 个人网站内容管理系统

基于 Next.js + Notion API 的个人简历网站，通过 Notion 数据库管理内容，实现无痛更新。

## ✨ 特性

- 📝 **Notion 后台管理** - 像填表格一样更新网站内容
- 🚀 **自动部署** - 推送到 GitHub 自动部署到 Vercel
- 🎨 **响应式设计** - 适配桌面和移动端
- 🌙 **暗色模式** - 自动适配系统主题
- ⚡ **静态生成** - 极速加载体验

## 📁 项目结构

```
portfolio-cms/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 主页面
│   │   ├── layout.tsx        # 布局
│   │   └── globals.css       # 全局样式
│   └── lib/
│       └── notion.ts         # Notion API 封装
├── .env.local.example        # 环境变量示例
├── NOTION_SETUP.md           # Notion 设置指南
├── DEPLOY.md                 # 部署指南
└── README.md                 # 本文件
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/你的用户名/portfolio-cms.git
cd portfolio-cms
npm install
```

### 2. 配置 Notion

按照 [NOTION_SETUP.md](./NOTION_SETUP.md) 完成：
- 创建 Notion Integration
- 创建3个数据库
- 获取数据库 ID

### 3. 配置环境变量

```bash
cp .env.local.example .env.local
# 编辑 .env.local 填入你的 Notion 信息
```

### 4. 本地运行

```bash
npm run dev
```

访问 http://localhost:3000

### 5. 部署

按照 [DEPLOY.md](./DEPLOY.md) 部署到 Vercel。

## 📊 Notion 数据库结构

### 工作经历
| 字段 | 类型 | 说明 |
|------|------|------|
| Period | Title | 时间段 |
| Title | Rich Text | 职位 |
| Company | Rich Text | 公司 |
| Description | Rich Text | 描述 |
| Link | URL | 链接 |
| Order | Number | 排序 |

### 项目经历
| 字段 | 类型 | 说明 |
|------|------|------|
| Tag | Title | 标签 |
| Name | Rich Text | 项目名称 |
| Description | Rich Text | 描述 |
| Link | URL | 链接 |
| Order | Number | 排序 |

### AI Lab
| 字段 | 类型 | 说明 |
|------|------|------|
| Category | Title | 类型 |
| Name | Rich Text | 项目名称 |
| Description | Rich Text | 描述 |
| Link | URL | 链接 |
| Order | Number | 排序 |

## 🔄 更新内容

1. 在 Notion 中编辑数据库
2. 等待 60 秒或重新部署
3. 网站自动更新！

## 🛠 技术栈

- [Next.js 14](https://nextjs.org/) - React 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - 样式
- [Notion API](https://developers.notion.com/) - 内容管理
- [Vercel](https://vercel.com/) - 部署托管

## 📄 许可证

MIT License
