import { useRef, useState } from 'react'
import { MaterialIcon } from '../../ui/MaterialIcon'
import { SectionHeading } from '../../ui/SectionHeading'
import banner01 from '../../../assets/banner-01.png'
import banner02 from '../../../assets/banner-04.png'
import banner03 from '../../../assets/banner-03.png'

const mediaItems = [
  {
    title: 'DedSec Banner 01',
    image: banner01,
    alt: 'DedSec Banner 01',
    highlight: false,
  },
  {
    title: 'DedSec Banner 02',
    image: banner02,
    alt: 'DedSec Banner 02',
    highlight: true,
  },
  {
    title: 'DedSec Banner 03',
    image: banner03,
    alt: 'DedSec Banner 03',
    highlight: false,
  },
]

export function MediaHubSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideAnimation, setSlideAnimation] = useState<'media-pass-left' | 'media-pass-right' | ''>('')
  const animationTimeoutRef = useRef<number | null>(null)
  const orderedMediaItems = mediaItems.map((_, index) => mediaItems[(currentSlide + index) % mediaItems.length])

  const triggerPassAnimation = (direction: 'media-pass-left' | 'media-pass-right') => {
    if (animationTimeoutRef.current) {
      window.clearTimeout(animationTimeoutRef.current)
    }

    setSlideAnimation(direction)
    animationTimeoutRef.current = window.setTimeout(() => {
      setSlideAnimation('')
      animationTimeoutRef.current = null
    }, 320)
  }

  const handlePrevSlide = () => {
    triggerPassAnimation('media-pass-right')
    setCurrentSlide((current) => (current === 0 ? mediaItems.length - 1 : current - 1))
  }

  const handleNextSlide = () => {
    triggerPassAnimation('media-pass-left')
    setCurrentSlide((current) => (current === mediaItems.length - 1 ? 0 : current + 1))
  }

  return (
    <section id="media" className="scroll-mt-20 overflow-hidden bg-surface-dark/50 py-14 sm:py-20">
      <div className="mx-auto mb-8 flex max-w-7xl flex-col gap-4 px-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div className="reveal-up delay-1 space-y-2">
          <SectionHeading icon="play_circle" title="Media Hub" className="mb-0" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 sm:text-xs">Trailers &amp; Screen-captures</p>
        </div>

        <div className="reveal-up delay-2 hidden gap-3 sm:flex md:gap-4">
          <button
            type="button"
            onClick={handlePrevSlide}
            className="hover-lift flex h-10 w-10 items-center justify-center border border-white/10 transition-colors hover:bg-primary hover:text-black"
          >
            <MaterialIcon name="chevron_left" />
          </button>
          <button
            type="button"
            onClick={handleNextSlide}
            className="hover-lift flex h-10 w-10 items-center justify-center border border-white/10 transition-colors hover:bg-primary hover:text-black"
          >
            <MaterialIcon name="chevron_right" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <div className={`grid gap-6 md:grid-cols-3 ${slideAnimation}`}>
          {orderedMediaItems.map((item) => (
            <div key={item.title} className="overflow-hidden rounded border border-white/5">
              <img
                src={item.image}
                alt={item.alt}
                className="h-[220px] w-full object-cover sm:h-[280px] md:h-[320px]"
              />
            </div>
          ))}
        </div>

        <div className="mt-5 flex gap-3 sm:hidden">
          <button
            type="button"
            onClick={handlePrevSlide}
            className="hover-lift flex flex-1 items-center justify-center border border-white/10 py-2.5 transition-colors hover:bg-primary hover:text-black"
          >
            <MaterialIcon name="chevron_left" />
          </button>
          <button
            type="button"
            onClick={handleNextSlide}
            className="hover-lift flex flex-1 items-center justify-center border border-white/10 py-2.5 transition-colors hover:bg-primary hover:text-black"
          >
            <MaterialIcon name="chevron_right" />
          </button>
        </div>
      </div>
    </section>
  )
}
