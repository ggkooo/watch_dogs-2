import { useState } from 'react'
import mapImage from '../../../assets/map.png'
import { SectionHeading } from '../../ui/SectionHeading'

const newsItems = [
  {
    tag: 'Update 1.15',
    date: 'JAN 18, 2024',
    title: 'T-Bone Content Bundle Now Available',
    description: 'Explore the new missions and gear including the legendary school bus...',
    featured: true,
  },
  {
    tag: 'Community',
    date: 'JAN 12, 2024',
    title: 'Top 10 Community Hacks of the Month',
  },
  {
    tag: 'Events',
    date: 'JAN 05, 2024',
    title: 'DedSec SF Meetup: Winners Announced',
  },
  {
    tag: 'Patch Notes',
    date: 'DEC 28, 2023',
    title: 'Security and Stability Improvements 1.14.2',
  },
  {
    tag: 'Dev Blog',
    date: 'DEC 19, 2023',
    title: 'Inside DedSec: Crafting New Co-op Challenges',
  },
  {
    tag: 'Community',
    date: 'DEC 10, 2023',
    title: 'Photo Mode Spotlight: Best Shots from Oakland',
  },
  {
    tag: 'Events',
    date: 'NOV 30, 2023',
    title: 'Weekend Hackathon Live Now with Double Rewards',
  },
  {
    tag: 'Update 1.14',
    date: 'NOV 21, 2023',
    title: 'New Outfits, Drone Skins, and QoL Tweaks Released',
  },
]

export function NewsWorldSection() {
  const [showAllNews, setShowAllNews] = useState(false)
  const visibleNews = showAllNews ? newsItems : newsItems.slice(0, 3)

  return (
    <section id="community" className="mx-auto grid max-w-7xl scroll-mt-20 gap-10 px-4 py-14 sm:gap-16 sm:px-6 sm:py-20 lg:grid-cols-2">
      <div className="reveal-up delay-1">
        <SectionHeading icon="rss_feed" title="Latest News" className="mb-8" />

        <div className="space-y-4">
          {visibleNews.map((item, index) => (
            <div
              key={item.title}
              className={`hover-lift reveal-up group cursor-pointer border-l-4 bg-surface-dark p-4 transition-colors hover:bg-zinc-800 delay-${index + 1} sm:p-6 ${
                item.featured ? 'border-primary' : 'border-transparent hover:border-primary/50'
              }`}
            >
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{item.tag}</span>
                <span className="font-mono text-[10px] text-slate-500">{item.date}</span>
              </div>
              <h4 className="font-display text-sm font-bold transition-colors group-hover:text-primary sm:text-base">{item.title}</h4>
              {item.description ? <p className="mt-2 line-clamp-2 font-mono text-xs text-slate-400 sm:line-clamp-1">{item.description}</p> : null}
            </div>
          ))}

          <button
            type="button"
            onClick={() => setShowAllNews((current) => !current)}
            className="hover-lift w-full border border-white/10 py-3 font-mono text-[10px] uppercase tracking-widest transition-all hover:bg-white hover:text-black sm:py-4 sm:text-xs"
          >
            {showAllNews ? 'Show Less News' : 'View All News'}
          </button>
        </div>
      </div>

      <div className="reveal-up delay-2 flex flex-col">
        <SectionHeading icon="public" title="Explore The World" className="mb-8" />

        <div className="relative min-h-[260px] flex-1 overflow-hidden rounded border border-white/10 bg-slate-900 sm:min-h-[300px]">
          <img
            src={mapImage}
            alt="Map View"
            className="h-full w-full object-cover opacity-25 mix-blend-luminosity"
          />

          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0c_100%)]" />
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]"
            style={{ backgroundSize: '100% 2px, 3px 100%' }}
          />

          <div className="float-slow absolute left-1/3 top-1/2 flex -translate-y-1/2 flex-col items-center">
            <div className="h-4 w-4 animate-ping rounded-full bg-primary" />
            <div className="absolute top-1 h-2 w-2 rounded-full bg-primary" />
            <div className="mt-4 bg-primary px-2 py-1 font-mono text-[9px] font-bold text-black sm:text-[10px]">CTOS_NODE_01</div>
          </div>

          <div className="absolute bottom-3 left-3 font-mono text-[9px] text-primary/60 sm:bottom-4 sm:left-4 sm:text-[10px]">
            LAT: 37.7749° N
            <br />
            LNG: 122.4194° W
          </div>
        </div>
      </div>
    </section>
  )
}
