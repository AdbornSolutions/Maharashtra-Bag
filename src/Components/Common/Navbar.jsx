import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import quoteIcon from '../../assets/Icons/Icon.png'

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
          <img src={logo} alt="Maharashtra Bags" className="h-[48px] w-[145px] rounded-xl object-contain sm:h-[62px] sm:w-[194px]" />
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
          <Link to="/contact" className="rounded-full bg-[#1c3663] px-7 py-3.5 text-sm font-bold transition-colors hover:bg-[#28477e] focus:outline-none focus:ring-2 focus:ring-[#ff7900] focus:ring-offset-2">
            Get a Quote
          </Link>
          <Link to="/contact" className="flex size-[48px] items-center justify-center rounded-full bg-[#ff7900] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white" aria-label="Get a quote">
            <img src={quoteIcon} alt="" className="size-5 object-contain" />
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:hidden">
          <Link to="/contact" className="flex size-10 items-center justify-center rounded-full bg-[#ff7900] focus:outline-none focus:ring-2 focus:ring-white" aria-label="Get a quote">
            <img src={quoteIcon} alt="" className="size-4 object-contain" />
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
        <div id="mobile-navigation" className={`mx-auto mt-3 max-w-[1260px] rounded-b-xl border-t px-1 pt-3 lg:hidden ${isLight ? 'border-[#17243b]/15 bg-white' : 'border-white/15 bg-[#101827]/95'}`}>
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
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="mt-1 rounded-full bg-[#1c3663] px-5 py-3 text-center text-sm font-bold text-white">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
