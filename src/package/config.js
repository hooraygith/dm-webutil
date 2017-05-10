const Config = {
  config: {
    path: '/',
    affix: '',
    domain: '',
    exp_day: 10
  },
  init (config) {
    for (let i in config) {
      Config.config[i] = config[i]
    }
  }
}

export let init = Config.init
export let config = Config.config
export default config
