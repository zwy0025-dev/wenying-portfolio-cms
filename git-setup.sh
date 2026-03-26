#!/bin/bash

# Git 初始化脚本
cd "$(dirname "$0")"

# 初始化仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Notion CMS for wenying.website"

# 设置主分支
git branch -M main

# 添加远程仓库
git remote add origin https://github.com/zwy0025-dev/wenying-portfolio-cms.git

# 推送
git push -u origin main

echo "✅ 代码已推送到 GitHub！"
