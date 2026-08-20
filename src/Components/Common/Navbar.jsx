import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const PhoneIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
  </svg>
)

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Canvas Bags', href: '/canvas-bags' },
  { label: 'Non-Woven Bags', href: '/non-woven' },
  { label: 'Jute Bags', href: '/jute-bags' },
  { label: 'BOPP Bags', href: '/bopp-bags' },
]

const Navbar = ({ variant = 'default', fluid = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isTransparent = variant === 'transparent'
  const isLight = variant === 'light'
  const inactiveText = isLight ? 'text-[#17243b]' : 'text-white'

  useEffect(() => {
    if (!isMenuOpen) return undefined
    const handleEscape = (event) => event.key === 'Escape' && setIsMenuOpen(false)
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  return (
    <header className={`${isTransparent ? 'absolute inset-x-0 top-0 border-b border-white/10 bg-black/20 text-white' : isLight ? 'relative border-b border-[#e4e7eb] bg-white text-[#17243b]' : 'sticky top-0 border-b border-white/10 bg-black text-white'} ${fluid ? 'lg:px-[4%]' : 'lg:px-[5.3%]'} z-50 w-full px-3 py-3 sm:px-8 lg:py-5`}>
      <nav className={`${fluid ? 'w-full max-w-none' : 'mx-auto max-w-[1260px]'} flex items-center justify-between gap-3 sm:gap-5`} aria-label="Main navigation">
        <Link to="/" className="shrink-0" aria-label="Maharashtra Bags home">
          <img src={logo} alt="Maharashtra Bags" className="h-[48px] w-[136px] rounded-xl object-contain min-[360px]:h-[52px] min-[360px]:w-[155px] sm:h-[68px] sm:w-[210px] lg:h-[80px] lg:w-[270px]" />
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-7 lg:flex xl:gap-8">
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) => `whitespace-nowrap text-[16px] font-bold transition-colors hover:text-[#ff7900] ${isActive && !item.href.includes('#') ? 'text-[#ff7900]' : inactiveText}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/gallery" className="rounded-full bg-[#1c3663] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#28477e] focus:outline-none focus:ring-2 focus:ring-[#ff7900] focus:ring-offset-2">
            Gallery
          </Link>
          <Link to="/contact" className="flex size-[48px] items-center justify-center rounded-full bg-[#ff7900] text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white" aria-label="Call or request a quote">
            <PhoneIcon className="size-5" />
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:hidden">
          <Link to="/contact" className="flex size-10 items-center justify-center rounded-full bg-[#ff7900] text-white focus:outline-none focus:ring-2 focus:ring-white" aria-label="Call or request a quote">
            <PhoneIcon className="size-4" />
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`min-h-10 rounded-md border px-3 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#ff7900] ${isLight ? 'border-[#17243b]/30' : 'border-white/30'}`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span aria-hidden="true">{isMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className={`mx-auto mt-3 max-h-[calc(100dvh-92px)] max-w-[1260px] overflow-y-auto rounded-b-xl border-t px-1 pt-3 lg:hidden ${isLight ? 'border-[#17243b]/15 bg-white' : 'border-white/15 bg-[#101827]/95'}`}>
          <div className="grid gap-1 pb-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                end={item.href === '/'}
                className={({ isActive }) => `rounded-md px-3 py-2.5 text-sm font-bold ${isActive && !item.href.includes('#') ? 'bg-black/5 text-[#ff7900]' : `${inactiveText} hover:bg-black/5`}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="mt-1 rounded-full bg-[#1c3663] px-5 py-3 text-center text-sm font-bold text-white">
              Gallery
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
