# 项目名称

简易的vue3框架

## 功能特性

简易的vue3框架

## 快速开始
开始前 请进行vscode配置 用来保存时根据eslint整理代码
https://zhuanlan.zhihu.com/p/611951084

npm i 引入项目依赖
## vscode插件配置
请下载esLint，styleLint插件。
并且在vscode的设置中添加
// 根据stylelint和eslint保存自动格式化
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": "explicit",
  "source.fixAll.eslint": "explicit"
},
"stylelint.validate": ["css", "less", "vue", "scss","sass"],
"stylelint.snippet": [
  "css",
  "less",
  "postcss",
  "scss",
  "sass"
],
### 构建
npm run build

### 运行

npm dev
