"use client"

import Hero from "@/components/HeroNadi"
import About from "@/components/AboutNadi"
import Mission from "@/components/MissionNadi"
import TrainingProgram from "@/components/TrainingProgram"
import Certification from "@/components/Certification"
import AfterTraining from "@/components/AfterTraining"
import Impact from "@/components/Impact"
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

