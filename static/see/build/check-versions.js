'use strict'
// 检测node和npm版本
const chalk = require('chalk') // 字体颜色 chalk.blue('Hello world')
const semver = require('semver') // 对特定的版本号做判断
const packageConfig = require('../package.json')
const shell = require('shelljs') // Unix系统命令

function exec (cmd) {// child_process模块新建子进程，从而执行 Unix 系统命令,cmd传递版本值
  return require('child_process').execSync(cmd).toString().trim()
}

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version), // node版本的信息
    versionRequirement: packageConfig.engines.node // pakage.json中engines选项的node版本信息 "node":">= 4.0.0"
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'), // 把参数返回给exec函数,获取npm版本号
    versionRequirement: packageConfig.engines.npm // pakage.json中engines选项的node版本信息 "npm": ">= 3.0.0"
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
    process.exit(1) // 提示用户更新版本
  }
}
