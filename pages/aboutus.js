"use client"

import { Collapse, Carousel } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faPencil, faGraduationCap, faBrain } from "@fortawesome/free-solid-svg-icons"
import App from '@/components/Layout'
import { useState } from "react"

export default function AboutUs() {
  const { Panel } = Collapse

  // HeroAboutUs component
  const HeroAboutUs = () => (
    <div className="hero-about-us bg-[url('/bg-nous.jpg')] bg-cover bg-top h-fit md:h-screen text-white relative p-5">
      <h1 className="z-20 m-0 text-5xl text-blue-500">About Us</h1>
      <p className="z-20 m-5 text-lg w-3/5 text-green-500">
        At the assalam foundation for social development Casablanca anfa, we believe in a world where everyone, no matter where they live, has access to the resources they need to thrive. Our projects, rooted in the most remote rural areas, aim to provide sustainable solutions and create a tangible impact on the most vulnerable communities. Discover how we work every day to build brighter futures.
      </p>
    </div>
  )

  // Description component
  const Description = () => {
    const collapseItems = [
      {
        key: '1',
        label: 'Our Mission',
        children: 'The foundation aims to enhance and improve the quality of life for individuals and families in vulnerable situations, preserving their human dignity through sustainable development programs. '
      },
      {
        key: '2',
        label: 'Our Values',
        children: 'Acting with kindness and mutual assistance towards vulnerable individuals, Ensuring transparent and responsible management of resources, Seeking innovation and excellence in program implementation, Working collaboratively with various stakeholders to maximize the impact of actions.'
      },
      {
        key: '3',
        label: 'Our Impact',
        children: 'Since its inception, the foundation has actively contributed to improving the living conditions of individuals facing poverty, precariousness, or social exclusion.'
      }
    ]

    return (
      <div className="bg-green-200 p-10 min-h-screen">
        <h2 className="text-green-600 text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <p className="text-black text-base mb-8">
              At the assalam foundation for social development Casablanca anfa, we believe in a world where everyone, no matter where they live, has access to the resources they need to thrive. Our projects, rooted in the most remote rural areas, aim to provide sustainable solutions and create a tangible impact on the most vulnerable communities. Discover how we work every day to build brighter futures.
            </p>
            <Collapse accordion className="bg-blue-200" items={collapseItems} />
          </div>
          <div className="flex-1">
            <div className="w-full h-full bg-gray-300 rounded-lg overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
              >
                <source src="/videos/about-us.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Vision component
  const Vision = () => (
    <div className="bg-blue-200 p-10 min-h-fit">
      <div className="flex flex-col md:flex-row-reverse gap-8">
        <div className="flex-[2]">
          <h2 className="text-2xl text-blue-800 font-bold mb-4">Our Vision</h2>
          <p className="text-base mb-8">
          create a world where every individual, regardless of where they live, has access to essential resources to thrive. They aim to empower the most vulnerable communities, especially those in isolated rural areas, by providing sustainable solutions that improve their quality of life. The foundation's focus is on bringing about tangible, positive change and fostering community development to ensure long-term benefits for those in need.
          </p>
        </div>
        <div className="flex-1 max-w-[500px]">
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Carousel autoplay>
              <div>
                <img src="/images/vision1.jpg" alt="Vision 1" className="w-full h-96 object-cover" />
              </div>
              <div>
                <img src="/images/vision2.jpg" alt="Vision 2" className="w-full h-96 object-cover" />
              </div>
              <div>
                <img src="/images/vision3.jpg" alt="Vision 3" className="w-full h-96 object-cover" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )

  // Goal component
  const Goal = () => (
    <div className="bg-green-200 p-10 min-h-fit">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-[2]">
          <h2 className="text-2xl text-green-800 font-bold mb-8">Our Goals</h2>
          <ul className='flex flex-col gap-4'>
            <li><strong>Improving Living Conditions:</strong> Elevating the standard of living for families and individuals in precarious situations.</li>
            <li><strong>Socio-Economic Integration:</strong> Facilitating the integration of beneficiaries into the socio-economic fabric of society.</li>
            <li><strong>Supporting Social and Environmental Projects:</strong> Creating and supporting projects with a positive social and environmental impact.</li>
            <li><strong>Enhancing Skills:</strong> Developing the skills and capacities of beneficiaries to ensure the sustainability and long-term impact of programs.</li>
            <li><strong>Promoting Development Culture:</strong> Promoting sustainable development and community participation.</li>
          </ul>
        </div>
        <div className="flex-1 max-w-[500px]">
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <Carousel autoplay>
              <div>
                <img src="/images/goal1.jpg" alt="Goal 1" className="w-full h-96 object-cover" />
              </div>
              <div>
                <img src="/images/goal2.jpg" alt="Goal 2" className="w-full h-96 object-cover" />
              </div>
              <div>
                <img src="/images/goal3.jpg" alt="Goal 3" className="w-full h-96 object-cover" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )

  // BureauNational component
  const BureauNational = () => {
    const members = [
      { image: '/fondateurs/F1.png', name: 'Ibrahim Talwi', job: 'National President' },
      { image: '/fondateurs/F2.png', name: 'Leila Fajah', job: 'Vice President in charge of Monitoring, Planning, and Auditing' },
      { image: '/fondateurs/F3.png', name: 'Jamal Grondi', job: 'Director of Administrative Affairs' },
      { image: '/fondateurs/F4.png', name: 'Karim Hamidouch', job: 'Deputy Director of Administrative Affairs' },
      { image: '/fondateurs/F5.png', name: 'Mbarak Kajout', job: 'Director of Financial Affairs and Properties' },
      { image: '/fondateurs/F6.png', name: 'Nuruddin Orini', job: 'Deputy Director of Financial Affairs and Properties' },
      { image: '/fondateurs/F7.png', name: 'Rachida Badrkhan', job: 'Director of Training and Human Resources Development' },
      { image: '/fondateurs/F8.png', name: 'Amin Toufik', job: 'Director of Communication and Social Marketing' },
      { image: '/fondateurs/F9.png', name: 'Abdel Latif Rachdi', job: 'Director of Welfare and Relief Services Sector' },
      { image: '/fondateurs/F10.png', name: 'Abdel Ali Oudhghiri', job: 'Deputy Director of Welfare and Relief Services Sector' },
      { image: '/fondateurs/F11.png', name: 'Abdullah Aboutan', job: 'Director of Social Development Sector' },
      { image: '/fondateurs/F12.png', name: 'Nuruddin Benheiba', job: 'Deputy Director of Social Development Sector' },
    ]

    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
      <div className="w-4/5 mx-auto m-4">
        <h2 className="text-center">Bureau National</h2>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {members.map((member, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden transition-opacity duration-500 cursor-pointer  ${index % 2 === 0 ? 'bg-lightblue' : 'bg-lightgreen'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img alt={member.name} src={member.image} className={`w-full h-auto ${hoveredIndex === index ? 'opacity-50':'opacity-100'}`} />
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 transform ${hoveredIndex === index ? 'translate-x-0' : '-translate-x-full'}`}>
                <h3 className={`text-blue-800 font-bold text-center ${hoveredIndex === index ? 'text-base md:text-lg' : 'text-sm'}`}>{hoveredIndex === index ? member.name : ''}</h3>
                <p className={`text-green-700 text-center ${hoveredIndex === index ? 'text-sm md:text-base' : 'text-xs'}`}>{hoveredIndex === index ? member.job : ''}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // BarAboutUs component
  const BarAboutUs = () => {
    const cards = [
      { icon: faBook, text: "Academic Excellence" },
      { icon: faPencil, text: "Continuous Learning" },
      { icon: faGraduationCap, text: "Professional Development" },
      { icon: faBrain, text: "Critical Thinking" }
    ]

    return (
      <div className="bar-about-us bg-light-blue p-5 max-w-7xl mx-auto">
        <h2 className="text-blue-500 text-center">Our Discipline</h2>
        <div className="cards flex justify-around flex-wrap">
          {cards.map((card, index) => (
            <div key={index} className="card flex-1 basis-48 m-2.5 text-center rounded-lg p-5 bg-white transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/50" 
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 255, 0.5)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
              <div className="icon text-3xl text-green-300">
                <FontAwesomeIcon icon={card.icon} />
              </div>
              <p className="text-blue-900">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <App id={1}>
      <div className='section-border'>
        <HeroAboutUs />
      </div> 
      <div className='section-border'>
        <Description />
      </div>
      <div className='section-border'>
        <Vision />
      </div>
      <div className='section-border'>
        <Goal />
      </div>
      <div className='section-border bg-blue-200'>
        <BureauNational />
      </div>
      <div className='section-border'>
        <BarAboutUs />
      </div>
    </App>
  )
}
