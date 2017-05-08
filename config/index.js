const name = 'overwatch-react'
const version = '1.0.0'

const config = {
  local: {
    mode: 'local',
    port: 7779,
    name: name,
    version: version
  },
  dev: {
    mode: 'dev',
    port: 7778,
    name: name,
    version: version
  },
  production: {
    mode: 'production',
    port: 7777,
    name: name,
    version: version
  }
}

module.exports = {
  config: function (mode) {
    return config[mode || process.argv[2] || process.env.NODE_ENV || 'local'] || config.local
  }
}
