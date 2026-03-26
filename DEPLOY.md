# 部署指南

## 方式一：Vercel 一键部署（推荐）

### 1. 准备代码

确保代码已推送到 GitHub：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Portfolio CMS with Notion integration"

# 在 GitHub 创建新仓库，然后推送
git remote add origin https://github.com/你的用户名/portfolio-cms.git
git branch -M main
git push -u origin main
```

### 2. Vercel 部署

1. 访问 https://vercel.com
2. 点击 **"Add New Project"**
3. 导入你的 GitHub 仓库 `portfolio-cms`
4. 配置环境变量：

| 变量名 | 值 |
|--------|-----|
| `NOTION_TOKEN` | 你的 Notion Integration Token |
| `NOTION_WORK_DB_ID` | 工作经历数据库 ID |
| `NOTION_PROJECT_DB_ID` | 项目经历数据库 ID |
| `NOTION_AI_LAB_DB_ID` | AI Lab 数据库 ID |

5. 点击 **"Deploy"**

### 3. 配置自动部署（可选）

Vercel 默认会在每次推送到 main 分支时自动重新部署。

如果你想在 Notion 数据更新时自动重新部署：

1. 在 Vercel 项目设置中找到 **"Git"** → **"Deploy Hooks"**
2. 创建一个 Deploy Hook，复制 URL
3. 使用 Zapier 或 Make 设置自动化：
   - 触发器：Notion 数据库更新
   - 动作：发送 HTTP POST 到 Deploy Hook URL

## 方式二：本地测试

```bash
# 安装依赖
npm install

# 复制环境变量文件
cp .env.local.example .env.local

# 编辑 .env.local 填入你的 Notion 信息

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

## 方式三：静态导出（用于其他托管平台）

```bash
# 配置环境变量
export NOTION_TOKEN=你的Token
export NOTION_WORK_DB_ID=数据库ID
export NOTION_PROJECT_DB_ID=数据库ID
export NOTION_AI_LAB_DB_ID=数据库ID

# 构建
npm run build

# 静态文件会在 dist 目录中
```

## 更新内容

部署完成后，你只需要：

1. 在 Notion 中编辑数据库内容
2. 等待 60 秒（缓存时间）或重新部署

网站会自动显示最新内容！

## 故障排查

### 页面显示 "暂无数据"

- 检查 Notion 数据库是否正确连接 Integration
- 检查数据库 ID 是否正确
- 检查数据库属性名称是否匹配（区分大小写）

### 部署失败

- 检查环境变量是否全部配置
- 查看 Vercel 构建日志

### 数据不更新

- 静态导出模式下需要重新构建
- 检查 Notion API Token 是否有效
