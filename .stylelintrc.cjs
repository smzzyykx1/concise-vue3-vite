module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-vue",
    "stylelint-config-rational-order", // 排序插件
  ],
  overrides: [
    // 若项目中存在less文件，添加以下配置
    {
      files: ["*.less", "**/*.less"],
      customSyntax: "postcss-less",
      extends: ["stylelint-config-recommended-less"],
    },
  ],
  // 可以使用deep
  rules: {
    indentation: 2, // 缩进 4 个空格
    "declaration-block-trailing-semicolon": "always", //每个属性声明末尾都要加分号
    // 每个样式规则前后都有空行，除了第一条规则、规则前有注释、或者嵌套规则
    "rule-empty-line-before": [
      "always",
      { except: ["after-single-line-comment", "first-nested", "inside-block"] },
    ],
    "declaration-block-semicolon-newline-after": "always", // 分号之后必须有换行符
    "block-closing-brace-empty-line-before": ["never"], // 在结尾 "}" 之前不允许有空行
    // 要求在块的闭大括号之后必须有换行符或不能有空白符。
    "block-closing-brace-newline-after": [
      "always",
      { ignoreAtRules: ["/regex/", "non-regex"] },
    ],
    "block-opening-brace-space-before": "always", // "{" 前必须有空格
    "block-closing-brace-newline-before": "always", //要求在块的闭大括号之前必须有换行符或不能有空白符。
    "block-opening-brace-newline-after": "always", //要求在块的开大括号之后必须有换行符。
    "max-empty-lines": 1, // 不允许超过一行的空行
    // 属性名 ":" 后必须有空格
    "declaration-colon-space-after": "always",
    // 属性名 ":" 前不能有空格
    "declaration-colon-space-before": "never",
    // 声明属性末尾 ";" 前不能有空格
    "declaration-block-semicolon-space-before": "never",
    // 属性值中的 "," 后必须有空格
    "function-comma-space-after": "always",
    // 选择器例如 ">、+、~" 前后必须要有空格
    "selector-combinator-space-before": "always",
    "selector-combinator-space-after": "always",
    // 多个属性值之间的 "," 后必须有空格
    "value-list-comma-space-after": "always",
    // 多个属性值之间的 "," 前不能有空格
    "value-list-comma-space-before": "never",
    // 媒体查询中设置断点宽度里的 ":" 后必须有空格
    "media-feature-colon-space-after": "always",
    // 媒体查询中设置断点宽度里的 ":" 前不能有空格
    "media-feature-colon-space-before": "never",
    // 指定类选择器的模式兼容elementui命名
    "selector-class-pattern": [
      "^([a-z0-9][a-z0-9]*)((-*|_*)[a-z0-9]+)*$",
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be kebab-case`,
      },
    ],
    // 指定 ID 选择器的模式。
    "selector-id-pattern": [
      "^([a-z0-9][a-z0-9]*)((-*|_*)[a-z0-9]+)*$",
      {
        message: (selector) =>
          `Expected id selector "${selector}" to be kebab-case`,
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep"],
      },
    ],
  },
};
