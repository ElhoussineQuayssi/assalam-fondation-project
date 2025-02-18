"use client"

import { Typography, Button, Carousel as AntCarousel, Timeline } from "antd"
import Image from "next/image"
import { Card, List, Row, Col } from "antd"
import App from "@/components/Layout"

export default function Home() {
  const { Title, Paragraph } = Typography

  // HeroKafala component
  const Hero = () => (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Title level={1} className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Kafala: Sponsoring Hope for Orphans
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6">
            Join us in providing comprehensive support to orphans within their families, ensuring their well-being and
            future.
          </Paragraph>
          <Button type="primary" size="large" className="bg-green-500 hover:bg-green-600 border-none">
            Sponsor a Child
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="Kafala Project"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )

  // ProjectOverviewKafala component
  const ProjectOverview = () => (
    <div id="overview" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          Project Overview
        </Title>
        <Card className="shadow-lg">
          <Paragraph className="text-green-800 text-lg">
            Several studies conducted by national and international organizations have shown that some children in our
            country are exposed to deviation, delinquency, vagrancy, or even crime. In the majority of cases, among the
            main direct or indirect causes, we find poverty or orphanhood in the first place.
          </Paragraph>
          <Paragraph className="text-green-800 text-lg mt-4">
            Our project aims to provide comprehensive assistance to orphans and allow them to flourish in their natural
            environment - their family. This includes social, educational, psychological, and medical support.
          </Paragraph>
        </Card>
      </div>
    </div>
  )

  // ObjectivesKafala component
  const Objectives = () => {
    const objectives = [
      "Provide comprehensive assistance to orphans",
      "Enable orphans to thrive in their natural family environment",
      "Offer social support",
      "Provide educational assistance",
      "Ensure psychological care",
      "Guarantee medical support",
    ]

    return (
      <div id="objectives" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            General Objective of the Project
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6 text-center">
            Offer comprehensive protection to orphans within their families.
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

  // SponsorShipFormulas component
  const SponsorshipFormulas = () => {
    const formulas = [
      { title: "Global Sponsorship", description: "Covers basic needs and occasional needs" },
      { title: "Basic Sponsorship", description: "Covers the orphan's basic needs (food, education, and health)" },
      { title: "School Sponsorship", description: "Sponsor can choose for the orphan to attend a private primary school" },
      { title: "Family Sponsorship", description: "Covers the basic needs of an orphan family (2 or more)" },
      { title: "Occasional Sponsorship", description: "Contribute to specific projects or occasions" },
    ]

    return (
      <div id="formulas" className="py-20 bg-green-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
            Sponsorship Formulas
          </Title>
          <Row gutter={[16, 16]}>
            {formulas.map((formula, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card className="h-full shadow-lg">
                  <Title level={4} className="text-lg font-semibold text-green-600 mb-2">
                    {formula.title}
                  </Title>
                  <Paragraph className="text-green-800">{formula.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }

  // Timeline component
  const TimelineComponent = () => {
    const projects = [
      { name: "Back to School", date: "September" },
      { name: "Ramadan Basket", date: "Ramadan" },
      { name: "Summer Camps", date: "July-August" },
      { name: "Eid Al Fitr Joy", date: "Eid Al Fitr" },
      { name: "Eid Al Adha Joy", date: "Eid Al Adha" },
    ]

    return (
      <div id="projects" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            Annual Project Timeline
          </Title>
          <Timeline mode="alternate">
            {projects.map((project, index) => (
              <Timeline.Item key={index} color={index % 2 === 0 ? "green" : "blue"}>
                <Title
                  level={4}
                  className={`text-lg font-semibold ${index % 2 === 0 ? "text-green-600" : "text-blue-600"}`}
                >
                  {project.name}
                </Title>
                <p className={index % 2 === 0 ? "text-green-800" : "text-blue-800"}>{project.date}</p>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    )
  }

  // ProjectDescriptions component
  const ProjectDescriptions = () => {
    const projects = [
      {
        title: "Back to School",
        description: "Distribution of school bags to orphans, encouraging education and fighting against school dropout.",
      },
      {
        title: "Ramadan Basket",
        description:
          "Providing basic food items to families during the holy month of Ramadan, supporting our social service mission.",
      },
      {
        title: "Summer Camps",
        description:
          "Organizing summer camps for orphans and underprivileged children in collaboration with specialized associations.",
      },
      {
        title: "Eid Al Fitr Joy",
        description:
          "Offering new clothes and shoes to orphans and children from needy families for Eid El Fitr, bringing joy and equality.",
      },
      {
        title: "Eid Al Adha Joy",
        description:
          "Providing assistance to acquire the Eid lamb for needy families, celebrating the spirit of generosity and solidarity.",
      },
    ]

    return (
      <div className="py-20 bg-green-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
            Project Descriptions
          </Title>
          <Row gutter={[16, 16]}>
            {projects.map((project, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card className="h-full shadow-lg">
                  <Title level={4} className="text-lg font-semibold text-green-600 mb-2">
                    {project.title}
                  </Title>
                  <Paragraph className="text-green-800">{project.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
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
      <ProjectOverview />
      <Objectives />
      <SponsorshipFormulas />
      <TimelineComponent />
      <ProjectDescriptions />
      <Carousel />
    </App>
  )
}
