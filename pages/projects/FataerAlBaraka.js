"use client"

import { Typography, Button, Carousel as AntCarousel } from "antd"
import Image from "next/image"
import { Card, List, Row, Col } from "antd"
import App from "@/components/Layout"

export default function Home() {
  const { Title, Paragraph } = Typography

  // HeroBaraka component
  const Hero = () => (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Title level={1} className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Fataer Al Baraka: A Project of Hope and Renewal
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6">
            Empowering women through professional pastry training and preserving Moroccan culinary traditions.
          </Paragraph>
          <Button type="primary" size="large" className="bg-green-500 hover:bg-green-600 border-none">
            Learn More
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="Fataer Al Baraka Pastry Center"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )

  // AboutBaraka component
  const About = () => (
    <div id="about" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          About Fataer Al Baraka
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Purpose
            </Title>
            <Paragraph className="text-green-800">
              Fataer Al Baraka is a training center dedicated to teaching Moroccan pastry and cake production, serving
              as a springboard towards autonomy and personal fulfillment for women in precarious situations.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Approach
            </Title>
            <Paragraph className="text-green-800">
              We honor Moroccan culinary tradition by enabling women to transform their passion for pastry into a real
              life opportunity, particularly widows and vulnerable women.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Impact
            </Title>
            <Paragraph className="text-green-800">
              Through our program, we fight against precariousness by offering women concrete professional opportunities
              and strengthening the spirit of solidarity within local communities.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )

  // MissionBaraka component
  const Mission = () => {
    const missionPoints = [
      "Offer quality professional training in Moroccan pastry and cakes",
      "Contribute to the economic empowerment of women in difficulty",
      "Preserve and enhance Moroccan culinary art",
    ]

    return (
      <div id="mission" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Our Mission and Objectives
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6 text-center">
            At Fataer Al Baraka, we are committed to:
          </Paragraph>
          <List
            dataSource={missionPoints}
            renderItem={(item) => (
              <List.Item className="text-blue-700">
                <List.Item.Meta
                  avatar={<div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>}
                  description={item}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }

  // TrainingProgramBaraka component
  const TrainingProgram = () => {
    const programAreas = [
      { title: "Moroccan Pastry Techniques", description: "Basic and advanced techniques of Moroccan pastry" },
      { title: "Cake Production", description: "Skills for producing various Moroccan cakes" },
      { title: "Management Skills", description: "Basic business management skills" },
      { title: "Entrepreneurship", description: "Skills to develop individual or collective projects" },
    ]

    return (
      <div id="program" className="py-20 bg-green-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
            Our Training Program
          </Title>
          <Paragraph className="text-lg text-green-800 mb-6 text-center">Our 9-month program covers:</Paragraph>
          <Row gutter={[16, 16]}>
            {programAreas.map((area, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card className="h-full shadow-lg">
                  <Title level={4} className="text-lg font-semibold text-green-600 mb-2">
                    {area.title}
                  </Title>
                  <Paragraph className="text-green-800">{area.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }

  // CertificationBaraka component
  const Certification = () => (
    <div className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <Title level={2} className="text-极3xl font-bold text-blue-600 mb-10 text-center">
          Certification and Recognition
        </Title>
        <Card className="shadow-lg">
          <Paragraph className="text-blue-800 text-lg">
            At the end of the training, an exam organized and supervised in partnership with the National Mutual Aid
            allows participants to obtain a certified and officially recognized diploma. This diploma is a true passport
            to employment and autonomy.
          </Paragraph>
        </Card>
      </div>
    </div>
  )

  // AfterTrainingBaraka component
  const AfterTraining = () => {
    const opportunities = [
      { title: "Cooperatives", description: "Group together to form cooperatives in the culinary sector" },
      {
        title: "Home-based Projects",
        description: "Launch their own projects from home, offering traditional pastries to individuals and professionals",
      },
    ]

    return (
      <div className="py-20 bg-green-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-green-极600 mb-10 text-center">
            After Training: A Promising Future
          </Title>
          <Paragraph className="text-lg text-green-800 mb-6 text-center">
            Thanks to this training, participants can:
          </Paragraph>
          <Row gutter={[16, 16]} justify="center">
            {opportunities.map((opportunity, index) => (
              <Col xs={24} md={12} key={index}>
                <Card className="h-full shadow-lg">
                  <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
                    {opportunity.title}
                  </Title>
                  <Paragraph className="text-green-800">{opportunity.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }

  // ImpactBaraka component
  const Impact = () => {
    const impactPoints = [
      "Fighting against precariousness by offering concrete professional opportunities",
      "Strengthening the spirit of solidarity and cooperation within local communities",
      "Enhancing the role of women in economic and social development",
      "Preserving and promoting Moroccan culinary heritage",
    ]

    return (
      <div id="impact" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            Social Impact
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6 text-center">Fataer Al Baraka contributes to:</Paragraph>
          <List
            dataSource={impactPoints}
            renderItem={(item) => (
              <List.Item className="text-blue-700">
                <List.Item.Meta
                  avatar={<div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>}
                  description={item}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }

  // Carousel component
  const Carousel = () => {
    const images = ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]

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
