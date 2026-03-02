import { MaterialIcon } from '../../ui/MaterialIcon'

const editions = [
  {
    name: 'Standard',
    price: '$59.99',
    description: 'Base game and Pre-order bonus mission.',
    features: ['Watch Dogs 2 Base Game', 'Zodiac Killer Mission'],
    highlighted: false,
  },
  {
    name: 'Deluxe',
    price: '$69.99',
    description: 'Base game + 2 Deluxe personalization packs.',
    features: ['Watch Dogs 2 Base Game', 'Zodiac Killer Mission', 'Punk Rock Pack', 'Urban Artist Pack'],
    highlighted: true,
  },
  {
    name: 'Gold',
    price: '$99.99',
    description: 'Base game + Season Pass + Deluxe Packs.',
    features: ['All Deluxe Content', 'Season Pass Access', 'Early Mission Access'],
    highlighted: false,
  },
]

export function EditionsSection() {
  return (
    <section id="editions" className="mx-auto max-w-7xl scroll-mt-20 border-t border-white/5 px-4 py-14 sm:px-6 sm:py-20">
      <div className="reveal-up delay-1 mb-12 text-center sm:mb-16">
        <h2 className="font-display mb-4 text-3xl font-black uppercase italic tracking-tighter sm:text-4xl">
          Choose Your <span className="text-primary">Edition</span>
        </h2>
        <p className="font-mono text-xs text-slate-500 sm:text-sm">Join the resistance with the right gear.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {editions.map((edition, index) => (
          <div
            key={edition.name}
            className={`card-gradient hover-lift reveal-up relative flex flex-col p-6 transition-all hover:translate-y-[-8px] delay-${index + 1} sm:p-8 ${
              edition.highlighted
                ? 'border-2 border-primary shadow-[0_0_30px_rgba(0,240,255,0.15)] md:scale-105'
                : 'border border-white/5'
            }`}
          >
            {edition.highlighted ? (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 text-center font-display text-[10px] font-bold uppercase text-black">
                Most Popular
              </div>
            ) : null}

            <h3
              className={`font-display mb-2 text-xl font-bold uppercase ${edition.highlighted ? 'text-primary' : ''}`.trim()}
            >
              {edition.name}
            </h3>
            <p className="mb-7 font-mono text-xs text-slate-400 sm:mb-8">{edition.description}</p>

            <div className="font-display mb-8 text-3xl font-bold">{edition.price}</div>

            <ul className="mb-10 flex-1 space-y-3">
              {edition.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 font-mono text-xs text-slate-300">
                  <MaterialIcon name="check" className="text-sm text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 font-display text-sm font-bold uppercase transition-all ${
                edition.highlighted
                  ? 'glow-pulse bg-primary text-black hover:bg-cyan-400'
                  : 'hover-lift border border-primary text-primary hover:bg-primary hover:text-black'
              }`}
            >
              Purchase
            </button>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center font-mono text-[11px] leading-relaxed text-slate-500 sm:text-xs">
        Ou, compre em alguma plataforma digital:{' '}
        <a
          href="https://store.steampowered.com/app/447040/Watch_Dogs_2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition-colors hover:text-cyan-400"
        >
          Steam
        </a>
        ,{' '}
        <a
          href="https://store.ubisoft.com/ofertas/watch_dogs--2/574d3a8aca1a64fb3b8b4567.html?lang=pt_BR&_gl=1*a6i78x*_gcl_au*MTQwMTQzOTcwMS4xNzcyNDQ4NjUy*_ga*MjgwNjMyOTE2LjE3NzI0NDg2NTI.*_ga_C4N5020N2R*czE3NzI0NTA5MTYkbzIkZzEkdDE3NzI0NTE5NjAkajYwJGwwJGgw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition-colors hover:text-cyan-400"
        >
          Ubisoft
        </a>{' '}
        ou{' '}
        <a
          href="https://store.epicgames.com/pt-BR/p/watch-dogs-2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition-colors hover:text-cyan-400"
        >
          Epic Games
        </a>
        .
      </p>
    </section>
  )
}
