'use client'
import { useState, useEffect } from 'react'

export function useTimer(exp: string) {
  const [day, setDay] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const target = new Date(exp)

      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDay(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function parse(time: number) {
    if (time > 9) return time
    else return `0${time}`
  }

  return { day, hours, minutes, seconds, parse }
}
