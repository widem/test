export default {
  debounce (fn, t) {
    let delay = t || 500
    let timer
    return function () {
      let args = arguments
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, args)
      }, delay)
    }
  },
  throttle (fn, t) {
    let last
    let timer
    let interval = t || 500
    return function () {
      let args = arguments
      let now = +new Date()
      if (last && now - last < interval) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          last = now
          fn.apply(this, args)
        }, interval)
      } else {
        last = now
        fn.apply(this, args)
      }
    }
  }
}