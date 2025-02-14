"use client"

import Hero from "@/components/HeroKafala"
import ProjectOverview from "@/components/ProjectOverviewKafala"
import Objectives from "@/components/ObjectivesKafala"
import SponsorshipFormulas from "@/components/SponsorShipFormulas"
import Timeline from "@/components/Timeline"
import ProjectDescriptions from "@/components/ProjectDescriptions"
import App from "@/components/Layout"
import Carousel from "@/components/Carousel"


export default function Home() {
  return (
    <App>

        <Hero />
        <ProjectOverview />
        <Objectives />
        <SponsorshipFormulas />
        <Timeline />
        <ProjectDescriptions />
        <Carousel/>
    </App>
  )
}

