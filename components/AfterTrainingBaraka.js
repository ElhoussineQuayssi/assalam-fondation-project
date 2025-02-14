import { Typography, Card, Row, Col } from "antd"

const { Title, Paragraph } = Typography

const opportunities = [
  { title: "Cooperatives", description: "Group together to form cooperatives in the culinary sector" },
  {
    title: "Home-based Projects",
    description: "Launch their own projects from home, offering traditional pastries to individuals and professionals",
  },
]

export default function AfterTraining() {
  return (
    <div className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          After Training: A Promising Future
        </Title>
        <Paragraph className="text-lg text-green-800 mb-6 text-center">
          Thanks to this training, participants can:
        </Paragraph>
        <Row gutter={[16, 16]} justify="center">
          {opportunities.map((opportunity, index) => (
            <Col xs={24} md={12} key={index}>
              <Card className="h-full shadow-lg">
                <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
                  {opportunity.title}
                </Title>
                <Paragraph className="text-green-800">{opportunity.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

