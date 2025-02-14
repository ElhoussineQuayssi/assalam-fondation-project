"use client"

import Hero from "@/components/HeroRayahan"
import About from "@/components/AboutRayhana"
import Objectives from "@/components/ObjectivesRayhana"
import TargetAudience from "@/components/TargetAudience"
import EducationalProgram from "@/components/EducationProgram"
import Activities from "@/components/ActivitiesRayhana"
import Team from "@/components/TeamRayhana"
import Carousel from "@/components/Carousel"
import App from "@/components/Layout"


export default function Home() {
  return (
    <App>
        <Hero />
        <About />
        <Objectives />
        <TargetAudience />
        <EducationalProgram />
        <Activities />
        <Team />
        <Carousel />
    </App>
  )
}

