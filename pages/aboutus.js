"use client"

import { Collapse } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faPencil, faGraduationCap, faBrain } from "@fortawesome/free-solid-svg-icons"
import App from "@/components/Layout"

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
        children: 'Description of our mission...'
      },
      {
        key: '2',
        label: 'Our Values',
        children: 'Description of our values...'
      },
      {
        key: '3',
        label: 'Our Impact',
        children: 'Description极 of our impact...'
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
        </div>
      </div>
    )
  }

  // Vision component
  const Vision = () => (
    <div className="bg-light-blue-200 p-10 min极-h-screen flex flex-col md:flex-row">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-base mb-8">
          Our vision is to empower communities and create sustainable solutions for a better future.
        </p>
      </div>
    </div>
  )

  // Goal component
  const Goal = () => (
    <div className="bg-light-blue-200 p-10 min-h-screen flex flex-col md:flex-row">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Our Goals</h2>
        <p className="text-base mb-8">
          Our mission is to create a positive impact in the community through various initiatives and projects.
        </p>
      </div>
    </div>
  )

  // BureauNational component
  const BureauNational = () => {
    const members = [
      { image: '/fondateurs/F1.jpeg', name: 'Name 1', job: 'Job 1' },
      { image: '/fondateurs/F2.jpeg', name: 'Name 2', job: 'Job 2' },
      { image: '/fondateurs/F3.jpeg', name: 'Name 3', job: 'Job 3' },
      { image: '/fondateurs/F5.jpeg', name: 'Name 4', job: 'Job 4' },
      { image: '/fondateurs/F6.jpeg', name: 'Name 5', job: 'Job 5' },
      { image: '/fondateurs/F8.jpeg', name: 'Name 6', job: 'Job 6' },
      { image: '/fondateurs/F11.jpeg', name: 'Name 7', job: 'Job 7' },
      { image: '/fondateurs/F12.jpeg', name: 'Name 8', job: 'Job 8' },
      { image: '/fondateurs/F1.jpeg', name: 'Name 9', job: 'Job 9' },
      { image: '/fondateurs/F2.jpeg', name: 'Name 10', job: 'Job 10' },
      { image: '/fondateurs/F3.jpeg', name: 'Name 11', job: 'Job 11' },
      { image: '/fondateurs/F5.jpeg', name: 'Name 12', job: 'Job 12' },
    ]

    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
      <div className="w-4/5 mx-auto bg-lightblue">
        <h2 className="text-center">Bureau National</h2>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {members.map((member, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-500  ${index % 2 === 0 ? 'bg-lightblue' : 'bg-lightgreen'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img alt={member.name} src={member.image} className="w-full h-auto " />
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 transform ${hoveredIndex === index ? 'translate-x-0' : '-translate-x-full'}`}>
                <h3 className={`text-white ${hoveredIndex === index ? 'text-base md:text-lg' : 'text-sm'}`}>{hoveredIndex === index ? member.name : ''}</h3>
                <p className={`text-white ${hoveredIndex === index ? 'text-sm md:text-base' : 'text-xs'}`}>{hoveredIndex === index ? member.job : ''}</p>
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
      <div className='section-border'>
        <BureauNational />
      </div>
      <div className='section-border'>
        <BarAboutUs />
      </div>
    </App>
  )
}
