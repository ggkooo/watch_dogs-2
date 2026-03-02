import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { HackerConsole } from './components/layout/HackerConsole'
import { EditionsSection } from './components/sections/EditionsSection'
import { HeroSection } from './components/sections/HeroSection'
import { MediaHubSection } from './components/sections/MediaHubSection'
import { NewsWorldSection } from './components/sections/NewsWorldSection'
import { OverviewFeaturesSection } from './components/sections/OverviewFeaturesSection'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background-light text-slate-900 selection:bg-primary selection:text-black dark:bg-background-dark dark:text-slate-100">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <OverviewFeaturesSection />
        <MediaHubSection />
        <NewsWorldSection />
        <EditionsSection />
      </main>
      <Footer />
      <HackerConsole />
    </div>
  )
}

export default App
