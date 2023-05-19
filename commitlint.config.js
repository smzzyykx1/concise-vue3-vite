module.exports = {
    extends: ['@commitlint/config-conventional'],
    // 校验规则
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // 增加新功能
                'fix', // 修复问题/BUG
                'perf', // 优化/性能提升
                'style', // 代码风格相关无影响运行结果的
                'docs', // 文档/注释
                'test', // 测试相关
                'refactor', // 重构
                'build', // 对构建系统或者外部依赖项进行了修改
                'ci', // 对 CI 配置文件或脚本进行了修改
                'chore', // 依赖更新/脚手架配置修改等
                'revert', // 撤销修改
                'wip', // 开发中
                'workflow', // 工作流改进
                'types', // 类型修改
                'release',
            ],
        ],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 72],
    },
};