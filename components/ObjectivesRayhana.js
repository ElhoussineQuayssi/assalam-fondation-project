import { Typography, List } from "antd"

const { Title, Paragraph } = Typography

const objectives = [
  "Develop children's skills in language, mathematics, and arts",
  "Strengthen cooperation and teamwork skills",
  "Encourage critical thinking and creativity in children",
  "Build a healthy relationship between the child and their educational environment",
  "Improve children's learning level before entering primary school",
  "Foster social relationships among children",
  "Discover children's specific talents and skills from an early age",
]

export default function Objectives() {
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

