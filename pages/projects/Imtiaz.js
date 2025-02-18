"use client"

import { Typography, Button, Carousel as AntCarousel, Timeline } from "antd"
import Image from "next/image"
import { Card, List, Row, Col } from "antd"
import App from "@/components/Layout"

export default function Home() {
  const { Title, Paragraph } = Typography

  // HeroImtiaz component
  const Hero = () => (
    <div className="bg-blue-50 py-20">
      <div className="极container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Title level={1} className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Imtiaz Project
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6">
            Supporting brilliant students from disadvantaged backgrounds to achieve their full potential.
          </Paragraph>
          <Button type="primary" size="large" className="bg-green-500 hover:bg-green-600 border-none">
            Learn More
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="Imtiaz Project Hero"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )

  // AboutImtiaz component
  const About = () => (
    <div id="about" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          About Imtiaz Project
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semib极old text-green-600 mb-4">
              Our Mission
            </Title>
            <Paragraph className="text-green-800">
              To support and empower brilliant students from disadvantaged backgrounds, guiding them towards academic
              excellence and professional success.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Vision
            </Title>
            <Paragraph className="text-green-800">
              To create a generation of leaders who are academically excellent, morally upright, and socially
              responsible.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Values
            </Title>
            <Paragraph className="text-green-800">
              Excellence, Integrity, Empowerment, Social Responsibility, and Continuous Learning.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )

  // Objectives component
  const Objectives = () => {
    const objectives = [
      "Develop the educational level and ethical aspect of young people",
      "Work on developing educational, behavioral, and relational skills",
      "Teach a set of skills to interact with oneself and others",
      "Teach skills to manage one's action plan in life to achieve goals",
      "Empower young people through coaching and individual advice",
      "Help in acquiring necessary resources to improve educational conditions",
    ]

    return (
      <div id="objectives" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            Our Objectives
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6 text-center">
            The Imtiaz project aims to achieve the following objectives:
          </Paragraph>
          <List
            dataSource={objectives}
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

  // Expectation component
  const Expectations = () => {
    const expectations = [
      {
        title: "Information and Guidance",
        description: "Provide information and orientation for future high school graduates",
      },
      { title: "Quality Education", description: "Access to quality training institutions" },
      { title: "Financial Support", description: "Provide financial support to meet students' needs" },
      {
        title: "Career Guidance",
        description: "Offer support and advice for option choices and integration into professional life",
      },
      { title: "Success Opportunities", description: "Increase chances of success in professional life" },
      { title: "Personal Development", description: "Provide coaching and personal development sessions" },
    ]

    return (
      <div id="expectations" className="py-20 bg-green-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
            Student Expectations
          </Title>
          <Row gutter={[16, 16]}>
            {expectations.map((expectation, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card className="h-full shadow-lg">
                  <Title level={4} className="text-lg font-semibold text-green-600 mb-2">
                    {expectation.title}
                  </Title>
                  <Paragraph className="text-green-800">{expectation.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }

  // Commitement component
  const Commitment = () => {
    const commitments = [
      "Information and guidance meetings for Baccalaureate candidates",
      "Annual training plan on different axes of the wheel of life",
      "Monthly scholarship to meet students' minimal needs",
      "Support for access to housing in case of major problems",
      "Computer equipment according to availability",
      "Coaching or psychological support by a professional",
      "Language proficiency support",
      "Assistance in finding internships and jobs",
      "Leadership reinforcement",
    ]

    return (
      <div id="commitment" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            Our Commitment
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6 text-center">
            We are committed to supporting our students through various actions:
          </Paragraph>
          <Timeline mode="alternate">
            {commitments.map((commitment, index) => (
              <Timeline.Item key={index} color={index % 2 === 0 ? "blue" : "green"}>
                <Paragraph className="text-blue-700">{commitment}</Paragraph>
              </Timeline.Item>
            ))}
          </Timeline>
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
      <Objectives />
      <Expectations />
      <Commitment />
      <Carousel />
    </App>
  )
}
