import { Typography, List } from "antd"

const { Title, Paragraph } = Typography

const impactPoints = [
  "Fighting against precariousness by offering concrete professional opportunities",
  "Strengthening the spirit of solidarity and cooperation within local communities",
  "Enhancing the role of women in economic and social development",
  "Preserving and promoting Moroccan culinary heritage",
]

export default function Impact() {
  return (
    <div id="impact" className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Social Impact
        </Title>
        <Paragraph className="text-lg text-blue-800 mb-6 text-center">Fataer Al Baraka contributes to:</Paragraph>
        <List
          dataSource={impactPoints}
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

