# exchangeAi项目
## 项目介绍：
为了练手ai项目

### 启动项目：
- 环境: node 16.18+, 包管理工具 pnpm (安装完 node 执行 `npm i pnpm -g` 即可);
- 安装依赖: clone 工程之后，执行 `pnpm i`
- 启动: 按 `F5` 即可自动执行 `pnpm run dev` 并且打开浏览器
- 部署
  - 部署到本地：执行 `pnpm build` 构建完成后把 `dist` 文件夹 放到服务器，并配置 `nginx` 即可
  - 自动 CI/CD：通过 `github actions` 在代码提交到 GitHub 之后自动构建并部署到服务器, 详细参考可查看 [deploy.yml](.github/workflows/deploy.yml)