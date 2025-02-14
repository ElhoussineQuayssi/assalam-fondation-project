import { Typography, List } from "antd"

const { Title, Paragraph } = Typography

const missionPoints = [
  "Transmit sewing expertise, blending Moroccan traditions with modern techniques",
  "Promote the empowerment of women in difficulty through professional training",
  "Contribute to the personal and professional development of participants",
]

export default function Mission() {
  return (
    <div id="mission" className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Our Mission and Objectives
        </Title>
        <Paragraph className="text-lg text-blue-800 mb-6 text-center">At Nadi Assalam, we are committed to:</Paragraph>
        <List
          dataSource={missionPoints}
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

