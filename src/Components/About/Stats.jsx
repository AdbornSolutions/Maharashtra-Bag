import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 25, suffix: '+', label: 'Years of Manufacturing', sublabel: 'Experience' },
  { value: 1200, suffix: '+', label: 'Satisfied Business', sublabel: 'Clients' },
  { value: 5, suffix: ' Million+', label: 'Bags Manufactured' },
  { value: 50, suffix: '+', label: 'Export & Business', sublabel: 'Markets Served' },
  { value: 100, suffix: '%', label: 'Quality Inspection', sublabel: 'Before Dispatch' },
]

const AnimatedStat = ({ value, suffix, label, sublabel }) => {
  const statRef = useRef(null)
  const [displayValue, setDisplayValue] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? value : 0
  ))

  useEffect(() => {
    const element = statRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) return undefined

    let animationFrame
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      const startTime = performance.now()
      const duration = 1700

      const animate = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        setDisplayValue(Math.round(value * easedProgress))

        if (progress < 1) animationFrame = requestAnimationFrame(animate)
      }

      animationFrame = requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [value])

  return (
    <div ref={statRef} className="min-w-0 text-center">
      <strong className="block whitespace-nowrap text-[27px] font-semibold leading-none text-[#ff6712] sm:text-[30px] lg:text-[32px]">
        {displayValue.toLocaleString('en-IN')}{suffix}
      </strong>
      <p className="mt-3 text-[11px] leading-[1.65] text-[#65666a] sm:text-[12px]">
        {label}{sublabel && <><br />{sublabel}</>}
      </p>
    </div>
  )
}

const Stats = () => (
  <section className="bg-[#f6f5ed] px-2 py-4 sm:px-[15px]" aria-label="Company statistics">
    <div className="mx-auto grid max-w-[1410px] grid-cols-2 items-center gap-x-5 gap-y-9 rounded-[16px] bg-white px-5 py-9 sm:px-10 md:grid-cols-5 md:gap-5 lg:min-h-[164px] lg:px-[66px] lg:py-7">
      {stats.map((stat) => <AnimatedStat key={stat.label} {...stat} />)}
    </div>
  </section>
)

export default Stats
