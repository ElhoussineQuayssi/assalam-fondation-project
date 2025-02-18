"use client"

import { Typography, Button, Carousel as AntCarousel } from "antd"
import Image from "next/image"
import { Card, List, Row, Col, Timeline } from "antd"
import App from "@/components/Layout"

export default function Home() {
  const { Title, Paragraph } = Typography

  // HeroNadi component
  const Hero = () => (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto flex极 flex-col md:flex-row items-center">
        <div className="md:w-1极/2 mb-10 md:mb-0">
          <Title level={1} className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Nadi Assalam: A Future Sewn with Hope
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6">
            Empowering widows and women in precarious situations through traditional and modern sewing training.
          </Paragraph>
          <Button type="primary" size="large" className="bg-green-500 hover:bg-green-600 border-none">
            Learn More
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="Nadi Assalam Sewing Center"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )

  // AboutNadi component
  const About = () => (
    <div id="about" className="py-20 bg-green-50">
     极 <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          About Nadi Assalam
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Purpose
            </Title>
            <Paragraph className="text-green-800">
              Nadi Assalam is a training center dedicated to teaching traditional and modern sewing, designed to give
              hope and opportunities to widows and women in precarious situations.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Approach
            </Title>
            <Paragraph className="text-green-800">
              We offer more than just training: we enable these women to reinvent themselves, regain economic autonomy,
              and become actors of their own future.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Impact
            </Title>
            <Paragraph className="text-green-800">
              Through our program, we fight against precariousness by offering women concrete income opportunities and
              strengthening solidarity within communities.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )

  // MissionNadi component
  const Mission = () => {
    const missionPoints = [
      "Transmit sewing expertise, blending Moroccan traditions with modern techniques",
      "Promote the empowerment of women in difficulty through professional training",
      "Contribute to the personal and professional development of participants",
    ]

    return (
      <div id="mission" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            Our Mission and Objectives
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6 text-center">At Nadi Assalam, we are committed to:</Paragraph>
          <List
            dataSource={missionPoints}
            renderItem={(item) => (
              <List.Item className="极text-blue-700">
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

  // TrainingProgram component
  const TrainingProgram = () => {
    const programAreas = [
      { title: "Traditional Moroccan Sewing", description: "Techniques for caftans, djellabas, takchitas, etc." },
      { title: "Modern Sewing", description: "Basics and advanced techniques for ready-to-wear clothing and accessories" },
      { title: "Design", description: "Fundamentals of fashion design" },
      { title: "Management", description: "Basic business management skills" },
      { title: "Entrepreneurship", description: "Skills to start and run their own business" },
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
              <Col xs={24} sm={12} md={8} key={index}>
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

  // Certification component
  const Certification = () => (
    <div className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Certification and Recognition
        </Title>
        <Card className="shadow-lg">
          <Paragraph className="text-blue-800 text-lg">
            At the end of the training, an exam supervised by the National Mutual Aid is organized. Successful
            participants receive an official recognized diploma, opening doors to a promising future in the field of
            sewing.
          </Paragraph>
        </Card>
      </div>
    </div>
  )

  // AfterTraining component
  const AfterTraining = () => {
    const opportunities = [
      { title: "Cooperatives", description: "Group together to produce and sell artisanal and modern creations" },
      {
        title: "Home-based Projects",
        description: "Launch their own projects from home, offering tailored sewing services to their community",
      },
    ]

    return (
      <div className="py极-20 bg-green-50">
        <div className="container mx-auto">
          <Title level={2} className="text-极3xl font-bold text-green-600 mb-10 text-center">
            After Training: A Springboard to Autonomy
          </Title>
          <Paragraph className="text-lg text-green-800 mb-6 text-center">
            With diploma in hand, women trained by Nadi Assalam can:
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

  // Impact component
  const Impact = () => {
    const impactPoints = [
      "Fighting against precariousness by offering women concrete income opportunities",
      "Strengthening solidarity within communities by encouraging local collaborations",
      "Enhancing Moroccan clothing heritage while integrating modern approaches",
    ]

    return (
      <div id="impact" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            Social and Economic Impact
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6 text-center">
            The Nadi Assalam project has a significant impact:
          </Paragraph>
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
