
/*
VSCode格式化配置
https://blog.csdn.net/qq_42704919/article/details/118551837

Prettier 插件
Prettier configuration
https://prettier.io/docs/en/configuration.html

vscode设置（覆盖不了，只能查看）：文件---首选项---设置---搜索prettier---工作区设置（或点...打开settings.json手动改）
点vscode右下角空格:2---空格缩进右的更改视图 ---改 空格:4
vue文件里右键---选格式化文件
*/
module.exports = {
    tabWidth: 4,// 每个制表符占用的空格数, 主要设置这里
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'all',
    jsxSingleQuote: true,
    endOfLine: 'lf',
};