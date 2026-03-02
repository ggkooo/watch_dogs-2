import { MaterialIcon } from '../../ui/MaterialIcon'

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[78vh] scroll-mt-20 items-center overflow-hidden md:min-h-[85vh]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD_tRSJGmGQ7Mu2Kf5KoUomURm7MtWCLeFZ-wvHirbOO0s2Fj0M4o0i4-W8rq3aJED3ovU6OuGaxxHHqp03XFhmRrNXIuiPo_fK0xRVRFVMgylTZHQyyIqvSIlwZkulzJigR7rH_ItCPNZucIoMSec0E3lg2L2wcB8_sIHrDCNeJ32AKw_-e494g6gKbQ14ew8j3EcllTyK9tQ8kTP5EPBsG8_8NyGhV4dQV46_9vKekXDHnmIs1SEueeVq6utFezIX7d3qQ2_qG0"
          alt="Cyberpunk Cityscape"
          className="soft-zoom h-full w-full object-cover grayscale opacity-60 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="reveal-up delay-1 max-w-2xl">
          <div className="mb-5 flex animate-pulse items-center gap-2 sm:mb-6">
            <div className="h-1 w-8 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs">System Breach Active</span>
          </div>

          <h1 className="font-display mb-4 text-3xl font-black uppercase italic leading-none sm:text-5xl md:text-7xl">
            JOIN <span className="glitch-text text-primary">DEDSEC.</span>
            <br />
            <span className="text-white">TAKE BACK THE CITY.</span>
          </h1>

          <p className="mb-7 max-w-md font-mono text-xs leading-relaxed text-slate-400 sm:mb-8 sm:text-sm md:text-base">
            Hack the city&apos;s infrastructure and reveal the corruption of Blume&apos;s ctOS 2.0. The
            revolution is now.
          </p>

          <button className="hover-lift group flex w-full items-center justify-center gap-3 border-2 border-primary bg-transparent px-5 py-3 font-display text-sm font-bold text-primary transition-all hover:bg-primary hover:text-black sm:w-auto sm:gap-4 sm:px-8 sm:py-4 sm:text-base">
            EXPLORE SAN FRANCISCO
            <MaterialIcon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <div className="float-slow absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <MaterialIcon name="expand_more" className="text-primary/50" />
      </div>
    </section>
  )
}
