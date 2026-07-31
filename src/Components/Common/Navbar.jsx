import { useState } from 'react'
import logo from '../../assets/logo.png'
import quoteIcon from '../../assets/Icons/Icon.png'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Canvas Bags', href: '#canvas-bags' },
  { label: 'Non-Woven Bags', href: '#non-woven-bags' },
  { label: 'Jute Bags', href: '#jute-bags' },
  { label: 'BOPP Bags', href: '#bopp-bags' },
]

const Navbar = ({ variant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isTransparent = variant === 'transparent'

  return (
    <header className={`${isTransparent ? 'absolute inset-x-0 top-0 border-b border-white/10 bg-black/20' : 'sticky top-0 border-b border-white/10 bg-black'} z-50 w-full px-4 py-3 text-white sm:px-8 lg:px-[5.3%] lg:py-5`}>
      <nav className="mx-auto flex max-w-[1260px] items-center justify-between gap-5" aria-label="Main navigation">
        <a href="#home" className="shrink-0" aria-label="Maharashtra Bags home">
          <img src={logo} alt="Maharashtra Bags" className="h-[54px] w-[194px] rounded-xl object-contain sm:h-[62px] sm:w-[194px]" />
        </a>

        <div className="hidden flex-1 items-center justify-end gap-7 lg:flex xl:gap-8">
          {navigationItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`whitespace-nowrap text-[16px] font-bold transition-colors hover:text-[#ff7900] ${index === 0 ? 'text-[#ff7900]' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a href="#quote" className="rounded-full bg-[#1c3663] px-9 py-4 text-sm font-bold transition-colors hover:bg-[#28477e]">
            Get a Quote
          </a>
          <a href="#quote" className="flex size-[52px] items-center justify-center rounded-full bg-[#ff7900] transition-transform hover:scale-105" aria-label="Get a quote">
            <img src={quoteIcon} alt="" className="size-5 object-contain" />
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a href="#quote" className="flex size-10 items-center justify-center rounded-full bg-[#ff7900]" aria-label="Get a quote">
            <img src={quoteIcon} alt="" className="size-4 object-contain" />
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-md border border-white/30 px-3 py-2 text-sm font-semibold"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            Menu
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="mx-auto mt-3 max-w-[1260px] border-t border-white/15 pt-3 lg:hidden">
          <div className="grid gap-1 pb-2">
            {navigationItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-bold ${index === 0 ? 'bg-white/10 text-[#ff7900]' : 'text-white hover:bg-white/10'}`}
              >
                {item.label}
              </a>
            ))}
            <a href="#quote" onClick={() => setIsMenuOpen(false)} className="mt-1 rounded-full bg-[#1c3663] px-5 py-3 text-center text-sm font-bold">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
