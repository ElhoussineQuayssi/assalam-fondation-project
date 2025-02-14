"use client"

import Hero from "@/components/HeroCenter"
import About from "@/components/AboutCenter"
import Objectives from "@/components/ObjectivesCenter"
import Services from "@/components/ServicesCenter"
import TargetPopulation from "@/components/TargetPopulation"
import Team from "@/components/Team"
import Carousel from "@/components/Carousel"
import App from "@/components/Layout"


export default function Home() {
  return (
    <App>
        <Hero />
        <About />
        <Objectives />
        <Services />
        <TargetPopulation />
        <Team />
        <Carousel />
    </App>
  )
}

