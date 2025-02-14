import { Typography, Button } from "antd"
import Image from "next/image"

const { Title, Paragraph } = Typography

export default function Hero() {
  return (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Title level={1} className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Jardin d'Enfants Rihana As-Salam
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6">
            A safe and inspiring educational environment for preschool children, focusing on social, cognitive, and
            emotional development through directed activities and play.
          </Paragraph>
          <Button type="primary" size="large" className="bg-green-500 hover:bg-green-600 border-none">
            Learn More
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="Rihana As-Salam Preschool"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

