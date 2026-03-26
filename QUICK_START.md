# 🚀 快速开始指南

## 第一步：创建 Notion Integration

1. 访问 https://www.notion.so/my-integrations
2. 点击 **"New integration"**
3. 填写名称：`Portfolio CMS`
4. 复制 **Token**（以 `secret_` 开头）

## 第二步：创建 Notion 数据库

在你的 Notion 中创建3个数据库：

### 1. 工作经历数据库

**标题**: `工作经历`

| 属性名 | 类型 | 示例值 |
|--------|------|--------|
| Period | Title | 2025.10 - 至今 |
| Title | Rich Text | 餐厅合伙人/企业顾问 |
| Company | Rich Text | 和牛定食餐厅/予童科技 |
| Description | Rich Text | BP撰写与融资 / 线上培训课程体系搭建... |
| Link | URL | https://... |
| Order | Number | 1 |

### 2. 项目经历数据库

**标题**: `项目经历`

| 属性名 | 类型 | 示例值 |
|--------|------|--------|
| Tag | Title | 系统调优 |
| Name | Rich Text | 饿了么下沉市场外卖配送提效 |
| Description | Rich Text | 主导饿了么下沉市场智能调度系统覆盖率从30%提升至98%... |
| Link | URL | https://... |
| Order | Number | 1 |

### 3. AI Lab 数据库

**标题**: `AI Lab`

| 属性名 | 类型 | 示例值 |
|--------|------|--------|
| Category | Title | AI Agent |
| Name | Rich Text | 自媒体起号助手 |
| Description | Rich Text | 基于大语言模型开发的自媒体起号助手... |
| Link | URL | https://... |
| Order | Number | 1 |

## 第三步：连接 Integration

对每个数据库：
1. 打开数据库页面
2. 点击右上角 **"..."** → **"Add connections"**
3. 选择 `Portfolio CMS`
4. 点击 **"Confirm"**

## 第四步：获取数据库 ID

1. 打开数据库页面
2. 复制浏览器地址栏 URL
3. 提取 32 位 ID：
   ```
   https://www.notion.so/workspace/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p?v=...
                               └─ 这就是数据库 ID
   ```

## 第五步：部署到 Vercel

### 方法 A：Vercel 控制台部署（推荐）

1. 访问 https://vercel.com
2. 点击 **"Add New Project"**
3. 导入 GitHub 仓库
4. 配置环境变量：

| 变量名 | 值 |
|--------|-----|
| `NOTION_TOKEN` | secret_你的Token |
| `NOTION_WORK_DB_ID` | 工作经历数据库ID |
| `NOTION_PROJECT_DB_ID` | 项目经历数据库ID |
| `NOTION_AI_LAB_DB_ID` | AI Lab数据库ID |

5. 点击 **"Deploy"**

### 方法 B：Vercel CLI 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 配置环境变量
vercel env add NOTION_TOKEN
vercel env add NOTION_WORK_DB_ID
vercel env add NOTION_PROJECT_DB_ID
vercel env add NOTION_AI_LAB_DB_ID

# 重新部署
vercel --prod
```

## 第六步：添加内容

在 Notion 数据库中添加你的内容，网站会自动显示！

## 更新内容

以后只需要在 Notion 中编辑，网站会自动更新（有60秒缓存）。

如果想立即更新，可以在 Vercel 控制台点击 **"Redeploy"**。

---

## 常见问题

### Q: 页面显示 "暂无数据"
A: 检查数据库属性名是否完全匹配（区分大小写）

### Q: 部署失败
A: 检查环境变量是否全部配置正确

### Q: 内容不更新
A: 等待60秒缓存过期，或手动重新部署

---

**完成！** 你现在可以通过 Notion 轻松管理个人网站内容了 🎉
