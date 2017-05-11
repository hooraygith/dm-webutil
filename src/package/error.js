/**
 * Created by otherlite on 2016/6/15.
 */

/* global bughd */

const error = {
  bugInit (data) {
    window.bughd && bughd('user', data)
  },
  bug (type, error, data) { // 发送异常
    window.bughd && bughd('notify', type, error, data)
  }
}

export let bug = error.bug
export let bugInit = error.bugInit

export default error
