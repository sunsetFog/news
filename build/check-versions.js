'use strict'
// 检测node和npm版本

// 字体颜色
const chalk = require('chalk')
// 对特定的版本号做判断
const semver = require('semver')
// 引入文件
const packageConfig = require('../package.json')
// Unix系统命令
const shell = require('shelljs')

// child_process模块新建子进程，从而执行 Unix 系统命令,cmd传递版本值
function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    // node版本的信息
    currentVersion: semver.clean(process.version),
    // pakage.json
    versionRequirement: packageConfig.engines.node
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    // 调用函数,带参数npm版本号
    currentVersion: exec('npm --version'),
    // pakage.json
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    // 提示用户更新版本
    process.exit(1)
  }
}
