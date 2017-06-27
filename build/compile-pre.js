const _DIR_ = process.cwd()
const fs = require('fs')

// 1、初始化 build-server.config.json
if (!fs.existsSync(`${_DIR_}/build/server.config.json`)) {
  fs.writeFileSync(`${_DIR_}/build/server.config.json`, fs.readFileSync(`${_DIR_}/build/server.config.sample`, 'utf-8'))
}
