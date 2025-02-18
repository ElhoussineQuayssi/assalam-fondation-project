"use client"

import { Card, Tabs, Statistic } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import Link from "next/link"
import Layout from "@/components/Layout"

const { TabPane } = Tabs

export default function ProjectsPage() {
  // Projects component
  const Projects = () => {
    const [backgroundImage, setBackgroundImage] = useState('')
    const projectItems = [
      { title: 'Kafala', description: 'Description of Kafala project.',link: 'Kafala'},
      { title: 'Nadi Assalam', description: 'Description of Nadi Assalam project.',link: 'NadiAssalam'},
      { title: 'Rayahant Assalam', description: 'Description of Rayahant Assalam project.',link: "RayhanatAssalam" },
      { title: 'Imtiaz', description: 'Description of Imtiaz project.',link:"Imtiaz" },
      { title: 'Centre Himaya', description: 'Description of Centre Himaya project.',link:"centerHimaya" },
      { title: 'Fataer AlBaraka', description: 'Description of OIO project.',link:"FataerAlBaraka" },
    ]

    return (
      <div className="projects" style={{ backgroundImage: backgroundImage }}>
        <h2 style={{ color: 'green' }}>Our Projects</h2>
        <div className="project-cards">
          {projectItems.map((item, index) => (
            <Link href={`/projects/${item.link}`} style={{height: '100%'}} key={index}>
              <div 
                key={index} 
                className="project-card" 
                style={{ backgroundColor: 'blue', color: 'lightgreen' }}
              >
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // Story component
  const Story = () => {
    const projects = [
      { id: 1, title: "Project 1", description: "Helping children with education.", img: "/bg-nous.jpg" },
      { id: 2, title: "Project 2", description: "Providing food aid to families.", img: "/bg-nous.jpg" },
      { id: 3, title: "Project 3", description: "Medical assistance for those in need.", img: "/bg-nous.jpg" },
      { id: 4, title: "Project 4", description: "Empowering women through training.", img: "/bg-nous.jpg" },
    ]

    const [currentProject, setCurrentProject] = useState(0)

    const nextProject = () => {
      setCurrentProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0))
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0))
      },3000)
      return () => clearInterval(interval)
    }, [])

    return (
      <div className="relative h-screen overflow-hidden">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
              index === currentProject ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'cover', backgroundPosition: 'top' }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
              <p className="text-lg mb-6">{project.description}</p>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-lg" onClick={nextProject}>Next Project <DownOutlined /></button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // ProjectOverview component
  const ProjectOverview = () => {
    return (
      <section className="p-12 bg-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Water Projects" cover={<img src="/path-to-image.jpg" alt="" />} >
            <p>Improving access to clean water in rural areas...</p>
          </Card>
          <Card title="Education Initiatives" cover={<img src="/path-to-image.jpg" alt="Education projects" />} >
            <p>Building schools to provide education for all children...</p>
          </Card>
          <Card title="Health Care" cover={<img src="/path-to-image.jpg" alt="Health projects" />} >
            <p>Delivering medical support to underserved communities...</p>
          </Card>
        </div>
      </section>
    )
  }

  // ProjectDetails component
  const ProjectDetails = () => {
    const projectDetailsData = [
      {
        key: "1",
        tab: "Well Drilling",
        objective: "Break the barrier of inaccessibility to drinking water...",
        items: [
          "In-depth geological studies to locate water tables",
          "Construction of wells with modern pumping systems",
          "Training locals for maintenance"
        ]
      },
      {
        key: "2",
        tab: "Building Schools",
        objective: "Provide quality education in rural areas...",
        items: [
          "Modern elementary schools with teaching materials",
          "Programs to raise awareness and encourage enrollment"
        ]
      },
      {
        key: "3",
        tab: "Mosque Construction",
        objective: "Create spaces for community and spiritual gathering...",
        items: [
          "Sustainable mosques adapted to local conditions",
          "Integration of educational spaces"
        ]
      },
      {
        key: "4",
        tab: "Pilot Project",
        objective: "An innovative self-sufficient village model...",
        items: [
          "Essential infrastructure: sewage system and roads",
          "Educational and vocational centers",
          "Community farms for food security"
        ]
      },
      {
        key: "5",
        tab: "Humanitarian Caravans",
        objective: "Immediate support during critical times...",
        items: [
          "Clothing, food, and blankets distribution",
          "Educational and recreational activities for children"
        ]
      },
      {
        key: "6",
        tab: "Medical Caravans",
        objective: "Provide medical care in underserved areas...",
        items: [
          "General and specialized consultations",
          "Free distribution of medicines",
          "Health awareness campaigns"
        ]
      }
    ]

    return (
      <section className="p-12" >
        <Tabs defaultActiveKey="1" >
          {projectDetailsData.map(project => (
            <TabPane tab={<span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{project.tab}</span>} key={project.key}>
              <p className='text-xl py-10'>Objective: {project.objective}</p>
              <ul className="list-disc p-5 flex flex-row justify-around gap-3">
                {project.items.map((item, index) => (
                  <span key={index} className='text-md p-4 flex-wrap bg-green-200 rounded-lg '>{item}</span>
                ))}
              </ul>
            </TabPane>
          ))}
        </Tabs>
      </section>
    )
  }

  // ImpactSection component
  const ImpactSection = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Impact</h2>
          <div className="flex justify-around">
            <div className="text-center">
              <h3 className="text-lg">Wells Drilled</h3>
              <Statistic value={150} suffix="Wells" />
            </div>
            <div className="text-center">
              <h3 className="text-xl">Schools Built</h3>
              <Statistic value={50} suffix="Schools" />
            </div>
            <div className="text-center">
              <h3 className="text-xl">People Helped</h3>
              <Statistic value={20000} suffix="People" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Partners component
  const Partners = () => {
    return (
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="/path-to-logo1.png" alt="Partner 1" className="w-24" />
          <img src="/path-to-logo2.png" alt="Partner 2" className="w-24" />
          <img src="/path-to-logo3.png" alt="Partner 3" className="w-24" />
        </div>
      </section>
    )
  }

  // CallToAction component
  const CallToAction = () => {
    return (
      <section className="bg-blue-500 py-12 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Us in Building a Better Future</h2>
        <p className="mb-6">Together, we can transform lives. Your support can make a difference.</p>
        <Link href="/donate">
          <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600">Donate Now</button>
        </Link>
      </section>
    )
  }

  return (
    <Layout id={2}>
      <Story/>
      <Projects/>
      <ProjectOverview/>
      <ProjectDetails/>
      <ImpactSection/>
      <Partners/>
      <CallToAction/>
    </Layout>
  )
}
