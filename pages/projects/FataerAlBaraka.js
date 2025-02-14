"use client"

import Hero from "@/components/HeroBaraka"
import About from "@/components/AboutBaraka"
import Mission from "@/components/MissionBaraka"
import TrainingProgram from "@/components/TrainingProgramBaraka"
import Certification from "@/components/CertificationBaraka"
import AfterTraining from "@/components/AfterTrainingBaraka"
import Impact from "@/components/ImpactBaraka"
import Carousel from "@/components/Carousel"
import App from "@/components/Layout"


export default function Home() {
  return (
    <App>
        <Hero />
        <About />
        <Mission />
        <TrainingProgram />
        <Certification />
        <AfterTraining />
        <Impact />
        <Carousel />
    </App>
  )
}

