"use client"

import { Typography, Button, Carousel as AntCarousel } from "antd"
import Image from "next/image"
import { Card, List, Row, Col, Avatar } from "antd"
import App from "@/components/Layout"

export default function Home() {
  const { Title, Paragraph } = Typography

  // HeroRayahan component
  const Hero = () => (
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

  // AboutRayhana component
  const About = () => (
    <div id="about" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          About Rihana As-Salam
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Foundation
            </Title>
            <Paragraph className="text-green-800">
              Inaugurated in 2013 in partnership with the Regional Directorate of Anfa at El Bachiri School, affiliated
              with the As-Salam Foundation for Social Development, Casablanca-Anfa section.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Approach
            </Title>
            <Paragraph className="text-green-800">
              We focus on developing children's social, cognitive, and emotional skills through directed activities and
              play in a safe and inspiring educational environment.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Capacity
            </Title>
            <Paragraph className="text-green-800">
              The preschool has two equipped rooms to welcome children, providing a comfortable and stimulating learning
              environment for our young learners.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )

  // ObjectivesRayhana component
  const Objectives = () => {
    const objectives = [
      "Develop children's skills in language, mathematics, and arts",
      "Strengthen cooperation and teamwork skills",
      "Encourage critical thinking and creativity in children",
      "Build a healthy relationship between the child and their educational environment",
      "Improve children's learning level before entering primary school",
      "Foster social relationships among children",
      "Discover children's specific talents and skills from an early age",
    ]

    return (
      <div id="objectives" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            Our Objectives
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6 text-center">At Rihana As-Salam, we aim to:</Paragraph>
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

  // TargetAudience component
  const TargetAudience = () => (
    <div id="target" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          Our Target Audience
        </Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card className="h-full shadow-lg text-center">
              <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
                Age Group
              </Title>
              <Paragraph className="text-green-800 text-lg">Children aged 4 to 5 years</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card className="h-full shadow-lg text-center">
              <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
                Educational Stage
              </Title>
              <Paragraph className="text-green-800 text-lg">Children in the preschool phase</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )

  // EducationProgram component
  const EducationProgram = () => {
    const programAreas = [
      { title: "Basic Skills", description: "Reading, writing, and arithmetic" },
      { title: "Recreational Activities", description: "Drawing, music, and theater" },
      { title: "Language Development", description: "Enhancing linguistic skills" },
      { title: "Social Skills", description: "Promoting cooperation and teamwork" },
      { title: "Emotional Growth", description: "Developing emotional intelligence" },
      { title: "Creativity", description: "Stimulating artistic sensitivity through hands-on activities" },
    ]

    return (
      <div id="program" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            Our Educational Program
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6 text-center">
            Our program is based on approved pedagogical methods, focusing on developing core competencies:
          </Paragraph>
          <Row gutter={[16, 16]}>
            {programAreas.map((area, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card className="h-full shadow-lg">
                  <Title level={4} className="text-lg font-semibold text-blue-600 mb-2">
                    {area.title}
                  </Title>
                  <Paragraph className="text-blue-800">{area.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }

  // ActivitiesRayhana component
  const Activities = () => {
    const activities = [
      {
        category: "Educational Activities",
        items: [
          "Learning letters, numbers, and colors",
          "Educational games to stimulate critical thinking",
          "Storytelling to improve listening and concentration",
        ],
      },
      {
        category: "Physical Activities",
        items: ["Group games to reinforce cooperation", "Physical exercises to improve coordination"],
      },
      {
        category: "Social and Emotional Activities",
        items: [
          "Peer communication skills",
          "Educational sessions on values like friendship and respect",
          "Group and individual problem-solving exercises",
        ],
      },
      {
        category: "Creative and Artistic Activities",
        items: ["Drawing and coloring", "Crafting with simple and safe materials", "Music, dance, and theater activities"],
      },
    ]

    return (
      <div id="activities" className="py-20 bg-green-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
            Our Activities
          </Title>
          <Row gutter={[16, 16]}>
            {activities.map((activity, index) => (
              <Col xs={24} md={12} key={index}>
                <Card className="h-full shadow-lg">
                  <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
                    {activity.category}
                  </Title>
                  <ul className="list-disc pl-5">
                    {activity.items.map((item, idx) => (
                      <li key={idx} className="text-green-800 mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }

  // TeamRayhana component
  const Team = () => {
    const teamMembers = [
      { role: "Preschool Teacher", count: 2, avatar: "/placeholder.svg" },
      { role: "Teaching Assistant", count: 1, avatar: "/placeholder.svg" },
    ]

    return (
      <div className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            Our Educational Team
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-lg">
                <Avatar size={64} src={member.avatar} className="mb-4" />
                <Title level={4} className="text-lg font-semibold text-blue-600 mb-2">
                  {member.role}
                </Title>
                <Paragraph className="text-blue-800">
                  {member.count} {member.count > 1 ? "members" : "member"}
                </Paragraph>
              </Card>
            ))}
          </div>
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
      <TargetAudience />
      <EducationProgram />
      <Activities />
      <Team />
      <Carousel />
    </App>
  )
}
