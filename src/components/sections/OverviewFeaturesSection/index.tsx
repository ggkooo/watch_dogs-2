import { MaterialIcon } from '../../ui/MaterialIcon'
import { SectionHeading } from '../../ui/SectionHeading'
import banner02 from '../../../assets/banner-02.png'

const featureCards = [
  {
    icon: 'memory',
    title: 'Hacking',
    description:
      'Everything is a tool. Hack into every connected device and take control of the city infrastructure.',
  },
  {
    icon: 'directions_run',
    title: 'Parkour',
    description:
      'Combine hacking and parkour to navigate through the streets of San Francisco with fluidity.',
  },
  {
    icon: 'map',
    title: 'Open World',
    description:
      'Explore a massive and dynamic open-world offering an incredible variety of gameplay possibilities.',
  },
  {
    icon: 'groups',
    title: 'Multiplayer',
    description:
      'Seamlessly connect with your friends in co-op and player vs. player activities.',
  },
]

export function OverviewFeaturesSection() {
  return (
    <section id="game-info" className="mx-auto grid max-w-7xl scroll-mt-20 gap-8 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-12">
      <div className="reveal-up delay-1 space-y-5 sm:space-y-6 lg:col-span-5">
        <SectionHeading icon="data_exploration" title="Game Overview" />

        <div className="hover-lift group overflow-hidden rounded-lg border border-white/5 bg-surface-dark">
          <img
            src={banner02}
            alt="San Francisco Drone View"
            className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-56"
          />
          <div className="p-5 sm:p-6">
            <p className="mb-5 font-mono text-xs leading-relaxed text-slate-400 sm:mb-6 sm:text-sm">
              Play as Marcus Holloway, a brilliant young hacker living in the birthplace of the tech
              revolution, the San Francisco Bay Area. Team up with Dedsec, a notorious group of hackers,
              to execute the biggest hack in history.
            </p>
            <a href="#" className="border-b border-primary/30 pb-1 font-mono text-xs text-primary transition-all hover:border-primary sm:text-sm">
              Learn more about Marcus -&gt;
            </a>
          </div>
        </div>
      </div>

      <div id="features" className="reveal-up delay-2 scroll-mt-20 space-y-8 lg:col-span-7">
        <SectionHeading icon="terminal" title="Features" />

        <div className="grid gap-4 sm:grid-cols-2">
          {featureCards.map((feature, index) => (
            <div
              key={feature.title}
              className={`card-gradient hover-lift reveal-up group rounded border border-white/5 p-5 transition-colors hover:border-primary/50 delay-${index + 1} sm:p-6`}
            >
              <MaterialIcon
                name={feature.icon}
                className="mb-4 text-3xl text-primary transition-transform group-hover:scale-110"
              />
              <h3 className="font-display mb-2 text-base font-bold uppercase tracking-tight sm:text-lg">{feature.title}</h3>
              <p className="font-mono text-xs leading-relaxed text-slate-400 sm:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
