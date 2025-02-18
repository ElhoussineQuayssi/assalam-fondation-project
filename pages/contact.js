"use client"

import { Form, Input, Button } from "antd"
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons"
import { useState } from "react"
import Layout from "@/components/Layout"

const ContactPage = () => {
  // ContactForm component
  const ContactForm = () => (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Contact Us</h2>
      <Form layout="vertical">
        <Form.Item label="Name" name="name" required>
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item label="Email" name="email" required>
          <Input type="email" placeholder="Your Email" />
        </Form.Item>
        <Form.Item label="Subject" name="subject" required>
          <Input placeholder="Subject" />
        </Form.Item>
        <Form.Item label="Message" name="message" required>
          <Input.TextArea placeholder="Your Message" rows={6} />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Send Message
        </Button>
      </Form>
    </div>
  )

  // FlipCard component
  const FlipCard = () => {
    const [flipped, setFlipped] = useState(false)

    const handleFlip = () => setFlipped(!flipped)

    return (
      <div
        className={`w-full h-80 bg-blue-600 rounded-lg text-white flex items-center justify-center p-6 transition-transform duration-300 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(0deg)",
          transition: "transform 0.6s",
        }}
        onMouseEnter={handleFlip}
        onMouseLeave={handleFlip}
      >
        <div
          className={`absolute w-full h-full text-center flex items-center justify-center ${
            flipped ? "hidden" : ""
          }`}
        >
          <h3 className="text-xl font-bold">Transforming Lives, Building Futures</h3>
        </div>

        <div
          className={`absolute w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-4 p-6 ${
            flipped ? "" : "hidden"
          }`}
        >
          <p className="flex items-center">
            <EnvironmentOutlined className="mr-2" /> Casablanca, Anfa, Morocco
          </p>
          <p className="flex items-center">
            <PhoneOutlined className="mr-2" /> +212 5XX XXX XXX
          </p>
          <p className="flex items-center">
            <MailOutlined className="mr-2" /> contact@fondationassalam.ma
          </p>
        </div>
      </div>
    )
  }

  return (
    <Layout id={4}>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <FlipCard />
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
