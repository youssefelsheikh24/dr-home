import { useSmoothScroll } from './lib/useSmoothScroll'
import { Navbar } from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Hero } from './sections/Hero'
import { Problem } from './sections/Problem'
import { Idea } from './sections/Idea'
import { WhatIsDrHome } from './sections/WhatIsDrHome'
import { HowItWorks } from './sections/HowItWorks'
import { WhoNeeds } from './sections/WhoNeeds'
import { HomeExperience } from './sections/HomeExperience'
import { Doctors } from './sections/Doctors'
import { WhyDrHome } from './sections/WhyDrHome'
import { ContentPillars } from './sections/ContentPillars'
import { CampaignIdeas } from './sections/CampaignIdeas'
import { MainFilm } from './sections/MainFilm'
import { SocialMedia } from './sections/SocialMedia'
import { CampaignJourney } from './sections/CampaignJourney'
import { Ending } from './sections/Ending'

export default function App() {
  useSmoothScroll()

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Idea />
        <WhatIsDrHome />
        <HowItWorks />
        <WhoNeeds />
        <HomeExperience />
        <Doctors />
        <WhyDrHome />
        <ContentPillars />
        <CampaignIdeas />
        <MainFilm />
        <SocialMedia />
        <CampaignJourney />
        <Ending />
      </main>
    </>
  )
}
