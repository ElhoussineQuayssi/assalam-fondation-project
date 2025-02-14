import { Typography, List } from "antd"

const { Title, Paragraph } = Typography

const objectives = [
  "Develop the educational level and ethical aspect of young people",
  "Work on developing educational, behavioral, and relational skills",
  "Teach a set of skills to interact with oneself and others",
  "Teach skills to manage one's action plan in life to achieve goals",
  "Empower young people through coaching and individual advice",
  "Help in acquiring necessary resources to improve educational conditions",
]

export default function Objectives() {
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

