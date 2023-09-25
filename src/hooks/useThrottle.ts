let timer: undefined | NodeJS.Timeout = undefined

export default function useThrottle(value: string, func: Function, timeout: number = 1000) {
  clearTimeout(timer)

  timer = setTimeout(() => {
    func(value)
  }, timeout)
}
