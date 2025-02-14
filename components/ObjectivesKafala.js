import { Typography, List } from "antd"

const { Title, Paragraph } = Typography

const objectives = [
  "Provide comprehensive assistance to orphans",
  "Enable orphans to thrive in their natural family environment",
  "Offer social support",
  "Provide educational assistance",
  "Ensure psychological care",
  "Guarantee medical support",
]

export default function Objectives() {
  return (
    <div id="objectives" className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
          General Objective of the Project
        </Title>
        <Paragraph className="text-lg text-blue-800 mb-6 text-center">
          Offer comprehensive protection to orphans within their families.
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

