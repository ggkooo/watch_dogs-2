import { useState } from 'react'
import { MaterialIcon } from '../../ui/MaterialIcon'
import logo01 from '../../../assets/logo-01.png'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Game Info', href: '#game-info' },
  { label: 'Features', href: '#features' },
  { label: 'Media', href: '#media' },
  { label: 'Community', href: '#community' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-background-light/90 backdrop-blur-md dark:border-white/10 dark:bg-background-dark/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <button
          type="button"
          className="p-2 lg:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={handleToggleMenu}
        >
          <MaterialIcon name={isMenuOpen ? 'close' : 'menu'} className="text-primary" />
        </button>

        <div className="reveal-up delay-1 flex flex-1 items-center justify-center lg:flex-none lg:justify-start">
          <img src={logo01} alt="DedSec_2" className="h-10 w-auto" />
        </div>

        <nav className="hidden items-center gap-8 font-mono text-sm uppercase tracking-tighter lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-primary ${index === 0 ? 'text-primary' : ''}`.trim()}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#editions"
          className="neon-border hover-lift reveal-up delay-2 hidden bg-primary px-4 py-1.5 font-display text-xs font-bold tracking-tight text-black transition-all hover:bg-cyan-400 sm:inline-flex sm:px-6 sm:text-sm"
        >
          BUY NOW
        </a>
      </div>

      <nav
        id="mobile-nav"
        className={`${isMenuOpen ? 'max-h-80 border-t border-white/10 py-3' : 'max-h-0'} overflow-hidden px-4 transition-all duration-300 lg:hidden`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 font-mono text-xs uppercase tracking-wider sm:text-sm">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={`py-1.5 transition-colors hover:text-primary ${index === 0 ? 'text-primary' : ''}`.trim()}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#editions"
            onClick={closeMenu}
            className="mt-1 inline-flex w-fit border border-primary px-4 py-2 font-display text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-black"
          >
            BUY NOW
          </a>
        </div>
      </nav>
    </header>
  )
}
