"use client"

import App from "@/components/Layout"
import Hero from "@/components/HeroImtiaz"
import About from "@/components/AboutImtiaz"
import Objectives from "@/components/Objectives"
import Expectations from "@/components/Expectation"
import Commitment from "@/components/Commitement"
import Carousel from "@/components/Carousel"
import PhotoSlider from "@/components/PhotoSlider"


export default function Home() {
  return (
    <App>
        <Hero />
        <About />
        <Objectives />
        <Expectations />
        <Commitment />
        <Carousel/>
    </App>
  )
}

