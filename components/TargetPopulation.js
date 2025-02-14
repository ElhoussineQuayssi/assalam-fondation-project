import { Typography, List } from "antd"

const { Title, Paragraph } = Typography

const targetGroups = [
  "Women and girls victims of violence",
  "Women and children in difficult situations",
  "Widows and orphans benefiting from the association's services",
  "Families and relatives of women and girls victims of violence or in difficult situations",
  "Staff of listening centers",
  "Various stakeholders in the field of combating violence at local, regional, and national levels",
]

export default function TargetPopulation() {
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

