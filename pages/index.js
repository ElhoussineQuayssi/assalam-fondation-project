"use client"

import { Card, Button } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import Link from "next/link"
import { UserPlus, MapPin, Star, Group } from "lucide-react"
import AOS from "aos"
import { useEffect, useState } from "react"
import App from "@/components/Layout"
import { format } from "date-fns"
import { useRouter } from "next/router"

export default function Home() {
  const { Meta } = Card

  // Hero component
  const Hero = () => {
    const router = useRouter()

    const handleButtonClick = () => {
      router.push('/aboutus')
    }

    return (
      <div className="hero" style={{ 
        backgroundImage: 'url(/bg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '100vh',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'white', 
        position: 'relative' 
      }}>
        <div className="overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }} />
        <h1 style={{ zIndex: 2, marginBottom: '20px', fontWeight: 'bold', fontSize: '2.5rem',color:"lightblue" }}>Assalam Fondation</h1>
        <p style={{ zIndex: 2, marginBottom: '20px' }}>Transforming Lives, Building Futures: The assalam foundation's commitment to social development Casablanca anfa </p>
        <button onClick={handleButtonClick} className="hero-button" style={{ zIndex: 2 }}>
          About Us
        </button>
      </div>
    )
  }

  // AboutUs component
  const AboutUs = () => (
    <div className="about-us" style={{ height: '90vh',padding: '20px' }}>
      <h2 style={{ color: 'blue', fontWeight: 'bold', fontSize: '2rem' }}>About Us</h2>
      <div className="about-us-content" style={{height: '100%'}}>
        <div className="description text-lg">
          <p className="pb-2">
            Welcome to Assalam Fondation! We are dedicated to making a positive impact in our community through various initiatives and programs. Our mission is to empower individuals and foster a sense of belonging and support.
          </p>
          <p>
            We believe in the power of collaboration and strive to work alongside community members to create sustainable solutions that address the needs of our society.
          </p>
        </div>
        <div className="video">
          <iframe 
            width="560" 
            height="415" 
            src="https://www.youtube.com/watch?v=THYvJgllb-o" 
          ></iframe>
        </div>
      </div>
    </div>
  )

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
        <h2 style={{ color: 'green', fontWeight: 'bold', fontSize: '2rem' }}>Our Projects</h2>
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

  // News component
  const News = () => {
    const [newsData, setNewsData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [select, setSelect] = useState(3)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      const fetchArticles = async () => {
        try {
          const response = await fetch('/api/articles')
          if (!response.ok) {
            throw new Error('Failed to fetch articles')
          }
          const data = await response.json()
          setNewsData(data)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      }

      fetchArticles()
    }, [])

    if (loading) {
      return <div className="text-center py-8 ">Loading articles...</div>
    }

    if (error) {
      return <div className="text-center py-8 text-red-500">Error: {error}</div>
    }

    return (
      <section className="py-8 px-4 bg-gray-50">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600" style={{ fontSize: '2rem' }}>Latest News and Updates</h1>
          <p className="text-xl text-gray-600">Stay up-to-date with our latest projects and initiatives.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4" style={{ fontSize: '1.8rem' }}>All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.slice(0, select).map(news => (
              <Card 
                key={news.id}
                hoverable
                cover={<img alt="example" src={news.image ? `/uploads/${news.image}` : '/default-news.jpg'} />}
                className="shadow-lg rounded-lg"
              >
                <Meta title={news.title} description={`${format(news.updatedAt,"yyyy-MM-dd")} | ${Object.values(news.tags).join(' ,')}`} />
                <Button href={`/news/${news.id}`} className="mt-4" type="primary">Read More</Button>
              </Card>
            ))}
          </div>
        </div>

        {newsData.length > select && (
          <div className="text-center">
            <Button type="primary" onClick={() => setSelect(select + 3)}>Load More</Button>
          </div>
        )}
      </section>
    )
  }

  // BarComponent
  const BarComponent = () => {
    useEffect(() => {
      AOS.init()
    }, [])

    const squares = [
      { icon: <UserPlus />, number: '+300', text: 'Volunteer with the Foundation' },
      { icon: <MapPin />, number:'+35', text: 'Branches of the Foundation' },
      { icon: <Star />, number:'90%', text: 'Completed Programs' },
      { icon: <Group />, number: '+450' ,text: 'Beneficiary Family' },
    ]




    return (
      <div className="bar-component" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', height: "" }}>
        {squares.map((square, index) => (
          <div key={index} className="square cursor-pointer" data-aos="fade-up" style={{ margin: '10px', textAlign: 'center', flex: '1 1 200px', borderRadius: '8px', padding: '20px', backgroundColor: "#ebebeb" }}>
            <p style={{ color: 'darkblue' }} className="text-md py-2">{square.number}</p>
            <p style={{ fontWeight: 'bold', color: 'darkblue' }}>{square.text}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <App id={1}>
      <div id="hero" className="section-border"><Hero /></div>
      <div id="about-us" className="section-border" style={{backgroundColor: 'lightblue'}}><AboutUs /></div>
      <div id="projects" className="section-border" style={{backgroundColor: 'lightgreen'}}><Projects /></div>
      <div id="news" className="section-border" style={{backgroundColor: 'lightblue'}}><News /></div>
      <div id="bar-component" className="section-border"><BarComponent /></div>
    </App>
  )
}
