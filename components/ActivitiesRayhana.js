import { Typography, Card, Row, Col } from "antd"

const { Title, Paragraph } = Typography

const activities = [
  {
    category: "Educational Activities",
    items: [
      "Learning letters, numbers, and colors",
      "Educational games to stimulate critical thinking",
      "Storytelling to improve listening and concentration",
    ],
  },
  {
    category: "Physical Activities",
    items: ["Group games to reinforce cooperation", "Physical exercises to improve coordination"],
  },
  {
    category: "Social and Emotional Activities",
    items: [
      "Peer communication skills",
      "Educational sessions on values like friendship and respect",
      "Group and individual problem-solving exercises",
    ],
  },
  {
    category: "Creative and Artistic Activities",
    items: ["Drawing and coloring", "Crafting with simple and safe materials", "Music, dance, and theater activities"],
  },
]

export default function Activities() {
  return (
    <div id="activities" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          Our Activities
        </Title>
        <Row gutter={[16, 16]}>
          {activities.map((activity, index) => (
            <Col xs={24} md={12} key={index}>
              <Card className="h-full shadow-lg">
                <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
                  {activity.category}
                </Title>
                <ul className="list-disc pl-5">
                  {activity.items.map((item, idx) => (
                    <li key={idx} className="text-green-800 mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

