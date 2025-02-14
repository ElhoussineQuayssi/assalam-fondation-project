"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const images = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
]

export default function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  return (
    <div className="bg-blue-50 py-10">
      <div className="container mx-auto overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: `${images.length * 100}%` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full h-40 relative">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Photo ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

