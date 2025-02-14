"use client"

import { Carousel as AntCarousel } from "antd"
import Image from "next/image"

const images = ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]

export default function Carousel() {
  return (
    <div className="bg-green-50 py-20">
      <div className="container mx-auto">
        <AntCarousel autoplay className="mb-8">
          {images.map((src, index) => (
            <div key={index} className="h-64">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </AntCarousel>
      </div>
    </div>
  )
}

