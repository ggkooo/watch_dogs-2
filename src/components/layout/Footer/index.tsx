import { MaterialIcon } from '../../ui/MaterialIcon'
import logo01 from '../../../assets/logo-01.png'

const footerColumns = [
  {
    title: 'Company',
    links: ['About Us', 'Ubisoft', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Account Security', 'Contact Us'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Use', 'Cookie Settings'],
  },
]

const socialIcons = ['facebook', 'alternate_email', 'smart_display']

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-dark px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 md:mb-16 md:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h5 className="mb-6 font-display text-xs font-bold uppercase tracking-widest text-primary">{column.title}</h5>
              <ul className="space-y-3 font-mono text-xs text-slate-500">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 md:col-span-1">
            <h5 className="mb-6 font-display text-xs font-bold uppercase tracking-widest text-primary">Connect</h5>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center border border-white/10 hover:border-primary"
                >
                  <MaterialIcon name={icon} className="text-sm transition-colors group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <div className="reveal-up delay-1 flex items-center">
            <img src={logo01} alt="DedSec_2" className="h-10 w-auto" />
          </div>

          <div className="space-y-1 text-center md:text-right">
            <p className="font-mono text-[10px] leading-relaxed text-slate-600">
              © 2016?2024 Ubisoft Entertainment. All Rights Reserved. WATCH_DOGS, Ubisoft and the Ubisoft logo are
              trademarks of Ubisoft Entertainment.
            </p>
            <p className="font-mono text-[10px] text-slate-500">© 2026 Giordano Bruno Biasi Berwig</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
