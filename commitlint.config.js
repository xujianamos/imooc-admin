module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示git提交的type必须在以下类型范围内
    'type-enum': [
      // 当前验证的错误级别
      2,
      // 在什么情况下进行验证
      'always',
      // 泛型内容
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactpr',
        'perf',
        'test',
        'chore',
        'revert',
        'build'
      ]
    ],
    // subject大小写不做校验
    'subject-case': [0]
  }
}
