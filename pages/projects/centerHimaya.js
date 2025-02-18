"use client"

import { Typography, Button, Carousel as AntCarousel } from "antd"
import Image from "next/image"
import { Card, List, Row, Col, Avatar } from "antd"
import App from "@/components/Layout"

export default function Home() {
  const { Title, Paragraph } = Typography

  // HeroCenter component
  const Hero = () => (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Title level={1} className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Centre Himaya
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6">
            A national, independent foundation with a social, solidarity, and charitable vocation, based on
            volunteerism, founded in 1992.
          </Paragraph>
          <Button type="primary" size="large" className="bg-green-500 hover:bg-green-600 border-none">
            Learn More
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="Centre Himaya Hero"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )

  // AboutCenter component
  const About = () => (
    <div id="about" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          About Centre Himaya
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Foundation
            </Title>
            <Paragraph className="text-green-800">
              Centre Himaya is part of the Al Salam Foundation for Social Development, with 36 sections spread across
              several cities in the Kingdom of Morocco.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Approach
            </Title>
            <Paragraph className="text-green-800">
              We distinguish ourselves by our caring approach towards women and children in difficult situations,
              striving to overcome all obstacles that may hinder the socio-economic empowerment of women and children.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Achievement
            </Title>
            <Paragraph className="text-green-800">
              Our journey has been crowned by the opening of a multidisciplinary support center for women and children
              in difficult situations, in partnership with the Ministry of Women and Social Solidarity and the
              Provincial Directorate of Casablanca Anfa.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )

  // ObjectivesCenter component
  const Objectives = () => {
    const objectives = [
      "Develop personal capacities and skills of women and girls victims of all forms of violence, as well as women and children in difficult situations",
      "Ensure reception, listening, guidance, counseling, support, family mediation, and psycho-social support services",
      "Allow women and girls victims of violence, as well as children in difficult situations, to express the difficulties they encounter",
      "Offer individual and group consultations with trainers and specialists in psychological support, social support, personal development, family and legal counseling",
      "Provide vocational training to develop personal and technical skills of women and children in difficult situations",
      "Raise awareness and inform women and girls victims of violence about their rights and strengthen their personal and technical skills",
      "Help diagnose problems, follow protection and treatment procedures, reduce violence, and find legal solutions",
      "Facilitate socio-economic reintegration and repair individual and collective damages",
      "Participate in the work of local committees to combat violence",
      "Strengthen the personal capacities of training participants",
      "Provide women and children with skills to overcome difficulties",
    ]

    return (
      <div id="objectives" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            Our Objectives
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6 text-center">
            Centre Himaya aims to achieve the following objectives:
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

  // ServicesCenter component
  const Services = () => {
    const services = [
      { title: "Reception", description: "Continuous reception service from 9:00 AM to 4:30 PM" },
      {
        title: "Listening",
        description: "Daily listening sessions for women and girls to express their problems and expectations",
      },
      { title: "Psychological Support", description: "Weekly psychological support sessions adapted to each situation" },
      {
        title: "Legal Consultations",
        description: "Bi-monthly legal consultations and awareness workshops on women's and girls' rights",
      },
      {
        title: "Personal Development",
        description: "Training sessions focused on personal development and daily life challenges",
      },
      { title: "Social Support", description: "Social assistance for families living in precarious conditions" },
      { title: "Education Support", description: "Non-formal education classes to combat school dropout" },
      {
        title: "Medical Caravans",
        description: "Organization of medical caravans for early detection of various health issues",
      },
    ]

    return (
      <div id="services" className="py-20 bg-green-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
            Our Services
          </Title>
          <Row gutter={[16, 16]}>
            {services.map((service, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Card className="h-full shadow-lg">
                  <Title level={4} className="text-lg font-semibold text-green-600 mb-2">
                    {service.title}
                  </Title>
                  <Paragraph className="text-green-800">{service.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }

  // TargetPopulation component
  const TargetPopulation = () => {
    const targetGroups = [
      "Women and girls victims of violence",
      "Women and children in difficult situations",
      "Widows and orphans benefiting from the association's services",
      "Families and relatives of women and girls victims of violence or in difficult situations",
      "Staff of listening centers",
      "Various stakeholders in the field of combating violence at local, regional, and national levels",
    ]

    return (
      <div id="target" className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
            Target Population
          </Title>
          <Paragraph className="text-lg text-blue-800 mb-6 text-center">
            Centre Himaya focuses on supporting the following groups:
          </Paragraph>
          <List
            dataSource={targetGroups}
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

  // Team component
  const Team = () => {
    const teamMembers = [
      { role: "Coordinator", avatar: "/placeholder.svg" },
      { role: "Social Workers", avatar: "/placeholder.svg" },
      { role: "Lawyer", avatar: "/placeholder.svg" },
      { role: "Family Counseling Specialists", avatar: "/placeholder.svg" },
      { role: "Psychologists", avatar: "/placeholder.svg" },
      { role: "Personal Development Trainers", avatar: "/placeholder.svg" },
    ]

    return (
      <div className="py-20 bg-green-50">
        <div className="container mx-auto">
          <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
            Our Team
          </Title>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-lg">
                <Avatar size={64} src={member.avatar} className="mb-4" />
                <Paragraph className="text-green-800 font-semibold">{member.role}</Paragraph>
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
      <Services />
      <TargetPopulation />
      <Team />
      <Carousel />
    </App>
  )
}
